/**
 * "Export to Health Dashboard" — builds a styled, chart-embedded .xlsx from
 * one or more parsed lab tests, entirely client-side.
 *
 * Architecture notes (see conversation for the full reasoning):
 *   - exceljs, not xlsx/SheetJS: the free SheetJS build can't write charts
 *     at all; exceljs supports both cell styling and image embedding.
 *   - exceljs is dynamically imported (import()) inside exportHealthDashboard,
 *     not at module top level, so its ~1MB+ isn't added to every page's
 *     initial bundle — only users who actually click "Export" pay for it.
 *   - No live/native Excel chart object: no free JS library reliably writes
 *     one. The "Trends" sheet embeds a PNG rendered by lib/canvasChart.js
 *     instead — a real chart visually, just not re-pivotable inside Excel.
 *   - Works from either a single current result (one data point, no trend
 *     line possible) or a full saved-test history from Firestore (real
 *     multi-year trends) — same function, the caller decides what to pass.
 */

import { renderTrendChartsToDataUrl, dataUrlToBase64 } from './canvasChart';
import { toJsDate, normalizeName, buildFlatRowsAndSeries } from './biomarkerTrends';

const STATUS_FILL = {
    low: 'FFFEF3C7',      // amber-100
    high: 'FFFEE2E2',     // red-100
    abnormal: 'FFFEE2E2', // red-100 — qualitative mismatch (e.g. "Positive" vs "Negative")
    normal: 'FFDCFCE7',   // green-100
    // Deliberately visible (not blank white) — a row that genuinely
    // couldn't be checked should look intentional, not like styling broke.
    unknown: 'FFF3F4F6',  // gray-100
};

const BRAND_INDIGO = 'FF4F46E5';

/**
 * @typedef {Object} DashboardTest
 * @property {string} [id]
 * @property {string} label
 * @property {Date|{toDate:()=>Date}|string|number} createdAt
 * @property {string[]} headers
 * @property {Array<Array<string|number>>} rows
 */

function styleHeaderRow(row) {
    row.eachCell((cell) => {
        cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BRAND_INDIGO } };
        cell.alignment = { vertical: 'middle', horizontal: 'left' };
    });
    row.height = 20;
}

function buildOverviewSheet(workbook, tests, flatRows) {
    const sheet = workbook.addWorksheet('Overview');
    sheet.columns = [{ width: 28 }, { width: 40 }];

    sheet.mergeCells('A1:B1');
    sheet.getCell('A1').value = 'Health Dashboard';
    sheet.getCell('A1').font = { bold: true, size: 18, color: { argb: BRAND_INDIGO } };
    sheet.getRow(1).height = 28;

    sheet.getCell('A3').value = 'Generated';
    sheet.getCell('B3').value = new Date().toLocaleDateString();
    sheet.getCell('A4').value = 'Tests included';
    sheet.getCell('B4').value = tests.length;
    sheet.getCell('A5').value = 'Total results';
    sheet.getCell('B5').value = flatRows.length;
    const anomalyCount = flatRows.filter((r) => r.status === 'low' || r.status === 'high').length;
    sheet.getCell('A6').value = 'Out-of-range results';
    sheet.getCell('B6').value = anomalyCount;
    for (const cellRef of ['A3', 'A4', 'A5', 'A6']) sheet.getCell(cellRef).font = { bold: true };

    sheet.getCell('A8').value = 'Included tests';
    sheet.getCell('A8').font = { bold: true, size: 12 };
    const headerRow = sheet.addRow(['Date', 'Label']);
    headerRow.eachCell((c) => { c.font = { bold: true }; });
    tests
        .slice()
        .sort((a, b) => toJsDate(a.createdAt) - toJsDate(b.createdAt))
        .forEach((t) => sheet.addRow([toJsDate(t.createdAt).toLocaleDateString(), t.label]));

    sheet.getCell('A2').value =
        'This tool only reformats your saved results for personal record-keeping — it does not diagnose or interpret. Always consult a licensed healthcare provider.';
    sheet.getCell('A2').font = { italic: true, size: 9, color: { argb: 'FF6B7280' } };
    sheet.mergeCells('A2:B2');
}

function buildHistorySheet(workbook, tests, flatRows) {
    // NOTE: 'History' is a reserved worksheet name in Excel/exceljs (legacy
    // change-tracking feature) and throws if used — hence 'Results History'.
    const sheet = workbook.addWorksheet('Results History');

    const dates = tests
        .slice()
        .sort((a, b) => toJsDate(a.createdAt) - toJsDate(b.createdAt))
        .map((t) => toJsDate(t.createdAt));
    const dateLabels = dates.map((d) => d.toLocaleDateString());

    const biomarkerOrder = [];
    const seen = new Set();
    for (const r of flatRows) {
        const key = normalizeName(r.biomarker);
        if (!seen.has(key)) { seen.add(key); biomarkerOrder.push(r.biomarker); }
    }

    // matrix[biomarkerKey][dateLabel] = { result, status }
    const matrix = new Map();
    for (const r of flatRows) {
        const key = normalizeName(r.biomarker);
        if (!matrix.has(key)) matrix.set(key, {});
        matrix.get(key)[toJsDate(r.date).toLocaleDateString()] = { result: r.result, status: r.status };
    }

    const headerRow = sheet.addRow(['Biomarker', ...dateLabels]);
    styleHeaderRow(headerRow);
    sheet.getColumn(1).width = 32;
    dateLabels.forEach((_, i) => { sheet.getColumn(i + 2).width = 14; });

    biomarkerOrder.forEach((biomarker) => {
        const key = normalizeName(biomarker);
        const values = matrix.get(key) || {};
        const row = sheet.addRow([
            biomarker,
            ...dateLabels.map((label) => (values[label] ? values[label].result : '')),
        ]);
        dateLabels.forEach((label, i) => {
            const status = values[label]?.status;
            const fill = STATUS_FILL[status];
            if (fill) {
                row.getCell(i + 2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: fill } };
            }
        });
    });

    sheet.views = [{ state: 'frozen', xSplit: 1, ySplit: 1 }];
}

function buildRawDataSheet(workbook, flatRows) {
    const sheet = workbook.addWorksheet('Raw Data');
    sheet.columns = [
        { header: 'Date', key: 'date', width: 14 },
        { header: 'Test', key: 'testLabel', width: 24 },
        { header: 'Biomarker', key: 'biomarker', width: 32 },
        { header: 'Result', key: 'result', width: 14 },
        { header: 'Reference Range', key: 'range', width: 20 },
        { header: 'Status', key: 'status', width: 12 },
    ];
    styleHeaderRow(sheet.getRow(1));

    flatRows.forEach((r) => {
        const row = sheet.addRow({
            date: toJsDate(r.date).toLocaleDateString(),
            testLabel: r.testLabel,
            biomarker: r.biomarker,
            result: r.result,
            range: r.range,
            status: r.status,
        });
        const fill = STATUS_FILL[r.status];
        if (fill) row.getCell('status').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: fill } };
    });
}

async function buildTrendsSheet(workbook, trackableSeries) {
    if (!trackableSeries.length) return;

    const dataUrl = renderTrendChartsToDataUrl(trackableSeries, 2);
    if (!dataUrl) return; // not running in a browser (SSR safety)

    const sheet = workbook.addWorksheet('Trends');
    sheet.getCell('A1').value = 'Biomarkers tracked across 2+ visits';
    sheet.getCell('A1').font = { bold: true, size: 12, color: { argb: BRAND_INDIGO } };

    const imageId = workbook.addImage({ base64: dataUrlToBase64(dataUrl), extension: 'png' });
    const columns = 2;
    const rows = Math.ceil(trackableSeries.length / columns);
    sheet.addImage(imageId, {
        tl: { col: 0, row: 2 },
        ext: { width: 480 * columns, height: 260 * rows },
    });
}

/**
 * Builds the workbook and triggers a browser download.
 * @param {DashboardTest[]} tests One or more tests (single current result, or full saved history)
 * @param {string} [filename]
 */
export async function exportHealthDashboard(tests, filename = 'health-dashboard.xlsx') {
    if (!tests?.length) throw new Error('No test data to export.');

    // Dynamic import keeps exceljs out of the main bundle — only paid for on click.
    const ExcelJS = (await import('exceljs')).default;
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Online Blood Test Converter';
    workbook.created = new Date();

    const { flatRows, trackableSeries } = buildFlatRowsAndSeries(tests);

    // Trends goes first (both in tab order and as the sheet that's open on
    // load) so the chart is the first thing seen, not buried after three
    // other tabs — buildTrendsSheet skips adding a sheet at all when there's
    // no chartable data (a single test with no repeated biomarkers), in
    // which case Overview naturally becomes index 0 instead, which is still
    // the right sheet to land on.
    await buildTrendsSheet(workbook, trackableSeries);
    buildOverviewSheet(workbook, tests, flatRows);
    buildHistorySheet(workbook, tests, flatRows);
    buildRawDataSheet(workbook, flatRows);
    workbook.views = [{ activeTab: 0 }];

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    // Same download-trigger pattern as handleDownloadTable in FileUploaderWidget.js.
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

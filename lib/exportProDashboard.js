/**
 * "Export to Pro Health Dashboard" — injects a user's saved test history
 * into public/template.xlsx (which already has native, editable Line
 * Charts on its Dashboard sheet, pre-built once via
 * scripts/generate_dashboard_template.py) and downloads the result.
 *
 * Library choice: xlsx-populate, NOT exceljs. Verified directly this
 * session: exceljs throws just trying to *load* a file containing a chart
 * (a bug in its drawing/relationship reconciliation, not specific to how
 * the chart was authored). xlsx-populate loads such files correctly and
 * was confirmed — via an independent round-trip check through openpyxl —
 * to preserve the chart byte-for-byte while correctly injecting new cell
 * values and fill colors. exceljs remains the right tool for the *other*
 * export (lib/exportHealthDashboard.js), which builds a workbook from
 * scratch and never loads a file with a chart in it — different problem,
 * different library.
 *
 * Both xlsx-populate and exceljs are large; both are dynamically imported
 * only when their respective export button is actually clicked.
 */

import { getAnomalyStatus } from './anomalyDetection';
import {
    DATA_SHEET_NAME,
    DATA_START_ROW,
    DATE_COLUMN,
    TEMPLATE_BIOMARKER_COLUMNS,
    matchTemplateColumn,
} from './proDashboardTemplate';

// Same palette as lib/exportHealthDashboard.js's STATUS_FILL — kept as a
// separate constant (not imported) since xlsx-populate's cell.style({fill})
// takes a bare ARGB hex string, same format, but there's no shared consumer
// to justify centralizing it, and duplicating a 4-line color map is cheaper
// than an awkward cross-import between two independently-loaded libraries.
const STATUS_FILL = {
    low: 'FFFEF3C7',
    high: 'FFFEE2E2',
    abnormal: 'FFFEE2E2',
    normal: 'FFDCFCE7',
    unknown: 'FFF3F4F6', // visible neutral, not blank white — see STATUS_FILL in exportHealthDashboard.js
};

function toJsDate(createdAt) {
    if (!createdAt) return new Date();
    if (typeof createdAt?.toDate === 'function') return createdAt.toDate(); // Firestore Timestamp
    return new Date(createdAt);
}

/**
 * Finds, for one test's parsed rows, the result value for each tracked
 * template biomarker column (first match wins if a biomarker appears more
 * than once in a single report).
 * @param {string[]} headers
 * @param {Array<Array<string|number>>} rows
 * @returns {Map<string, {result: string|number, status: string}>} keyed by column letter
 */
function extractTemplateValues(headers, rows) {
    const resultIdx = headers.findIndex((h) => /result|value|результат|значення/i.test(h));
    const rangeIdx = headers.findIndex((h) => /range|interval|reference|норма|референт/i.test(h));
    const values = new Map();

    for (const row of rows) {
        const match = matchTemplateColumn(row[0]);
        if (!match || values.has(match.column)) continue; // first match wins per test

        const result = resultIdx !== -1 ? row[resultIdx] : row[1];
        const range = rangeIdx !== -1 ? row[rangeIdx] : undefined;
        const status = rangeIdx !== -1 ? getAnomalyStatus(result, range) : 'unknown';
        values.set(match.column, { result, status });
    }
    return values;
}

/**
 * @typedef {Object} DashboardTest
 * @property {string} label
 * @property {Date|{toDate:()=>Date}|string|number} createdAt
 * @property {string[]} headers
 * @property {Array<Array<string|number>>} rows
 */

/**
 * Builds the personalized dashboard workbook and triggers a browser download.
 * @param {DashboardTest[]} tests One or more saved tests, any order (sorted by date here)
 * @param {string} [filename]
 */
export async function exportProDashboard(tests, filename = 'My_Health_Dashboard.xlsx') {
    if (!tests?.length) throw new Error('No test data to export.');

    // Dynamic import: keeps xlsx-populate out of the main bundle — only
    // fetched when this function actually runs. Must import the package's
    // dedicated browser build by explicit path: its package.json "browser"
    // field remaps an internal bare specifier, not the package's own main
    // entry, so a plain `import from 'xlsx-populate'` pulls in the Node
    // build and fails at build time trying to bundle Node's `fs` module
    // (confirmed by actually running `next build` against it).
    const XlsxPopulate = (await import('xlsx-populate/browser/xlsx-populate.js')).default;

    const templateResponse = await fetch('/template.xlsx');
    if (!templateResponse.ok) {
        throw new Error(
            'Could not load the dashboard template (public/template.xlsx). ' +
            'Run scripts/generate_dashboard_template.py to (re)create it.'
        );
    }
    const templateBuffer = await templateResponse.arrayBuffer();

    const workbook = await XlsxPopulate.fromDataAsync(templateBuffer);
    const sheet = workbook.sheet(DATA_SHEET_NAME);
    if (!sheet) {
        throw new Error(`Template is missing the "${DATA_SHEET_NAME}" sheet — check public/template.xlsx.`);
    }

    const sortedTests = tests.slice().sort((a, b) => toJsDate(a.createdAt) - toJsDate(b.createdAt));

    sortedTests.forEach((test, i) => {
        const rowNum = DATA_START_ROW + i;
        sheet.cell(`${DATE_COLUMN}${rowNum}`).value(toJsDate(test.createdAt).toLocaleDateString());

        const values = extractTemplateValues(test.headers, test.rows);
        for (const { column } of TEMPLATE_BIOMARKER_COLUMNS) {
            const entry = values.get(column);
            if (!entry) continue; // leave blank — the chart just skips it, no zero/placeholder written

            const cell = sheet.cell(`${column}${rowNum}`);
            const numericValue = parseFloat(String(entry.result).replace(',', '.'));
            cell.value(Number.isNaN(numericValue) ? String(entry.result) : numericValue);

            const fill = STATUS_FILL[entry.status];
            if (fill) cell.style({ fill });
        }
    });

    const blob = await workbook.outputAsync(); // defaults to 'blob' in the browser
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

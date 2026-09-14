/**
 * Minimal, dependency-free line-chart renderer for embedding a trend chart
 * into the exported .xlsx (see lib/exportHealthDashboard.js).
 *
 * Deliberately hand-rolled instead of using `recharts` (already a project
 * dependency for on-screen charts): recharts renders SVG, and turning that
 * into a raster image for xlsx embedding means serializing the SVG, loading
 * it into an <img>, and drawing it to a canvas — a path with known
 * cross-browser quirks (fonts, foreignObject, tainted-canvas edge cases).
 * A plain 2D canvas has none of that; this only runs in the browser.
 *
 * STATUS_COLORS mirrors components/AnomalyBadge.js so a point's color means
 * the same thing here as it does in the on-screen table.
 */

const STATUS_COLORS = {
    low: '#d97706',     // amber-600
    high: '#dc2626',    // red-600
    abnormal: '#dc2626', // red-600 — qualitative mismatch (e.g. "Positive" vs "Negative")
    normal: '#16a34a',  // green-600
    unknown: '#9ca3af', // gray-400
};

const PANEL_WIDTH = 480;
const PANEL_HEIGHT = 260;
const PADDING = { top: 36, right: 20, bottom: 40, left: 56 };

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{title: string, points: Array<{date: Date, value: number, status: string}>}} series
 * @param {number} originX top-left x of this panel within the composite canvas
 * @param {number} originY top-left y of this panel within the composite canvas
 */
function drawPanel(ctx, series, originX, originY) {
    const { title, points } = series;
    const plotW = PANEL_WIDTH - PADDING.left - PADDING.right;
    const plotH = PANEL_HEIGHT - PADDING.top - PADDING.bottom;
    const plotX = originX + PADDING.left;
    const plotY = originY + PADDING.top;

    // Panel background + border
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(originX, originY, PANEL_WIDTH, PANEL_HEIGHT);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.strokeRect(originX + 0.5, originY + 0.5, PANEL_WIDTH - 1, PANEL_HEIGHT - 1);

    // Title
    ctx.fillStyle = '#312e81'; // indigo-900
    ctx.font = 'bold 15px Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(title, originX + 12, originY + 22);

    const values = points.map((p) => p.value);
    let min = Math.min(...values);
    let max = Math.max(...values);
    if (min === max) {
        // Flat series — give it an arbitrary band so it's not a zero-height line.
        min -= Math.abs(min) * 0.1 || 1;
        max += Math.abs(max) * 0.1 || 1;
    }
    const span = max - min;
    const yPad = span * 0.15;
    min -= yPad;
    max += yPad;

    const xForIndex = (i) =>
        points.length === 1 ? plotX + plotW / 2 : plotX + (i / (points.length - 1)) * plotW;
    const yForValue = (v) => plotY + plotH - ((v - min) / (max - min)) * plotH;

    // Axes
    ctx.strokeStyle = '#d1d5db';
    ctx.beginPath();
    ctx.moveTo(plotX, plotY);
    ctx.lineTo(plotX, plotY + plotH);
    ctx.lineTo(plotX + plotW, plotY + plotH);
    ctx.stroke();

    // Y-axis min/max labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px Arial, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(max.toFixed(1), plotX - 6, yForValue(max) + 4);
    ctx.fillText(min.toFixed(1), plotX - 6, yForValue(min) + 4);

    // Connecting line
    ctx.strokeStyle = '#6366f1'; // indigo-500
    ctx.lineWidth = 2;
    ctx.beginPath();
    points.forEach((p, i) => {
        const x = xForIndex(i);
        const y = yForValue(p.value);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Points, colored by anomaly status, + date labels for first/last/every-other point
    ctx.textAlign = 'center';
    points.forEach((p, i) => {
        const x = xForIndex(i);
        const y = yForValue(p.value);

        ctx.fillStyle = STATUS_COLORS[p.status] || STATUS_COLORS.unknown;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        const showLabel =
            points.length <= 6 || i === 0 || i === points.length - 1 || i % 2 === 0;
        if (showLabel) {
            ctx.fillStyle = '#6b7280';
            ctx.font = '9px Arial, sans-serif';
            const label = p.date.toLocaleDateString(undefined, { month: 'short', year: '2-digit' });
            ctx.fillText(label, x, plotY + plotH + 14);
        }
    });
}

/**
 * Renders one or more biomarker trend series as a grid of small line-chart
 * panels on a single composite canvas, and returns a PNG data URL.
 *
 * @param {Array<{title: string, points: Array<{date: Date, value: number, status: string}>}>} seriesList
 * @param {number} [columns=2]
 * @returns {string} PNG data URL, or null if run outside a browser
 */
export function renderTrendChartsToDataUrl(seriesList, columns = 2) {
    if (typeof document === 'undefined' || !seriesList.length) return null;

    const rows = Math.ceil(seriesList.length / columns);
    const canvas = document.createElement('canvas');
    canvas.width = PANEL_WIDTH * columns;
    canvas.height = PANEL_HEIGHT * rows;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f9fafb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    seriesList.forEach((series, i) => {
        const col = i % columns;
        const row = Math.floor(i / columns);
        drawPanel(ctx, series, col * PANEL_WIDTH, row * PANEL_HEIGHT);
    });

    return canvas.toDataURL('image/png');
}

/** Converts a data URL (as returned above) to a base64 string for exceljs. */
export function dataUrlToBase64(dataUrl) {
    return dataUrl.split(',')[1];
}

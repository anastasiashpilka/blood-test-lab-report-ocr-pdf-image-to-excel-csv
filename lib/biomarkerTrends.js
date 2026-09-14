/**
 * Shared biomarker-history data shaping, used by both the .xlsx "Health
 * Dashboard" export (lib/exportHealthDashboard.js) and the on-screen
 * /my-tests/trends dashboard. Single source of truth for turning a list of
 * saved tests ({id, label, createdAt, headers, rows}) into per-biomarker
 * time series, so the two features can't quietly disagree.
 */

import {
  findResultColumnIndex,
  findRangeColumnIndex,
  getAnomalyStatus,
  parseReferenceRange,
} from './anomalyDetection';

const MAX_TREND_PANELS = 6;

export function toJsDate(createdAt) {
  if (!createdAt) return new Date();
  if (typeof createdAt?.toDate === 'function') return createdAt.toDate(); // Firestore Timestamp
  return new Date(createdAt);
}

export const normalizeName = (name) =>
  String(name || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

/**
 * Flattens every test into one row per biomarker result:
 * { date, testLabel, biomarker, result, range, status }
 */
export function flattenTests(tests) {
  const flatRows = [];
  for (const test of tests) {
    const date = toJsDate(test.createdAt);
    const resultIdx = findResultColumnIndex(test.headers);
    const rangeIdx = findRangeColumnIndex(test.headers);

    for (const row of test.rows) {
      const biomarkerName = row[0];
      const result = resultIdx !== -1 ? row[resultIdx] : undefined;
      const range = rangeIdx !== -1 ? row[rangeIdx] : undefined;
      const status =
        resultIdx !== -1 && rangeIdx !== -1 ? getAnomalyStatus(result, range) : 'unknown';

      flatRows.push({
        date,
        testLabel: test.label,
        biomarker: biomarkerName,
        result,
        range,
        status,
      });
    }
  }
  return flatRows;
}

/**
 * Groups flattened rows into per-biomarker point series for charting
 * (canvasChart.js / TrendChart.js point shape: { date, value, status }).
 * @param {ReturnType<typeof flattenTests>} flatRows
 * @param {{maxPanels?: number, minPoints?: number}} [opts]
 */
export function groupSeriesByBiomarker(
  flatRows,
  { maxPanels = MAX_TREND_PANELS, minPoints = 2 } = {}
) {
  const seriesByBiomarker = new Map();

  for (const row of flatRows) {
    const numericValue = parseFloat(String(row.result ?? '').replace(',', '.'));
    if (!row.biomarker || Number.isNaN(numericValue)) continue;

    const key = normalizeName(row.biomarker);
    if (!seriesByBiomarker.has(key)) {
      seriesByBiomarker.set(key, { title: String(row.biomarker).trim(), points: [] });
    }
    seriesByBiomarker
      .get(key)
      .points.push({ date: row.date, value: numericValue, status: row.status });
  }

  return [...seriesByBiomarker.values()]
    .filter((s) => s.points.length >= minPoints)
    .map((s) => ({ ...s, points: s.points.sort((a, b) => a.date - b.date) }))
    .sort((a, b) => b.points.length - a.points.length)
    .slice(0, maxPanels);
}

/** Used by exportHealthDashboard.js — same behavior it always had. */
export function buildFlatRowsAndSeries(tests) {
  const flatRows = flattenTests(tests);
  const trackableSeries = groupSeriesByBiomarker(flatRows, {
    maxPanels: MAX_TREND_PANELS,
    minPoints: 2,
  });
  return { flatRows, trackableSeries };
}

/**
 * Unique biomarker names seen across a user's saved tests, in the original
 * casing of their first occurrence, sorted alphabetically — the option list
 * for the trend dashboard's biomarker selector.
 */
export function listAvailableBiomarkers(tests) {
  const seen = new Map(); // normalized -> display name
  for (const row of flattenTests(tests)) {
    const key = normalizeName(row.biomarker);
    if (key && !seen.has(key)) seen.set(key, String(row.biomarker).trim());
  }
  return [...seen.values()].sort((a, b) => a.localeCompare(b));
}

function computeDeltaPct(current, previous) {
  if (previous === null || previous === undefined || previous === 0) return null;
  return ((current - previous) / Math.abs(previous)) * 100;
}

/**
 * Per-biomarker time series for the trend dashboard, filtered to exactly the
 * requested biomarkers (case-insensitive match), including every numeric
 * point (no minimum-points cutoff — the dashboard shows what it has, even a
 * single result) with parsed reference-range bounds and period-over-period
 * percentage delta.
 * @param {Array} tests
 * @param {string[]} biomarkerNames
 * @returns {Record<string, Array<{date: Date, value: number, range: {min:number|null,max:number|null}|null, rawRange: string, status: string, testLabel: string, deltaPct: number|null}>>}
 */
export function buildBiomarkerSeries(tests, biomarkerNames) {
  const wanted = new Set(biomarkerNames.map(normalizeName));
  const flatRows = flattenTests(tests).filter((r) => wanted.has(normalizeName(r.biomarker)));

  const byName = new Map(); // normalized -> { title, points }
  for (const row of flatRows) {
    const numericValue = parseFloat(String(row.result ?? '').replace(',', '.'));
    if (Number.isNaN(numericValue)) continue;

    const key = normalizeName(row.biomarker);
    if (!byName.has(key)) byName.set(key, { title: String(row.biomarker).trim(), points: [] });
    byName.get(key).points.push({
      date: row.date,
      value: numericValue,
      range: parseReferenceRange(row.range),
      rawRange: row.range,
      status: row.status,
      testLabel: row.testLabel,
    });
  }

  const result = {};
  for (const { title, points } of byName.values()) {
    const sorted = points.slice().sort((a, b) => a.date - b.date);
    sorted.forEach((point, i) => {
      point.deltaPct = i === 0 ? null : computeDeltaPct(point.value, sorted[i - 1].value);
    });
    result[title] = sorted;
  }
  return result;
}

/**
 * Classifies a single biomarker's trend from its point series for the
 * summary KPI cards.
 *   - 'improving': latest result is in range, previous wasn't (normalized).
 *   - 'attention': latest result is out of range (regardless of direction
 *     of change — still needs a look, even if trending the right way).
 *   - 'stable': in range on both the latest and previous test (or the only
 *     test on record is in range).
 *   - 'insufficient': latest status couldn't be determined at all.
 * @param {Array<{status: string}>} points
 */
export function classifyBiomarkerTrend(points) {
  if (!points?.length) return 'insufficient';
  const latest = points[points.length - 1];
  const previous = points.length >= 2 ? points[points.length - 2] : null;

  if (latest.status === 'unknown') return 'insufficient';
  if (latest.status === 'normal') {
    if (previous && previous.status !== 'normal' && previous.status !== 'unknown')
      return 'improving';
    return 'stable';
  }
  return 'attention'; // low / high / abnormal on the latest test
}

/**
 * Buckets a { biomarkerName: points[] } map into the three summary-card
 * groups. Biomarkers that classify as 'insufficient' are omitted — there's
 * nothing meaningful to report for a status that couldn't be determined.
 */
export function summarizeTrendStatuses(seriesMap) {
  const buckets = { improving: [], attention: [], stable: [] };
  for (const [name, points] of Object.entries(seriesMap)) {
    const status = classifyBiomarkerTrend(points);
    if (status in buckets) buckets[status].push(name);
  }
  return buckets;
}

/**
 * Single source of truth for "is this lab result out of range" logic.
 *
 * Previously this existed twice, independently, and already disagreed:
 *   - components/FileUploaderWidget.js  -> isOutOfRange()   (table highlighting)
 *   - firebase/tests.js                 -> isRowOutOfRange() (my-tests badge count)
 * Both are now thin wrappers around this module so there's one place that
 * knows how to parse a reference-range string.
 */

/** @typedef {'low'|'high'|'abnormal'|'normal'|'unknown'} AnomalyStatus */

/**
 * Parses a numeric lab result. Handles comma decimal separators (common in
 * EU/UA lab reports, e.g. "5,4") and strips surrounding whitespace.
 * @param {string|number} result
 * @returns {number|null}
 */
function parseResultValue(result) {
    if (result === null || result === undefined || result === '') return null;
    const value = parseFloat(String(result).trim().replace(',', '.'));
    return Number.isNaN(value) ? null : value;
}

// Matches worded boundary phrases: "up to 15", "under 50", "less than 5",
// "at least 3", "over 10", "greater than 100", "minimum 2", "maximum 20".
// Group 1 = direction (upper vs lower bound), group 2 = the number.
const WORDED_UPPER_BOUND = /\b(up to|under|less than|below|maximum|max)\b\s*([\d.,]+)/i;
const WORDED_LOWER_BOUND = /\b(at least|over|greater than|above|more than|minimum|min)\b\s*([\d.,]+)/i;

// Matches symbolic operator boundaries: "< 5", ">= 3.5", "≤10", "≥ 2".
const OPERATOR_BOUND = /^\s*(<=|>=|≤|≥|<|>)\s*([\d.,]+)/;

/**
 * Parses a reference-range string into a { min, max } bound, where either
 * side may be null (open-ended). Returns null if the range can't be parsed
 * at all — callers should treat that as "unknown", never as "out of range".
 *
 * Handles:
 *   - hyphenated ranges: "10.5 - 20.0", "3,5-5,0"
 *   - operators: "< 5", "> 50", "<= 3.5", ">= 2", "≤10", "≥2"
 *   - worded boundaries: "up to 15", "under 50", "at least 3", "over 10"
 *
 * @param {string} range
 * @returns {{min: number|null, max: number|null} | null}
 */
export function parseReferenceRange(range) {
    if (!range) return null;
    const str = String(range).trim();
    if (!str) return null;

    const upperWord = str.match(WORDED_UPPER_BOUND);
    if (upperWord) {
        const max = parseFloat(upperWord[2].replace(',', '.'));
        if (!Number.isNaN(max)) return { min: null, max };
    }

    const lowerWord = str.match(WORDED_LOWER_BOUND);
    if (lowerWord) {
        const min = parseFloat(lowerWord[2].replace(',', '.'));
        if (!Number.isNaN(min)) return { min, max: null };
    }

    const operatorMatch = str.match(OPERATOR_BOUND);
    if (operatorMatch) {
        const [, op, numStr] = operatorMatch;
        const bound = parseFloat(numStr.replace(',', '.'));
        if (Number.isNaN(bound)) return null;
        // "< 5" / "<= 5" means the healthy zone is everything up to 5 (max bound).
        // "> 5" / ">= 5" means the healthy zone is everything from 5 up (min bound).
        if (op === '<' || op === '<=' || op === '≤') return { min: null, max: bound };
        if (op === '>' || op === '>=' || op === '≥') return { min: bound, max: null };
    }

    // Hyphenated range immediately after a colon, at the end of its line —
    // handles real-world reports that prefix the range with a descriptor,
    // e.g. "Дорослі: 5.83 - 34.5" (Adults: ...), or per-sex/age variants
    // stacked on separate lines ("Чоловіки (20-60 років): 0.3-2.0\nЖінки
    // (17-60 років): 0.3-1.5" — Male (20-60y): .../Female (17-60y): ...).
    // Anchoring to end-of-line (the 'm' flag) is what keeps this from
    // grabbing the age bracket ("20-60") instead of the actual range: that
    // number pair sits *before* the colon, not immediately after it.
    //
    // When several age/demographic-qualified sub-ranges are stacked (common
    // in reports that also cover pediatric values), an "Adults" line is
    // preferred outright when present — this app's users are overwhelmingly
    // adults, and blindly taking whichever line appears first previously
    // meant a normal adult WBC count of 6.39 got compared against a
    // "under 1 year old" bracket and confidently reported as "Low" instead
    // of Normal. That's worse than 'unknown': a wrong medical-adjacent claim
    // instead of an honest "couldn't check this."
    const adultLineMatch = str.match(/(?:дорослі|дорослих|adults?)[^\n]*?:\s*(-?[\d.,]+)\s*-\s*(-?[\d.,]+)\s*$/im);
    const colonRangeMatch = adultLineMatch || str.match(/:\s*(-?[\d.,]+)\s*-\s*(-?[\d.,]+)\s*$/m);
    if (colonRangeMatch) {
        const min = parseFloat(colonRangeMatch[1].replace(',', '.'));
        const max = parseFloat(colonRangeMatch[2].replace(',', '.'));
        if (!Number.isNaN(min) && !Number.isNaN(max)) return { min, max };
    }

    // Bare hyphenated min-max range with no other text, e.g. "10.5 - 20.0".
    // Guard against a leading negative number ("-2 - 5") being misread as
    // three hyphen-split parts.
    const hyphenParts = str.split(/(?<!^)-/).map((p) => p.trim()).filter(Boolean);
    if (hyphenParts.length === 2) {
        const min = parseFloat(hyphenParts[0].replace(',', '.'));
        const max = parseFloat(hyphenParts[1].replace(',', '.'));
        if (!Number.isNaN(min) && !Number.isNaN(max)) return { min, max };
    }

    return null;
}

// Qualitative (non-numeric) lab results: many panels — urinalysis, infectious
// disease screens, pregnancy tests — report "Negative"/"Positive" rather than
// a number, with the reference range itself just being the word "Negative".
// Only activates when the RANGE looks qualitative, so a genuinely numeric
// range never gets hijacked by an accidental word match.
const QUALITATIVE_NORMAL = [
    'negative', 'not detected', 'non-reactive', 'nonreactive', 'absent', 'none seen', 'none detected',
    'негативний', 'негативно', 'не виявлено', 'не виявлені', 'не виявлено', 'відсутній', 'відсутні',
];
const QUALITATIVE_ABNORMAL = [
    'positive', 'detected', 'reactive', 'present',
    'позитивний', 'позитивно', 'виявлено', 'виявлені', 'присутній', 'присутні',
];

const normalizeQualitative = (s) => String(s ?? '').trim().toLowerCase();
const matchesAny = (str, tokens) => tokens.some((t) => str === t || str.includes(t));

/**
 * @param {string|number} result
 * @param {string} range
 * @returns {AnomalyStatus|null} 'normal' | 'abnormal', or null if this isn't
 *   a qualitative comparison (range doesn't look qualitative) — callers
 *   should fall through to numeric parsing in that case.
 */
function getQualitativeStatus(result, range) {
    const rangeNorm = normalizeQualitative(range);
    const rangeIsQualitative = matchesAny(rangeNorm, QUALITATIVE_NORMAL) || matchesAny(rangeNorm, QUALITATIVE_ABNORMAL);
    if (!rangeIsQualitative) return null;

    const resultNorm = normalizeQualitative(result);
    if (matchesAny(resultNorm, QUALITATIVE_NORMAL)) return 'normal';
    if (matchesAny(resultNorm, QUALITATIVE_ABNORMAL)) return 'abnormal';
    return null; // range was qualitative but result didn't match a known token
}

/**
 * Compares a parsed result against a reference-range string. Also known as
 * evaluateBiomarker (exported below as an alias) — same function.
 *
 * @param {string|number} result
 * @param {string} range
 * @returns {AnomalyStatus} 'low' | 'high' | 'abnormal' | 'normal' | 'unknown'
 *   'abnormal' is for qualitative mismatches (e.g. result "Positive" against
 *   a "Negative" reference range) — kept distinct from 'high'/'low' since
 *   neither direction makes sense for a non-numeric result.
 *   'unknown' means the result or range couldn't be parsed at all — this is
 *   deliberately distinct from 'normal' so callers never claim a value is
 *   healthy when it simply couldn't be checked (important for a medical
 *   utility tool — see the YMYL disclaimer on the /convert pages).
 */
export function getAnomalyStatus(result, range) {
    const qualitative = getQualitativeStatus(result, range);
    if (qualitative) return qualitative;

    const value = parseResultValue(result);
    if (value === null) return 'unknown';

    const bounds = parseReferenceRange(range);
    if (!bounds) return 'unknown';

    if (bounds.min !== null && value < bounds.min) return 'low';
    if (bounds.max !== null && value > bounds.max) return 'high';
    return 'normal';
}

/** Alias matching the `evaluateBiomarker(result, referenceRange)` naming. */
export const evaluateBiomarker = getAnomalyStatus;

/** @returns {boolean} true if status is 'low', 'high', or 'abnormal' */
export function isOutOfRangeStatus(status) {
    return status === 'low' || status === 'high' || status === 'abnormal';
}

/**
 * Convenience wrapper matching the call shape both prior implementations
 * used: a plain boolean for "is this out of range".
 * @param {string|number} result
 * @param {string} range
 * @returns {boolean}
 */
export function isOutOfRange(result, range) {
    return isOutOfRangeStatus(getAnomalyStatus(result, range));
}

// 'показник' ("parameter/indicator") deliberately excluded: it's the
// standard Ukrainian header for the *test name* column, not the result
// value — including it caused findResultColumnIndex to match the wrong
// column and made every row register as 'unknown' (found via a real report
// that used exactly this header, alongside a legitimate 'Результат' column).
const RESULT_KEYWORDS = ['result', 'value', 'результат', 'значення'];
const RANGE_KEYWORDS = ['range', 'interval', 'норма', 'референт', 'reference', 'normal'];

const matchesKeywords = (header, keywords) => {
    const lower = String(header).toLowerCase();
    return keywords.some((kw) => lower.includes(kw));
};

/** Finds the "Result" column index by header name, across en/uk headers. */
export function findResultColumnIndex(headers) {
    return headers.findIndex((h) => matchesKeywords(h, RESULT_KEYWORDS));
}

/** Finds the "Reference Range" column index by header name, across en/uk headers. */
export function findRangeColumnIndex(headers) {
    return headers.findIndex((h) => matchesKeywords(h, RANGE_KEYWORDS));
}

/**
 * Counts out-of-range rows in a parsed table. Returns null if the table
 * doesn't have identifiable result/range columns (nothing to count).
 * @param {string[]} headers
 * @param {Array<Array<string|number>>} rows
 * @returns {number|null}
 */
export function countOutOfRange(headers, rows) {
    const resultIdx = findResultColumnIndex(headers);
    const rangeIdx = findRangeColumnIndex(headers);
    if (resultIdx === -1 || rangeIdx === -1) return null;

    return rows.reduce(
        (count, row) => count + (isOutOfRange(row[resultIdx], row[rangeIdx]) ? 1 : 0),
        0
    );
}

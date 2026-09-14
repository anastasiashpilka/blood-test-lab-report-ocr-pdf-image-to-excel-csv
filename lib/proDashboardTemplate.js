/**
 * The Data-sheet column contract for public/template.xlsx.
 *
 * MUST stay in sync with BIOMARKER_COLUMNS in
 * scripts/generate_dashboard_template.py — same columns, same order, same
 * start row. If you regenerate the template with different biomarkers,
 * update this list to match (and vice versa).
 */
export const DATA_SHEET_NAME = 'Data';
export const DATA_START_ROW = 2; // row 1 is headers
export const DATE_COLUMN = 'A';

export const TEMPLATE_BIOMARKER_COLUMNS = [
    { column: 'B', label: 'Glucose (mg/dL)', aliases: ['glucose', 'fasting glucose', 'fbs', 'blood glucose', 'глюкоза'] },
    { column: 'C', label: 'Total Cholesterol (mg/dL)', aliases: ['total cholesterol', 'cholesterol, total', 'загальний холестерин'] },
    { column: 'D', label: 'LDL Cholesterol (mg/dL)', aliases: ['ldl', 'ldl cholesterol', 'ldl-c', 'холестерин лпнщ'] },
    { column: 'E', label: 'HDL Cholesterol (mg/dL)', aliases: ['hdl', 'hdl cholesterol', 'hdl-c', 'холестерин лпвщ'] },
    { column: 'F', label: 'Triglycerides (mg/dL)', aliases: ['triglycerides', 'trig', 'тригліцериди'] },
    { column: 'G', label: 'Hemoglobin A1c (%)', aliases: ['hemoglobin a1c', 'hba1c', 'a1c', 'glycated hemoglobin'] },
    { column: 'H', label: 'TSH (uIU/mL)', aliases: ['tsh', 'thyroid stimulating hormone', 'ттг'] },
    { column: 'I', label: 'Creatinine (mg/dL)', aliases: ['creatinine', 'креатинін'] },
    { column: 'J', label: 'Hemoglobin (g/dL)', aliases: ['hemoglobin', 'hgb', 'hb', 'гемоглобін'] },
    { column: 'K', label: 'WBC (x10^3/uL)', aliases: ['wbc', 'white blood cell', 'white blood cells', 'leukocytes', 'лейкоцити'] },
];

const normalize = (s) => String(s || '').trim().toLowerCase();

/**
 * Finds which template column a parsed biomarker name maps to, if any.
 * @param {string} biomarkerName
 * @returns {{column: string, label: string} | null}
 */
export function matchTemplateColumn(biomarkerName) {
    const norm = normalize(biomarkerName);
    if (!norm) return null;
    return (
        TEMPLATE_BIOMARKER_COLUMNS.find(({ aliases }) => aliases.some((a) => norm.includes(a))) || null
    );
}

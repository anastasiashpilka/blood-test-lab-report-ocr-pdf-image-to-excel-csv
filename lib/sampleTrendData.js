/**
 * Demo data for the "Load sample data" toggle on /my-tests/trends — lets a
 * user preview the trend dashboard instantly without needing real saved
 * tests. Same shape getTests() returns: {id, label, createdAt, headers, rows}.
 * Four dates spanning ~17 months, deliberately covering all three summary
 * buckets: Ferritin/Vitamin D normalize (improving), TSH/LDL drift out of
 * range (attention), Glucose/Hemoglobin stay put (stable).
 */

const HEADERS = ['Biomarker', 'Result', 'Reference Range'];

const sampleTrendData = [
  {
    id: 'sample-1',
    label: 'Annual Checkup — Mar 2024',
    createdAt: new Date('2024-03-04'),
    headers: HEADERS,
    rows: [
      ['Ferritin', '15', '20 - 250'],
      ['Vitamin D (25-OH)', '18', '30 - 100'],
      ['Glucose', '88', '70 - 100'],
      ['TSH', '2.1', '0.4 - 4.0'],
      ['Hemoglobin (HGB)', '13.5', '13.0 - 17.5'],
      ['LDL Cholesterol', '110', '0 - 130'],
    ],
  },
  {
    id: 'sample-2',
    label: 'Follow-up — Sep 2024',
    createdAt: new Date('2024-09-16'),
    headers: HEADERS,
    rows: [
      ['Ferritin', '28', '20 - 250'],
      ['Vitamin D (25-OH)', '25', '30 - 100'],
      ['Glucose', '91', '70 - 100'],
      ['TSH', '3.8', '0.4 - 4.0'],
      ['Hemoglobin (HGB)', '13.8', '13.0 - 17.5'],
      ['LDL Cholesterol', '125', '0 - 130'],
    ],
  },
  {
    id: 'sample-3',
    label: 'Annual Checkup — Mar 2025',
    createdAt: new Date('2025-03-10'),
    headers: HEADERS,
    rows: [
      ['Ferritin', '55', '20 - 250'],
      ['Vitamin D (25-OH)', '34', '30 - 100'],
      ['Glucose', '89', '70 - 100'],
      ['TSH', '5.2', '0.4 - 4.0'],
      ['Hemoglobin (HGB)', '13.6', '13.0 - 17.5'],
      ['LDL Cholesterol', '138', '0 - 130'],
    ],
  },
  {
    id: 'sample-4',
    label: 'Follow-up — Aug 2025',
    createdAt: new Date('2025-08-05'),
    headers: HEADERS,
    rows: [
      ['Ferritin', '62', '20 - 250'],
      ['Vitamin D (25-OH)', '40', '30 - 100'],
      ['Glucose', '92', '70 - 100'],
      ['TSH', '6.1', '0.4 - 4.0'],
      ['Hemoglobin (HGB)', '13.9', '13.0 - 17.5'],
      ['LDL Cholesterol', '145', '0 - 130'],
    ],
  },
];

export default sampleTrendData;

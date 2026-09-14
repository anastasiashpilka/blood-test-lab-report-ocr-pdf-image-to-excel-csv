/**
 * Quick-filter panel labels + the biomarkers-data.js categories each maps to.
 * Deliberately split from lib/biomarkerPresets.js, which pulls in the full
 * ~750KB biomarkers-data.js dataset to do the actual matching — this file
 * stays tiny so components can render the preset buttons without paying for
 * that import until a preset is actually clicked (see BiomarkerSelector.js).
 */
export const PRESETS = [
  {
    key: 'cbc',
    label: 'Complete Blood Count Panel',
    categories: ['Complete Blood Count (CBC)', 'White Blood Cell Differential'],
  },
  { key: 'lipid', label: 'Lipid Panel', categories: ['Lipid Panel'] },
  { key: 'thyroid', label: 'Thyroid Profile', categories: ['Thyroid Hormone'] },
  {
    key: 'metabolic',
    label: 'Metabolic Health',
    categories: ['Diabetes Marker', 'Metabolic Marker', 'Blood Chemistry'],
  },
];

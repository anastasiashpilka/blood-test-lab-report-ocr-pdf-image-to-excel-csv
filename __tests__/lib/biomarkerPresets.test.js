import { PRESETS, getPresetBiomarkers } from '../../lib/biomarkerPresets';

describe('PRESETS', () => {
  test('exposes the four quick-filter panels', () => {
    expect(PRESETS.map((p) => p.key).sort()).toEqual(['cbc', 'lipid', 'metabolic', 'thyroid']);
  });
});

describe('getPresetBiomarkers', () => {
  test('matches available biomarkers whose reference-data category belongs to the preset', () => {
    // Bare 3-letter codes like "TSH" fall under findBiomarkerId's short-string
    // guard (avoids false positives) — use the fuller name a report would show.
    const available = ['Glucose', 'Thyroid Stimulating Hormone', 'Ferritin'];
    expect(getPresetBiomarkers('metabolic', available)).toEqual(['Glucose']);
    expect(getPresetBiomarkers('thyroid', available)).toEqual(['Thyroid Stimulating Hormone']);
  });

  test('a biomarker outside every preset category matches nothing', () => {
    expect(getPresetBiomarkers('lipid', ['Ferritin'])).toEqual([]);
  });

  test('unknown preset key returns an empty list', () => {
    expect(getPresetBiomarkers('not-a-real-preset', ['Glucose'])).toEqual([]);
  });

  test('caps results at maxCount (default 5)', () => {
    // Every one of these has type 'Complete Blood Count (CBC)' or its differential.
    const manyCbc = [
      'Hemoglobin (HGB)',
      'Hematocrit (HCT)',
      'Red Blood Cells (RBC)',
      'White Blood Cells (WBC)',
      'Platelets (PLT)',
      'Mean Corpuscular Volume (MCV)',
    ];
    expect(getPresetBiomarkers('cbc', manyCbc).length).toBeLessThanOrEqual(5);
  });
});

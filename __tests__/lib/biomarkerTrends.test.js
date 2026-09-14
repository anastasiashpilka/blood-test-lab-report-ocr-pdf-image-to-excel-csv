import {
  flattenTests,
  groupSeriesByBiomarker,
  buildFlatRowsAndSeries,
  listAvailableBiomarkers,
  buildBiomarkerSeries,
  classifyBiomarkerTrend,
  summarizeTrendStatuses,
} from '../../lib/biomarkerTrends';

const test1 = {
  id: 't1',
  label: 'Jan panel',
  createdAt: new Date('2025-01-10'),
  headers: ['Biomarker', 'Result', 'Reference Range'],
  rows: [
    ['Ferritin', '15', '20 - 250'], // low
    ['Glucose', '90', '70 - 100'], // normal
  ],
};

const test2 = {
  id: 't2',
  label: 'Jun panel',
  createdAt: new Date('2025-06-10'),
  headers: ['Biomarker', 'Result', 'Reference Range'],
  rows: [
    ['Ferritin', '60', '20 - 250'], // normal now (was low)
    ['Glucose', '95', '70 - 100'], // still normal
    ['TSH', '8.0', '0.4 - 4.0'], // new biomarker, high
  ],
};

describe('flattenTests', () => {
  test('flattens rows across tests into date-tagged entries with computed status', () => {
    const flat = flattenTests([test1, test2]);
    expect(flat).toHaveLength(5);
    const ferritinJan = flat.find((r) => r.biomarker === 'Ferritin' && r.testLabel === 'Jan panel');
    expect(ferritinJan.status).toBe('low');
    expect(ferritinJan.result).toBe('15');
  });
});

describe('listAvailableBiomarkers', () => {
  test('returns unique biomarker names sorted alphabetically, case-insensitive dedupe', () => {
    const names = listAvailableBiomarkers([test1, test2]);
    expect(names).toEqual(['Ferritin', 'Glucose', 'TSH']);
  });
});

describe('buildBiomarkerSeries', () => {
  test('builds sorted, filtered per-biomarker series with parsed range, status and delta', () => {
    const series = buildBiomarkerSeries([test2, test1], ['Ferritin']); // out-of-order input on purpose
    expect(Object.keys(series)).toEqual(['Ferritin']);
    const points = series['Ferritin'];
    expect(points).toHaveLength(2);
    expect(points[0].date).toEqual(new Date('2025-01-10'));
    expect(points[0].value).toBe(15);
    expect(points[0].range).toEqual({ min: 20, max: 250 });
    expect(points[0].status).toBe('low');
    expect(points[0].deltaPct).toBeNull();

    expect(points[1].value).toBe(60);
    expect(points[1].status).toBe('normal');
    expect(points[1].deltaPct).toBeCloseTo(300); // (60-15)/15 * 100
  });

  test('only includes requested biomarkers', () => {
    const series = buildBiomarkerSeries([test1, test2], ['Glucose']);
    expect(Object.keys(series)).toEqual(['Glucose']);
  });

  test('skips rows whose result is not numeric', () => {
    const withQualitative = {
      ...test1,
      rows: [...test1.rows, ['Pregnancy Test', 'Negative', 'Negative']],
    };
    const series = buildBiomarkerSeries([withQualitative], ['Pregnancy Test']);
    expect(series['Pregnancy Test']).toBeUndefined();
  });
});

describe('classifyBiomarkerTrend', () => {
  test('normalized: latest normal, previous was abnormal -> improving', () => {
    const points = [{ status: 'low' }, { status: 'normal' }];
    expect(classifyBiomarkerTrend(points)).toBe('improving');
  });

  test('still abnormal on latest test -> attention, regardless of direction', () => {
    const points = [{ status: 'low' }, { status: 'high' }];
    expect(classifyBiomarkerTrend(points)).toBe('attention');
  });

  test('normal both times -> stable', () => {
    const points = [{ status: 'normal' }, { status: 'normal' }];
    expect(classifyBiomarkerTrend(points)).toBe('stable');
  });

  test('single normal point -> stable', () => {
    expect(classifyBiomarkerTrend([{ status: 'normal' }])).toBe('stable');
  });

  test('single abnormal point -> attention', () => {
    expect(classifyBiomarkerTrend([{ status: 'high' }])).toBe('attention');
  });

  test('unknown status -> insufficient', () => {
    expect(classifyBiomarkerTrend([{ status: 'unknown' }])).toBe('insufficient');
  });
});

describe('summarizeTrendStatuses', () => {
  test('buckets each biomarker into improving/attention/stable, dropping insufficient', () => {
    const seriesMap = {
      Ferritin: [{ status: 'low' }, { status: 'normal' }],
      TSH: [{ status: 'normal' }, { status: 'high' }],
      Glucose: [{ status: 'normal' }, { status: 'normal' }],
      Mystery: [{ status: 'unknown' }],
    };
    expect(summarizeTrendStatuses(seriesMap)).toEqual({
      improving: ['Ferritin'],
      attention: ['TSH'],
      stable: ['Glucose'],
    });
  });
});

describe('groupSeriesByBiomarker + buildFlatRowsAndSeries (export compatibility)', () => {
  test('caps to top MAX_TREND_PANELS biomarkers with >=2 points, sorted by point count desc', () => {
    const flat = flattenTests([test1, test2]);
    const grouped = groupSeriesByBiomarker(flat, { maxPanels: 6, minPoints: 2 });
    expect(grouped.map((s) => s.title)).toEqual(['Ferritin', 'Glucose']); // TSH excluded: only 1 point
  });

  test('buildFlatRowsAndSeries returns both flatRows and trackableSeries', () => {
    const { flatRows, trackableSeries } = buildFlatRowsAndSeries([test1, test2]);
    expect(flatRows).toHaveLength(5);
    expect(trackableSeries.map((s) => s.title).sort()).toEqual(['Ferritin', 'Glucose']);
  });
});

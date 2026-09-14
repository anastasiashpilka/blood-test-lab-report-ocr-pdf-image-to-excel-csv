import { useMemo, useState } from 'react';
import { Printer } from 'lucide-react';
import BiomarkerSelector from './BiomarkerSelector';
import SummaryCards from './SummaryCards';
import TrendChart from './TrendChart';
import {
  listAvailableBiomarkers,
  buildBiomarkerSeries,
  groupSeriesByBiomarker,
  flattenTests,
} from '../lib/biomarkerTrends';

const DEFAULT_SELECTION_COUNT = 3;

function defaultSelection(tests) {
  const trackable = groupSeriesByBiomarker(flattenTests(tests), {
    maxPanels: DEFAULT_SELECTION_COUNT,
    minPoints: 2,
  });
  if (trackable.length) return trackable.map((s) => s.title);
  return listAvailableBiomarkers(tests).slice(0, DEFAULT_SELECTION_COUNT);
}

/**
 * Top-level orchestrator for the trend dashboard: owns which biomarkers are
 * selected, derives their series from the raw test history, and composes
 * the selector, KPI cards, and per-biomarker charts.
 * @param {{tests: Array}} props tests in the getTests() shape: {id, label, createdAt, headers, rows}
 */
export default function BiomarkerTrendDashboard({ tests }) {
  const availableBiomarkers = useMemo(() => listAvailableBiomarkers(tests), [tests]);
  const [selected, setSelected] = useState(() => defaultSelection(tests));

  const seriesMap = useMemo(() => buildBiomarkerSeries(tests, selected), [tests, selected]);

  if (!tests?.length) {
    return (
      <p className="text-sm text-gray-500">
        No saved tests yet — upload a lab report to start tracking trends.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 print:hidden">
        <div className="flex-1">
          <BiomarkerSelector
            availableBiomarkers={availableBiomarkers}
            selected={selected}
            onChange={setSelected}
          />
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shrink-0"
        >
          <Printer className="w-4 h-4" aria-hidden="true" />
          Print Report / Save as PDF
        </button>
      </div>

      {selected.length === 0 ? (
        <p className="text-sm text-gray-500">
          Select up to 5 biomarkers above to see their trends.
        </p>
      ) : (
        <>
          <SummaryCards seriesMap={seriesMap} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selected.map((name) => (
              <TrendChart key={name} title={name} points={seriesMap[name] || []} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import { TrendingUp, AlertTriangle, Minus } from 'lucide-react';
import { summarizeTrendStatuses } from '../lib/biomarkerTrends';

const CARD_CONFIG = [
  {
    key: 'improving',
    testId: 'count-improving',
    title: 'Improving / Normalized',
    Icon: TrendingUp,
    accent: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    key: 'attention',
    testId: 'count-attention',
    title: 'Requires Attention',
    Icon: AlertTriangle,
    accent: 'text-red-600 bg-red-50 border-red-100',
  },
  {
    key: 'stable',
    testId: 'count-stable',
    title: 'Stable',
    Icon: Minus,
    accent: 'text-gray-600 bg-gray-50 border-gray-100',
  },
];

/**
 * Three executive-summary KPI cards above the trend charts, bucketing every
 * selected biomarker by classifyBiomarkerTrend (via summarizeTrendStatuses).
 * @param {{seriesMap: Record<string, Array<{status: string}>>}} props
 */
export default function SummaryCards({ seriesMap }) {
  const buckets = summarizeTrendStatuses(seriesMap);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {CARD_CONFIG.map(({ key, testId, title, Icon, accent }) => {
        const names = buckets[key];
        return (
          <div key={key} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">{title}</span>
              <span
                className={`inline-flex items-center justify-center w-7 h-7 rounded-full border ${accent}`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </span>
            </div>
            <div data-testid={testId} className="mt-2 text-2xl font-semibold text-gray-900">
              {names.length}
            </div>
            {names.length ? (
              <ul className="mt-1 flex flex-wrap gap-1">
                {names.map((name) => (
                  <li
                    key={name}
                    className="text-sm text-gray-600 after:content-[','] last:after:content-none"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 text-sm text-gray-600">None</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

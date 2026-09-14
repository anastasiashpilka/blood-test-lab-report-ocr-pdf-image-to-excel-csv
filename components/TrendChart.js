import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  Dot,
} from 'recharts';

const STATUS_DOT_COLOR = {
  low: '#d97706', // amber-600
  high: '#dc2626', // red-600
  abnormal: '#dc2626',
  normal: '#059669', // emerald-600
  unknown: '#9ca3af', // gray-400
};

function formatDate(date) {
  return new Date(date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
}

/** Colors each point's dot by its in-range/out-of-range status, not just the line color. */
function StatusDot(props) {
  const { cx, cy, payload } = props;
  if (cx == null || cy == null) return null;
  return (
    <Dot
      cx={cx}
      cy={cy}
      r={4}
      fill={STATUS_DOT_COLOR[payload.status] || STATUS_DOT_COLOR.unknown}
      stroke="#fff"
      strokeWidth={1.5}
    />
  );
}

/**
 * Recharts tooltip content: exact date, value + unit, reference range, and
 * the percentage delta versus the previous test (omitted for the first
 * point on record, since there's nothing to compare it to).
 */
export function TrendTooltip({ active, payload, unit }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  const hasDelta = typeof point.deltaPct === 'number';
  const deltaUp = hasDelta && point.deltaPct >= 0;

  return (
    <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-lg text-sm">
      <div className="font-medium text-gray-900">
        {formatDate(point.date)} — {point.testLabel}
      </div>
      <div className="mt-1 text-gray-700">
        {point.value}
        {unit ? ` ${unit}` : ''}
        {point.rawRange && <span className="text-gray-400"> (ref: {point.rawRange})</span>}
      </div>
      {hasDelta && (
        <div className={deltaUp ? 'text-red-600' : 'text-emerald-600'}>
          {deltaUp ? '▲' : '▼'} {deltaUp ? '+' : ''}
          {Math.round(point.deltaPct)}% since last test
        </div>
      )}
    </div>
  );
}

/**
 * One small-multiple area chart for a single biomarker: smooth trend line,
 * status-colored dots, and a shaded reference-range band drawn from the most
 * recent test's parsed range (labs occasionally restate the same range
 * slightly differently between visits — the latest is the most relevant one
 * to show as "normal" today).
 * @param {{title: string, unit?: string, points: Array}} props
 */
export default function TrendChart({ title, unit, points }) {
  const latestRange = points.length ? [...points].reverse().find((p) => p.range)?.range : null;
  const latestStatus = points.length ? points[points.length - 1].status : null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm break-inside-avoid">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-900">{title}</h3>
        {latestStatus && (
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: STATUS_DOT_COLOR[latestStatus] }}
            aria-hidden="true"
          />
        )}
      </div>

      {points.length === 0 ? (
        <p className="mt-6 text-sm text-gray-400">No data for this biomarker.</p>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={points} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              width={40}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              domain={['auto', 'auto']}
              unit={unit ? ` ${unit}` : ''}
            />
            {latestRange?.min != null && latestRange?.max != null && (
              <ReferenceArea
                y1={latestRange.min}
                y2={latestRange.max}
                fill="#10b981"
                fillOpacity={0.08}
                strokeOpacity={0}
              />
            )}
            <Tooltip content={<TrendTooltip unit={unit} />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4f46e5"
              strokeWidth={2}
              fill="#4f46e5"
              fillOpacity={0.06}
              dot={<StatusDot />}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

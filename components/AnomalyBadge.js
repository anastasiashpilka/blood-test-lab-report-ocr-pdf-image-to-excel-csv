import { ArrowUp, ArrowDown, Check, HelpCircle, AlertTriangle } from 'lucide-react';
import { getAnomalyStatus } from '../lib/anomalyDetection';

// Self-contained so this component doesn't need to hook into the full
// translations.js dictionary for a handful of short words.
const LABELS = {
    en: { low: 'Low', high: 'High', abnormal: 'Abnormal', normal: 'Normal', unknown: '—' },
    uk: { low: 'Знижено', high: 'Підвищено', abnormal: 'Відхилення', normal: 'Норма', unknown: '—' },
    es: { low: 'Bajo', high: 'Alto', abnormal: 'Anómalo', normal: 'Normal', unknown: '—' },
    de: { low: 'Niedrig', high: 'Hoch', abnormal: 'Auffällig', normal: 'Normal', unknown: '—' },
    fr: { low: 'Bas', high: 'Élevé', abnormal: 'Anormal', normal: 'Normal', unknown: '—' },
    ja: { low: '低い', high: '高い', abnormal: '異常', normal: '正常', unknown: '—' },
    zh: { low: '偏低', high: '偏高', abnormal: '异常', normal: '正常', unknown: '—' },
};

// Exported so table cells (FileUploaderWidget.js) can tint the whole cell
// background using the exact same status→color mapping as the badge, rather
// than re-deriving their own "which status means red" logic separately.
export const ANOMALY_STYLES = {
    low: { pill: 'bg-amber-100 text-amber-800 border-amber-200', cellBg: 'bg-amber-50', Icon: ArrowDown },
    high: { pill: 'bg-red-100 text-red-800 border-red-200', cellBg: 'bg-red-50', Icon: ArrowUp },
    abnormal: { pill: 'bg-red-100 text-red-800 border-red-200', cellBg: 'bg-red-50', Icon: AlertTriangle },
    normal: { pill: 'bg-green-100 text-green-800 border-green-200', cellBg: 'bg-green-50', Icon: Check },
    unknown: { pill: 'bg-gray-100 text-gray-500 border-gray-200', cellBg: 'bg-gray-50', Icon: HelpCircle },
};

/**
 * Small colored pill showing whether a lab result is low/high/abnormal/normal
 * relative to its reference range. Pass either `status` directly, or
 * `result`+`range` and it derives the status itself.
 */
const AnomalyBadge = ({ status, result, range, lang = 'en' }) => {
    const resolvedStatus = status || getAnomalyStatus(result, range);
    const { pill, Icon } = ANOMALY_STYLES[resolvedStatus] || ANOMALY_STYLES.unknown;
    const label = (LABELS[lang] || LABELS.en)[resolvedStatus];

    return (
        <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-semibold whitespace-nowrap ${pill}`}
        >
            <Icon className="w-3 h-3" aria-hidden="true" />
            {label}
        </span>
    );
};

export default AnomalyBadge;

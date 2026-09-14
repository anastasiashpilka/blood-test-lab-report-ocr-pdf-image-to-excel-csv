import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { Loader, ArrowLeft, Copy, Download, CheckCircle, Microscope, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getTest, updateTestInterpretation, findResultIdx, findRangeIdx } from '../../firebase/tests';
import { findBiomarkerId } from '../../lib/biomarkerLookup';
import { isOutOfRange as checkOutOfRange, parseReferenceRange } from '../../lib/anomalyDetection';
import translations from '../../translations';
import { useLanguage } from '../../contexts/LanguageContext';

// Thin wrapper over the shared range parser: this one needs a *finite*
// visual span even for open-ended ranges ("> 5" has no real upper bound,
// but the bar chart still needs something to draw), so it synthesizes one.
function parseRangeStr(rangeStr) {
  const bounds = parseReferenceRange(rangeStr);
  if (!bounds) return null;
  const { min, max } = bounds;
  if (min !== null && max !== null) return { normMin: min, normMax: max };
  if (max !== null) return { normMin: 0, normMax: max }; // "< 5" / "up to 5"
  if (min !== null) return { normMin: min, normMax: min * 2.5 }; // "> 5" / "at least 5"
  return null;
}

function RangeBarRow({ name, oldVal, newVal, rangeStr, isCurrentOOR, isOldOOR }) {
  const parsed = parseRangeStr(rangeStr);
  const oldNum = oldVal != null ? parseFloat(String(oldVal).replace(',', '.')) : null;
  const newNum = newVal != null ? parseFloat(String(newVal).replace(',', '.')) : null;
  const hasBar = parsed !== null && newNum !== null && !isNaN(newNum);

  let barContent = null;
  if (hasBar) {
    const { normMin, normMax } = parsed;
    const spread = normMax - normMin || normMax * 0.5 || 1;
    const padding = spread * 0.35;
    const vals = [newNum];
    if (oldNum !== null && !isNaN(oldNum)) vals.push(oldNum);
    const trackMin = Math.min(normMin - padding, ...vals);
    const trackMax = Math.max(normMax + padding, ...vals);
    const trackRange = trackMax - trackMin || 1;
    const toPct = (v) => Math.max(0, Math.min(100, ((v - trackMin) / trackRange) * 100));
    const normLeftPct = toPct(normMin);
    const normWidthPct = Math.max(0, toPct(normMax) - normLeftPct);
    const newPct = toPct(newNum);
    const oldPct = oldNum !== null && !isNaN(oldNum) ? toPct(oldNum) : null;

    barContent = (
      <div className="relative w-full h-8">
        <div className="absolute top-1/2 -translate-y-1/2 h-1.5 w-full bg-gray-100 rounded-full" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-emerald-100 rounded-full"
          style={{ left: `${normLeftPct}%`, width: `${normWidthPct}%` }}
        />
        {oldPct !== null && (
          <div
            className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-indigo-200"
            style={{
              left: `${Math.min(oldPct, newPct)}%`,
              width: `${Math.abs(newPct - oldPct)}%`,
            }}
          />
        )}
        {oldPct !== null && (
          <div
            className={`absolute top-1/2 w-3 h-3 rounded-full border-2 border-white shadow-sm ${
              isOldOOR ? 'bg-red-300' : 'bg-emerald-400'
            }`}
            style={{ left: `${oldPct}%`, transform: 'translate(-50%, -50%)' }}
          />
        )}
        <div
          className={`absolute top-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md ${
            isCurrentOOR ? 'bg-red-500' : 'bg-indigo-500'
          }`}
          style={{ left: `${newPct}%`, transform: 'translate(-50%, -50%)' }}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center py-3 px-4 border-b border-gray-100 last:border-0 ${
      isCurrentOOR ? 'bg-red-50/40' : ''
    }`}>
      <div className="w-[28%] pr-3 min-w-0">
        <span className="text-sm font-medium text-gray-800 block truncate">{name}</span>
        {rangeStr && (
          <span className="text-[10px] text-gray-400 leading-none">{rangeStr}</span>
        )}
      </div>
      {hasBar ? (
        <div className="flex-1 flex items-center gap-2 min-w-0">
          <span className={`text-xs w-10 text-right shrink-0 tabular-nums ${
            isOldOOR ? 'text-red-400' : 'text-gray-400'
          }`}>
            {oldVal ?? '—'}
          </span>
          <div className="flex-1 min-w-0">{barContent}</div>
          <span className={`text-xs font-semibold w-10 shrink-0 tabular-nums ${
            isCurrentOOR ? 'text-red-600' : 'text-indigo-600'
          }`}>
            {newVal ?? '—'}
          </span>
        </div>
      ) : (
        <div className="flex-1 flex items-center gap-2 text-sm">
          <span className={`tabular-nums ${isOldOOR ? 'text-red-400' : 'text-gray-400'}`}>
            {oldVal ?? '—'}
          </span>
          <span className="text-gray-300 text-xs">→</span>
          <span className={`font-medium tabular-nums ${isCurrentOOR ? 'text-red-600' : 'text-gray-800'}`}>
            {newVal ?? '—'}
          </span>
        </div>
      )}
    </div>
  );
}

export default function TestDetailPage() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { testId } = router.query;
  const { lang: currentLang } = useLanguage();
  const t = (translations[currentLang] || translations['en']).myTestsPage;

  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [interpretation, setInterpretation] = useState(null);
  const [interpretationLoading, setInterpretationLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [compareTest, setCompareTest] = useState(null);
  const [showRawTable, setShowRawTable] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      router.replace(`/auth/login?from=/my-tests/${testId}`);
      return;
    }
    if (!testId) return;

    // Guards against a response for a test the user has since navigated
    // away from resolving late and applying its state (or, worse, its
    // Firestore interpretation write) to the wrong test id.
    let ignore = false;

    getTest(currentUser.uid, testId)
      .then((data) => {
        if (ignore) return;
        if (!data) { setNotFound(true); return; }
        setTest(data);
        if (data.interpretationSummary) {
          try {
            setInterpretation(JSON.parse(data.interpretationSummary));
          } catch {
            setInterpretation({ summary: data.interpretationSummary, flaggedValues: [] });
          }
        } else {
          setInterpretationLoading(true);
          fetch('/api/interpret-results', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ headers: data.headers, rows: data.rows }),
          })
            .then((r) => r.json())
            .then((parsed) => {
              if (ignore || !parsed.summary) return;
              setInterpretation(parsed);
              updateTestInterpretation(currentUser.uid, testId, JSON.stringify(parsed)).catch(() => {});
            })
            .catch(() => {})
            .finally(() => {
              if (!ignore) setInterpretationLoading(false);
            });
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [currentUser, testId]);

  useEffect(() => {
    const compareId = router.query.compare;
    if (!compareId || !currentUser) {
      setCompareTest(null);
      setShowRawTable(true);
      return;
    }
    getTest(currentUser.uid, compareId)
      .then((data) => {
        setCompareTest(data);
        setShowRawTable(false);
      })
      .catch(() => setCompareTest(null));
  }, [router.query.compare, currentUser]);

  const isOutOfRange = checkOutOfRange;

  const formatDate = (ts) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    return date.toLocaleDateString(currentLang, { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const tableToHTML = useCallback(() => {
    if (!test?.headers?.length) return '';
    let html = '<table style="border-collapse:collapse;width:100%"><thead style="background-color:#4f46e5;color:white"><tr>';
    test.headers.forEach((h) => {
      html += `<th style="border:1px solid #e5e7eb;padding:8px;text-align:left;font-size:14px">${h}</th>`;
    });
    html += '</tr></thead><tbody>';
    test.rows.forEach((row) => {
      html += '<tr style="border-bottom:1px solid #e5e7eb">';
      row.forEach((cell) => {
        html += `<td style="border:1px solid #e5e7eb;padding:8px;font-size:14px;color:#4b5563">${cell}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    return html;
  }, [test]);

  const handleCopy = useCallback(async () => {
    try {
      const blob = new Blob([tableToHTML()], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [tableToHTML]);

  const handleDownload = useCallback(() => {
    if (!test?.headers?.length) return;
    const headers = test.headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(',');
    const rows = test.rows.map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ).join('\n');
    const blob = new Blob(['﻿' + headers + '\n' + rows], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${test.label || 'blood_test'}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  }, [test]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-indigo-600" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-500 text-lg mb-4">{t.testNotFound}</p>
        <Link href="/my-tests" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t.backToTests}
        </Link>
      </div>
    );
  }

  if (!test) return null;

  const resultIdx = findResultIdx(test.headers);
  const rangeIdx = findRangeIdx(test.headers);

  const compareResultIdx = compareTest ? findResultIdx(compareTest.headers) : -1;
  const compareByName = {};
  if (compareTest && compareResultIdx !== -1) {
    compareTest.rows.forEach((row) => {
      const name = String(row[0] || '').trim().toLowerCase();
      if (name) compareByName[name] = row[compareResultIdx];
    });
  }

  let improvedCount = 0;
  let worsenedCount = 0;
  let unchangedCount = 0;
  if (compareTest && resultIdx !== -1) {
    test.rows.forEach((row) => {
      const name = String(row[0] || '').trim().toLowerCase();
      const oldVal = compareByName[name] ?? null;
      const newVal = row[resultIdx];
      const range = rangeIdx !== -1 ? row[rangeIdx] : null;
      if (oldVal === null) { unchangedCount++; return; }
      const oldOOR = isOutOfRange(oldVal, range);
      const curOOR = isOutOfRange(newVal, range);
      if (oldOOR && !curOOR) improvedCount++;
      else if (!oldOOR && curOOR) worsenedCount++;
      else unchangedCount++;
    });
  }

  return (
    <>
      <Head>
        <title>{test.label || t.untitled} — Blood Test Converter</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <Link
          href="/my-tests"
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t.backToTests}
        </Link>

        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-indigo-900 mb-1">{test.label || t.untitled}</h1>
            <p className="text-sm text-gray-500">{formatDate(test.createdAt)}</p>
          </div>
        </div>

        {(interpretationLoading || interpretation) && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
            <h2 className="text-base font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Microscope className="w-4 h-4" />
              {t.whatDoResultsMean}
            </h2>
            {interpretationLoading ? (
              <div className="flex items-center space-x-2 text-indigo-600">
                <Loader className="w-5 h-5 animate-spin" />
                <span className="text-sm">{t.analyzingResults}</span>
              </div>
            ) : interpretation ? (
              <>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">{interpretation.summary}</p>
                {interpretation.flaggedValues && interpretation.flaggedValues.length > 0 && (
                  <ul className="space-y-2 mb-3">
                    {interpretation.flaggedValues.map((fv, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <span className="mt-0.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                        <span>
                          {(() => {
                            const id = findBiomarkerId(fv.name);
                            return id ? (
                              <Link
                                href={`/biomarkers/${id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-indigo-700 hover:underline"
                              >
                                {fv.name}
                              </Link>
                            ) : (
                              <strong className="text-gray-800">{fv.name}</strong>
                            );
                          })()}
                          {fv.value ? ` (${fv.value})` : ''} — {fv.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-xs text-gray-500 italic">{t.disclaimer}</p>
              </>
            ) : null}
          </div>
        )}

        {compareTest && (
          <div className="mb-6">
            {/* Comparison header */}
            <div className="bg-white border border-gray-200 rounded-t-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
                  <span className="text-sm text-gray-600">{compareTest.label || t.untitled}</span>
                  <span className="text-xs text-gray-400">{formatDate(compareTest.createdAt)}</span>
                </div>
                <span className="text-gray-300 text-sm">→</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow-md" />
                  <span className="text-sm font-medium text-gray-800">{test.label || t.untitled}</span>
                  <span className="text-xs text-gray-400">{formatDate(test.createdAt)}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                {improvedCount > 0 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                    ↑ {improvedCount} {t.improved}
                  </span>
                )}
                {worsenedCount > 0 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-red-600 font-medium">
                    ↓ {worsenedCount} {t.worsened}
                  </span>
                )}
                {unchangedCount > 0 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 font-medium">
                    → {unchangedCount} {t.unchanged}
                  </span>
                )}
              </div>
            </div>

            {/* Legend */}
            <div className="bg-gray-50 border-x border-gray-200 px-5 py-2 flex items-center gap-5 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-white shadow-sm inline-block" />
                {compareTest.label || t.untitled}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow-md inline-block" />
                {test.label || t.untitled}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-6 h-1.5 bg-emerald-100 rounded-full" />
                reference range
              </span>
            </div>

            {/* Range bar rows */}
            <div className="bg-white border border-t-0 border-gray-200 rounded-b-xl overflow-hidden">
              {test.rows.map((row, rowIdx) => {
                const name = String(row[0] || '').trim();
                const newVal = resultIdx !== -1 ? row[resultIdx] : null;
                const rangeStr = rangeIdx !== -1 ? row[rangeIdx] : null;
                const oldVal = compareByName[name.toLowerCase()] ?? null;
                const isCurrentOOR = isOutOfRange(newVal, rangeStr);
                const isOldOOR = isOutOfRange(oldVal, rangeStr);

                return (
                  <RangeBarRow
                    key={rowIdx}
                    name={name}
                    oldVal={oldVal}
                    newVal={newVal}
                    rangeStr={rangeStr}
                    isCurrentOOR={isCurrentOOR}
                    isOldOOR={isOldOOR}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Raw table section */}
        {compareTest ? (
          <div>
            <button
              onClick={() => setShowRawTable((v) => !v)}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-3"
            >
              {showRawTable ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showRawTable ? t.hideRawData : t.showRawData}
            </button>
          </div>
        ) : null}

        {showRawTable && (
          <>
            <div className="flex justify-end gap-2 mb-3">
              <button
                onClick={handleCopy}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${copied ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {copied ? <CheckCircle className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? t.copied : t.copyTable}
              </button>
              <button
                onClick={handleDownload}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${downloaded ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {downloaded ? <CheckCircle className="w-4 h-4 mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                {downloaded ? t.downloaded : t.downloadCsv}
              </button>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    {test.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 text-left text-sm font-medium border-r border-indigo-500">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {test.rows.map((row, rowIdx) => {
                    const result = resultIdx !== -1 ? row[resultIdx] : null;
                    const range = rangeIdx !== -1 ? row[rangeIdx] : null;
                    const outOfRange = isOutOfRange(result, range);
                    return (
                      <tr key={rowIdx} className="hover:bg-blue-50">
                        {row.map((cell, cellIdx) => (
                          <td
                            key={cellIdx}
                            className={`px-4 py-3 text-sm text-gray-900 border-r border-gray-200 ${
                              outOfRange && cellIdx === resultIdx ? 'bg-red-100 font-semibold' : ''
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
}

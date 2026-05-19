import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { Loader, ArrowLeft, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getTest, updateTestInterpretation } from '../../firebase/tests';

export default function TestDetailPage() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { testId } = router.query;

  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [interpretation, setInterpretation] = useState(null);
  const [interpretationLoading, setInterpretationLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      router.replace(`/auth/login?from=/my-tests/${testId}`);
      return;
    }
    if (!testId) return;

    getTest(currentUser.uid, testId)
      .then((data) => {
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
              if (parsed.summary) {
                setInterpretation(parsed);
                updateTestInterpretation(currentUser.uid, testId, JSON.stringify(parsed)).catch(() => {});
              }
            })
            .catch(() => {})
            .finally(() => setInterpretationLoading(false));
        }
      })
      .finally(() => setLoading(false));
  }, [currentUser, testId]);

  const isOutOfRange = (result, range) => {
    if (!range || !result) return false;
    try {
      const val = parseFloat(String(result).replace(',', '.'));
      if (isNaN(val)) return false;
      const parts = String(range).split('-').map((p) => p.trim());
      if (parts.length === 2) {
        const min = parseFloat(parts[0].replace(',', '.'));
        const max = parseFloat(parts[1].replace(',', '.'));
        if (!isNaN(min) && !isNaN(max)) return val < min || val > max;
      }
    } catch { return false; }
    return false;
  };

  const formatDate = (ts) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    return date.toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' });
  };

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
        <p className="text-gray-500 text-lg mb-4">Test not found.</p>
        <Link href="/my-tests" className="text-indigo-600 hover:underline">← Back to My Tests</Link>
      </div>
    );
  }

  if (!test) return null;

  const resultIdx = test.headers.findIndex((h) =>
    ['result', 'результат'].includes(h.toLowerCase())
  );
  const rangeIdx = test.headers.findIndex((h) =>
    ['reference range', 'референтні інтервали', 'normal range'].includes(h.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>{test.label || 'Test Detail'} — Blood Test Converter</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <Link href="/my-tests" className="inline-flex items-center text-indigo-600 hover:underline mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to My Tests
        </Link>

        <h1 className="text-2xl font-bold text-indigo-900 mb-1">{test.label || 'Untitled test'}</h1>
        <p className="text-sm text-gray-500 mb-6">{formatDate(test.createdAt)}</p>

        {(interpretationLoading || interpretation) && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 mb-6">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3">What do your results mean?</h2>
            {interpretationLoading ? (
              <div className="flex items-center space-x-2 text-indigo-600">
                <Loader className="w-5 h-5 animate-spin" />
                <span className="text-sm">Analyzing your results…</span>
              </div>
            ) : interpretation ? (
              <>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">{interpretation.summary}</p>
                {interpretation.flaggedValues && interpretation.flaggedValues.length > 0 && (
                  <ul className="space-y-2 mb-3">
                    {interpretation.flaggedValues.map((fv, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-gray-800">{fv.name}</strong>
                          {fv.value ? ` (${fv.value})` : ''} — {fv.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-xs text-gray-500 italic">
                  This is informational only. Always consult a healthcare professional.
                </p>
              </>
            ) : null}
          </div>
        )}

        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-600 text-white">
              <tr>
                {test.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left text-xs font-medium border-r border-indigo-500">
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
      </div>
    </>
  );
}

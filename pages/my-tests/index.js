import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { Trash2, Pencil, Check, ChevronRight, AlertCircle, ArrowLeft, GitCompare, Download, Loader, LineChart, Activity } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getTests, deleteTest, updateTestLabel, countOutOfRange } from '../../firebase/tests';
import translations from '../../translations';
import { useLanguage } from '../../contexts/LanguageContext';

export default function MyTestsPage() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { lang: currentLang } = useLanguage();
  const t = (translations[currentLang] || translations['en']).myTestsPage;

  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editLabel, setEditLabel] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const [exporting, setExporting] = useState(false);
  const [exportingPro, setExportingPro] = useState(false);
  const [exportError, setExportError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      router.replace(`/auth/login?from=/my-tests`);
      return;
    }
    getTests(currentUser.uid)
      .then(setTests)
      .catch((err) => {
        console.error('getTests failed:', err);
        setLoadError(err?.message || 'Failed to load tests');
      })
      .finally(() => setLoading(false));
  }, [currentUser]);

  const handleDelete = async (testId) => {
    await deleteTest(currentUser.uid, testId);
    setTests((prev) => prev.filter((t) => t.id !== testId));
    setDeleteConfirmId(null);
  };

  const handleLabelSave = async (testId) => {
    await updateTestLabel(currentUser.uid, testId, editLabel);
    setTests((prev) =>
      prev.map((test) => (test.id === testId ? { ...test, label: editLabel } : test))
    );
    setEditingId(null);
  };

  const toggleCompareSelect = (testId) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(testId)) return prev.filter((id) => id !== testId);
      if (prev.length >= 2) return prev;
      return [...prev, testId];
    });
  };

  const handleEnterCompareMode = () => {
    setCompareMode(true);
    setSelectedForCompare([]);
    setEditingId(null);
    setDeleteConfirmId(null);
  };

  const handleExitCompareMode = () => {
    setCompareMode(false);
    setSelectedForCompare([]);
  };

  const handleExportDashboard = async () => {
    setExportError('');
    setExporting(true);
    try {
      // Dynamic import: exportHealthDashboard itself lazy-loads exceljs,
      // so nothing extra is fetched until this exact click happens.
      const { exportHealthDashboard } = await import('../../lib/exportHealthDashboard');
      await exportHealthDashboard(tests, 'health-dashboard.xlsx');
    } catch (err) {
      console.error('Export failed:', err);
      setExportError(err?.message || 'Failed to generate the dashboard. Please try again.');
    } finally {
      setExporting(false);
    }
  };

  const handleExportProDashboard = async () => {
    setExportError('');
    setExportingPro(true);
    try {
      // Dynamic import: exportProDashboard lazy-loads xlsx-populate itself,
      // so nothing extra is fetched until this exact click happens.
      const { exportProDashboard } = await import('../../lib/exportProDashboard');
      await exportProDashboard(tests, 'My_Health_Dashboard.xlsx');
    } catch (err) {
      console.error('Pro dashboard export failed:', err);
      setExportError(err?.message || 'Failed to generate the Pro Dashboard. Please try again.');
    } finally {
      setExportingPro(false);
    }
  };


  const formatDate = (ts) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    return date.toLocaleDateString(currentLang, { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-indigo-600" />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{t.pageTitle}</title>
      </Head>
      <div className={`max-w-4xl mx-auto px-4 py-10 ${compareMode ? 'pb-28' : ''}`}>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t.back}
        </button>
        <div className="flex items-center justify-between flex-wrap gap-y-3 mb-8">
          <h1 className="text-3xl font-bold text-indigo-900 whitespace-nowrap">{t.heading}</h1>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {tests.length >= 1 && !compareMode && (
              <Link
                href="/my-tests/trends"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50 transition-colors whitespace-nowrap"
                title="Interactive multi-biomarker trend dashboard"
              >
                <Activity className="w-4 h-4" />
                Trend Dashboard
              </Link>
            )}
            {tests.length >= 1 && !compareMode && (
              <button
                onClick={handleExportDashboard}
                disabled={exporting}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                title={
                  tests.length >= 2
                    ? 'Export all your saved tests as a spreadsheet with trend charts'
                    : 'Export this test as a spreadsheet (add more saved tests to unlock trend charts)'
                }
              >
                {exporting ? <Loader className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                {exporting ? 'Generating…' : 'Export to Health Dashboard'}
              </button>
            )}
            {tests.length >= 1 && !compareMode && (
              <button
                onClick={handleExportProDashboard}
                disabled={exportingPro}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                title="Download a polished spreadsheet with live, editable trend charts (Excel/Google Sheets)"
              >
                {exportingPro ? <Loader className="w-4 h-4 animate-spin" /> : <LineChart className="w-4 h-4" />}
                {exportingPro ? 'Generating…' : 'Export Pro Dashboard'}
              </button>
            )}
            {tests.length >= 2 && !compareMode && (
              <button
                onClick={handleEnterCompareMode}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors whitespace-nowrap"
              >
                <GitCompare className="w-4 h-4" />
                {t.compareMode}
              </button>
            )}
            <Link
              href="/"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium whitespace-nowrap"
            >
              {t.newConversion}
            </Link>
          </div>
        </div>

        {exportError && (
          <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            {exportError}
          </div>
        )}

        {compareMode && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-6 flex items-center gap-3">
            <GitCompare className="w-4 h-4 text-indigo-500 flex-shrink-0" />
            <p className="text-sm text-indigo-700 flex-1">
              {t.selectTwoTests}
              {' — '}
              <span className="font-semibold">{selectedForCompare.length} / 2</span>
            </p>
            <button
              onClick={handleExitCompareMode}
              className="text-sm text-indigo-500 hover:text-indigo-700 transition-colors"
            >
              {t.cancel}
            </button>
          </div>
        )}

        {loadError ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <p className="text-red-700 font-medium mb-2">{t.loadError}</p>
            <p className="text-red-600 text-sm font-mono">{loadError}</p>
            <p className="text-gray-500 text-sm mt-3">{t.loadErrorHint}</p>
          </div>
        ) : tests.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <p className="text-gray-500 text-lg mb-4">{t.noTests}</p>
            <Link href="/" className="text-indigo-600 hover:underline font-medium">
              {t.uploadFirst}
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {tests.map((test) => {
              let outOfRange;
              if (test.interpretationSummary) {
                try {
                  const interp = JSON.parse(test.interpretationSummary);
                  if (Array.isArray(interp.flaggedValues)) {
                    outOfRange = interp.flaggedValues.length;
                  }
                } catch {}
              }
              if (outOfRange === undefined) {
                outOfRange = countOutOfRange(test.headers || [], test.rows || []);
              }
              const biomarkerCount = test.rows ? test.rows.length : 0;
              const isSelected = selectedForCompare.includes(test.id);
              const isDisabled = compareMode && !isSelected && selectedForCompare.length >= 2;
              const selectionOrder = selectedForCompare.indexOf(test.id);

              return (
                <div
                  key={test.id}
                  className={`bg-white rounded-xl shadow transition-all border p-5 flex items-center gap-4 group ${
                    compareMode
                      ? isSelected
                        ? 'border-indigo-500 ring-2 ring-indigo-200 cursor-pointer hover:shadow-md'
                        : isDisabled
                        ? 'border-gray-100 opacity-40 cursor-not-allowed'
                        : 'border-gray-100 cursor-pointer hover:border-indigo-300 hover:shadow-md'
                      : 'border-gray-100 cursor-pointer hover:shadow-md'
                  }`}
                  onClick={(e) => {
                    if (e.target.closest('[data-no-nav]')) return;
                    if (compareMode) {
                      if (!isDisabled) toggleCompareSelect(test.id);
                      return;
                    }
                    router.push(`/my-tests/${test.id}`);
                  }}
                >
                  {compareMode && (
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <span className="text-white text-xs font-bold leading-none">
                          {selectionOrder === 0 ? '1' : '2'}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    {!compareMode && editingId === test.id ? (
                      <div
                        className="flex items-center gap-2"
                        data-no-nav
                        onClick={(e) => e.stopPropagation()}
                      >
                        <input
                          type="text"
                          value={editLabel}
                          onChange={(e) => setEditLabel(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleLabelSave(test.id)}
                          className="border border-gray-300 rounded px-2 py-1 text-sm flex-1"
                          autoFocus
                        />
                        <button
                          onClick={() => handleLabelSave(test.id)}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800 truncate">
                          {test.label || t.untitled}
                        </span>
                        {!compareMode && (
                          <button
                            data-no-nav
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingId(test.id);
                              setEditLabel(test.label || '');
                            }}
                            className="text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                    <p className="text-sm text-gray-500 mt-0.5">{formatDate(test.createdAt)}</p>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        {biomarkerCount} {t.biomarkers}
                      </span>
                      {outOfRange > 0 ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-600">
                          <AlertCircle className="w-3 h-3" />
                          {outOfRange} {t.outOfRange}
                        </span>
                      ) : outOfRange === 0 && biomarkerCount > 0 ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600">
                          {t.allInRange}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {!compareMode && (
                    <div className="flex items-center gap-2 flex-shrink-0" data-no-nav onClick={(e) => e.stopPropagation()}>
                      {deleteConfirmId === test.id ? (
                        <>
                          <span className="text-xs text-gray-500">{t.deleteConfirm}</span>
                          <button
                            onClick={() => handleDelete(test.id)}
                            className="px-2.5 py-1 text-xs font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
                          >
                            {t.delete}
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(null)}
                            className="px-2.5 py-1 text-xs text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md transition-colors"
                          >
                            {t.cancel}
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirmId(test.id)}
                          className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  )}

                  {!compareMode && <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {compareMode && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              {selectedForCompare.length === 2
                ? <><span className="font-semibold text-indigo-700">2 / 2</span> — ready to compare</>
                : selectedForCompare.length === 1
                ? <><span className="font-semibold text-indigo-700">1 / 2</span> — select one more</>
                : t.selectTwoTests}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleExitCompareMode}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors"
              >
                {t.cancel}
              </button>
              <button
                disabled={selectedForCompare.length < 2}
                onClick={() =>
                  router.push(
                    `/my-tests/${selectedForCompare[0]}?compare=${selectedForCompare[1]}`
                  )
                }
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  selectedForCompare.length < 2
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {t.compareSelected}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

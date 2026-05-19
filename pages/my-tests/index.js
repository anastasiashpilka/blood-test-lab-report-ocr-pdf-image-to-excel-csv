import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { Trash2, Pencil, Check, ChevronRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getTests, deleteTest, updateTestLabel, countOutOfRange } from '../../firebase/tests';

export default function MyTestsPage() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editLabel, setEditLabel] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      router.replace(`/auth/login?from=/my-tests`);
      return;
    }
    getTests(currentUser.uid)
      .then(setTests)
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
      prev.map((t) => (t.id === testId ? { ...t, label: editLabel } : t))
    );
    setEditingId(null);
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

  return (
    <>
      <Head>
        <title>My Tests — Blood Test Converter</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-indigo-900">My Tests</h1>
          <Link
            href="/"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
          >
            + New Conversion
          </Link>
        </div>

        {tests.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <p className="text-gray-500 text-lg mb-4">No saved tests yet.</p>
            <Link href="/" className="text-indigo-600 hover:underline font-medium">
              Upload your first blood test →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {tests.map((test) => {
              const outOfRange = countOutOfRange(test.headers || [], test.rows || []);
              const biomarkerCount = test.rows ? test.rows.length : 0;

              return (
                <div
                  key={test.id}
                  className="bg-white rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 p-5 flex items-center gap-4 cursor-pointer group"
                  onClick={(e) => {
                    if (e.target.closest('[data-no-nav]')) return;
                    router.push(`/my-tests/${test.id}`);
                  }}
                >
                  <div className="flex-1 min-w-0">
                    {editingId === test.id ? (
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
                          {test.label || 'Untitled test'}
                        </span>
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
                      </div>
                    )}
                    <p className="text-sm text-gray-500 mt-0.5">{formatDate(test.createdAt)}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span>{biomarkerCount} biomarkers</span>
                      {outOfRange > 0 && (
                        <span className="flex items-center gap-1 text-red-500 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {outOfRange} out of range
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0" data-no-nav onClick={(e) => e.stopPropagation()}>
                    {deleteConfirmId === test.id ? (
                      <>
                        <span className="text-sm text-gray-600">Delete?</span>
                        <button
                          onClick={() => handleDelete(test.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="text-gray-500 hover:text-gray-700 text-sm"
                        >
                          No
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

                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

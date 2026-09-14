import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ArrowLeft, FlaskConical } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getTests } from '../../firebase/tests';
import translations from '../../translations';
import { useLanguage } from '../../contexts/LanguageContext';
import BiomarkerTrendDashboard from '../../components/BiomarkerTrendDashboard';
import sampleTrendData from '../../lib/sampleTrendData';

export default function BiomarkerTrendsPage() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { lang: currentLang } = useLanguage();
  const t = translations[currentLang]?.trendsPage || translations.en.trendsPage;

  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [showSample, setShowSample] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      router.replace(`/auth/login?from=/my-tests/trends`);
      return;
    }
    getTests(currentUser.uid)
      .then((loaded) => {
        setTests(loaded);
        if (!loaded.length) setShowSample(true); // nothing to show yet — preview with sample data
      })
      .catch((err) => {
        console.error('getTests failed:', err);
        setLoadError(err?.message || 'Failed to load tests');
      })
      .finally(() => setLoading(false));
  }, [currentUser, router]);

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
      <div className="max-w-6xl mx-auto px-4 py-10 print:py-0 print:px-0">
        <button
          onClick={() => router.push('/my-tests')}
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 mb-6 transition-colors print:hidden"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t.back}
        </button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-indigo-900">{t.heading}</h1>
          <p className="text-gray-600 mt-1 print:hidden">{t.subheading}</p>
        </div>

        {loadError && <p className="text-sm text-red-600 mb-4 print:hidden">{loadError}</p>}

        {showSample && (
          <div className="mb-4 flex items-center gap-2 text-sm text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2 print:hidden">
            <FlaskConical className="w-4 h-4 shrink-0" aria-hidden="true" />
            {t.usingSampleData}
            {tests.length > 0 && (
              <button
                onClick={() => setShowSample(false)}
                className="ml-auto underline hover:no-underline"
              >
                {t.backToMyTests}
              </button>
            )}
          </div>
        )}

        {!showSample && tests.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">{t.noTests}</p>
            <button
              onClick={() => setShowSample(true)}
              className="text-indigo-600 hover:text-indigo-800 font-medium underline"
            >
              {t.loadSample}
            </button>
          </div>
        ) : (
          <BiomarkerTrendDashboard tests={showSample ? sampleTrendData : tests} />
        )}
      </div>
    </>
  );
}

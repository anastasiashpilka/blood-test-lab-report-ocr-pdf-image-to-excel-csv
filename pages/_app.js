import '@/styles/globals.css';
import Head from 'next/head';
import translations from '../translations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as ga from '../lib/gtag';
import Layout from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

function AppContent({ Component, pageProps }) {
  const router = useRouter();
  const { lang: currentLang } = useLanguage();

  useEffect(() => {
    const handleRouteChange = (url) => ga.pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{translations[currentLang]?.header?.title || translations.en.header.title}</title>
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <LanguageProvider defaultLang={router.locale || 'en'}>
      <AppContent Component={Component} pageProps={pageProps} />
    </LanguageProvider>
  );
}

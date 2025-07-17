import "@/styles/globals.css";
import Head from 'next/head';
import translations from '../translations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as ga from '../lib/gtag';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router; 
  const currentLang = locale || 'en';

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

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
      <Component {...pageProps} />
    </>
  );
}

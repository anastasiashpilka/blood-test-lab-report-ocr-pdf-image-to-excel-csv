import "@/styles/globals.css";
import Head from 'next/head';
import translations from '../translations';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router; 
  const currentLang = locale || 'en';
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

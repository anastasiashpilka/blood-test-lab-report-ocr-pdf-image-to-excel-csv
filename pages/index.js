import Head from 'next/head';
import TableConverter from '../components/TableConverter';
import translations from '../translations';
import { useRouter } from 'next/router'; 

export default function HomePage() {
  const router = useRouter();
  const { locale } = router;
  const currentLang = locale || 'en';

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tableconverter.com'; 
  const canonicalUrl = `${baseUrl}/${currentLang}/`; 

  return (
    <>
      <Head>
        <title>{translations[currentLang]?.header?.title || translations.en.header.title}</title>
        <meta name="description" content={translations[currentLang]?.header?.description || translations.en.header.description} />
        <link rel="canonical" href={canonicalUrl} />

        {Object.keys(translations).map(langCode => (
          <link
            key={langCode}
            rel="alternate"
            hrefLang={langCode}
            href={`${baseUrl}/${langCode}/`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en/`} />

        <meta name="keywords" content={
          currentLang === 'en' ? "blood test converter, PDF to Excel, medical data to spreadsheet, convert blood test results, health data analysis, online blood test tool, lab results to spreadsheet, instant blood work conversion" :
          currentLang === 'es' ? "convertidor de análisis de sangre, PDF a Excel, datos médicos a hoja de cálculo, convertir resultados de análisis, análisis de salud, herramienta online de análisis de sangre, resultados de laboratorio a hoja de cálculo, conversión instantánea de análisis de sangre" :
          currentLang === 'de' ? "Bluttest-Konverter, PDF zu Excel, medizinische Daten zu Tabelle, Bluttestergebnisse konvertieren, Gesundheitsdatenanalyse, Online-Bluttest-Tool, Laborergebnisse in Tabellenkalkulation, sofortige Blutwerte-Konvertierung" :
          currentLang === 'fr' ? "convertisseur de tests sanguins, PDF vers Excel, données médicales vers tableur, convertir résultats de tests, analyse de données de santé, outil d'analyse sanguine en ligne, résultats de laboratoire en tableur" :
          currentLang === 'uk' ? "конвертер аналізів крові, PDF в Excel, медичні дані в таблицю, перетворення аналізів, аналіз даних здоров’я, онлайн інструмент для аналізу крові, результати лабораторії в електронну таблицю, миттєва конвертація аналізів крові" :
          currentLang === 'ja' ? "血液検査コンバーター, PDFからExcelへ, 医療データをスプレッドシートに, 血液検査結果の変換, 健康データ分析, オンライン血液検査ツール, 検査結果からスプレッドシートへ, 血液検査の即時変換" :
          currentLang === 'zh' ? "血液检测转换器, PDF转Excel, 医疗数据转电子表格, 转换血液检测结果, 健康数据分析, 在线血液检测工具, 实验室结果转表格, 血液检查即时转换" :
          "blood test converter, PDF to Excel, medical data to spreadsheet, convert blood test results, health data analysis"
        } />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TableConverter Team" />

        <meta property="og:title" content={translations[currentLang]?.header?.title || translations.en.header.title} />
        <meta property="og:description" content={translations[currentLang]?.header?.description || translations.en.header.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/microscope.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={translations[currentLang]?.header?.title || translations.en.header.title} />
        <meta name="twitter:description" content={translations[currentLang]?.header?.description || translations.en.header.description} />
        <meta name="twitter:image" content="/microscope.png" />

        <link rel="icon" type="image/png" href="/microscope.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": translations[currentLang]?.header?.title || translations.en.header.title, "acceptedAnswer": { "@type": "Answer", "text": translations[currentLang]?.header?.description || translations.en.header.description } },
              ...Object.keys(translations[currentLang]?.faq || translations.en.faq) 
                .filter(key => key.startsWith('q') && key !== 'title' && key !== 'moreInfo')
                .map(key => ({
                  "@type": "Question",
                  "name": (translations[currentLang]?.faq[key] || translations.en.faq[key]),
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": (translations[currentLang]?.faq[key.replace('q', 'a')] || translations.en.faq[key.replace('q', 'a')])
                  }
                }))
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": translations[currentLang]?.header?.title || translations.en.header.title,
            "operatingSystem": "Web",
            "applicationCategory": "HealthApplication",
            "description": translations[currentLang]?.header?.description || translations.en.header.description
          })}
        </script>
      </Head>
      <TableConverter />
    </>
  );
}
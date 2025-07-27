import { Html, Head, Main, NextScript } from 'next/document';
import translations from '../translations'; 

export default function Document() {
  const currentLang = 'en';

  return (
    <Html lang={currentLang}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={translations[currentLang].header.description} />
        <meta name="keywords" content={
          currentLang === 'en' ? "blood test converter, PDF to Excel, medical data to spreadsheet, convert blood test results, health data analysis, online blood test tool, lab results to spreadsheet, instant blood work conversion" :
          currentLang === 'es' ? "convertidor de análisis de sangre, PDF a Excel, datos médicos a hoja de cálculo, convertir resultados de análisis, análisis de salud, herramienta online de análisis de sangre, resultados de laboratorio a hoja de cálculo, conversión instantánea de análisis de sangre" :
          currentLang === 'de' ? "Bluttest-Konverter, PDF zu Excel, medizinische Daten zu Tabelle, Bluttestergebnisse konvertieren, Gesundheitsdatenanalyse, Online-Bluttest-Tool, Laborergebnisse in Tabellenkalkulation, sofortige Blutwerte-Konvertierung" :
          currentLang === 'fr' ? "convertisseur de tests sanguins, PDF vers Excel, données médicales vers tableur, convertir résultats de tests, analyse de données de santé, outil d'analyse sanguine en ligne, résultats de laboratoire en tableur, conversion instantanée des analyses de sang" :
          currentLang === 'uk' ? "конвертер аналізів крові, PDF в Excel, медичні дані в таблицю, перетворення аналізів, аналіз даних здоров’я, онлайн інструмент для аналізу крові, результати лабораторії в електронну таблицю, миттєва конвертація аналізів крові" :
          currentLang === 'ja' ? "血液検査コンバーター, PDFからExcelへ, 医療データをスプレッドシートに, 血液検査結果の変換, 健康データ分析, オンライン血液検査ツール, 検査結果からスプレッドシートへ, 血液検査の即時変換" :
          currentLang === 'zh' ? "血液检测转换器, PDF转Excel, 医疗数据转电子表格, 转换血液检测结果, 健康数据分析, 在线血液检测工具, 实验室结果转表格, 血液检查即时转换" : 
          "blood test converter, PDF to Excel, medical data to spreadsheet, convert blood test results, health data analysis" 
        } />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TableConverter Team" />
 
        <meta property="og:title" content={translations[currentLang].header.title} /> 
        <meta property="og:description" content={translations[currentLang].header.description} /> 
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tableconverter.com/${currentLang}/`} />
        <meta property="og:image" content="/favicon.ico" />
        
        <link rel="alternate" hrefLang="en" href="https://tableconverter.com/en/" />
        <link rel="alternate" hrefLang="es" href="https://tableconverter.com/es/" />
        <link rel="alternate" hrefLang="de" href="https://tableconverter.com/de/" />
        <link rel="alternate" hrefLang="fr" href="https://tableconverter.com/fr/" />
        <link rel="alternate" hrefLang="uk" href="https://tableconverter.com/uk/" />
        <link rel="alternate" hrefLang="ja" href="https://tableconverter.com/ja/" />
        <link rel="alternate" hrefLang="zh" href="https://tableconverter.com/zh/" /> 
        <link rel="alternate" hrefLang="x-default" href="https://tableconverter.com/en/" />

<link rel="apple-touch-icon" sizes="180x180" href="public/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/Users/anastasia/Desktop/konverter2/public/favicon.ico"/>
<link rel="icon" type="image/png" sizes="16x16" href="public/favicon-16x16.png"/>


        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Sans+Pro:wght@600&family=Cinzel:wght@600&family=Fira+Sans:wght@600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;600&family=Lato:wght@400;700&display=swap"
        />
      <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": translations[currentLang].header.title, "acceptedAnswer": { "@type": "Answer", "text": translations[currentLang].header.description } },
              ...Object.keys(translations[currentLang].faq)
                .filter(key => key.startsWith('q') && key !== 'title' && key !== 'moreInfo') 
                .map(key => ({
                  "@type": "Question",
                  "name": translations[currentLang].faq[key],
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": translations[currentLang].faq[key.replace('q', 'a')]
                  }
                }))
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": translations[currentLang].header.title,
            "operatingSystem": "Web",
            "applicationCategory": "HealthApplication",
            "description": translations[currentLang].header.description
          })}
        </script>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
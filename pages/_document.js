import { Html, Head, Main, NextScript } from 'next/document';
import translations from '../translations'; 
import { GA_MEASUREMENT_ID } from '../lib/gtag';

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
 
        <meta property="og:title" content={translations[currentLang].header.title} /> {/* Use header.title */}
        <meta property="og:description" content={translations[currentLang].header.description} /> {/* Use header.description */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tableconverter.com/${currentLang}/`} />
        <meta property="og:image" content="/microscope.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={translations[currentLang].header.title} /> {/* Use header.title */}
        <meta name="twitter:description" content={translations[currentLang].header.description} /> {/* Use header.description */}
        <meta name="twitter:image" content="/microscope.png" />

        <link rel="alternate" hrefLang="en" href="https://tableconverter.com/en/" />
        <link rel="alternate" hrefLang="es" href="https://tableconverter.com/es/" />
        <link rel="alternate" hrefLang="de" href="https://tableconverter.com/de/" />
        <link rel="alternate" hrefLang="fr" href="https://tableconverter.com/fr/" />
        <link rel="alternate" hrefLang="uk" href="https://tableconverter.com/uk/" />
        <link rel="alternate" hrefLang="ja" href="https://tableconverter.com/ja/" />
        <link rel="alternate" hrefLang="zh" href="https://tableconverter.com/zh/" /> 
        <link rel="alternate" hrefLang="x-default" href="https://tableconverter.com/en/" />

        <link rel="icon" type="image/png" href="/microscope.png" />

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

        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());

                  // Ця конфігурація відправляє початковий перегляд сторінки
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname, // Використовуємо поточний шлях
                  });
                `,
              }}
            />
          </>
        )}
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
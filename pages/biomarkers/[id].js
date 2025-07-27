import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import biomarkersData from '../../lib/biomarkers-data';
import translations from '../../translations';

export async function getStaticPaths({ locales }) {
    const paths = biomarkersData.flatMap(biomarker =>
        locales.map(locale => ({
            params: { id: biomarker.id },
            locale,
        }))
    );
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params, locale }) {
    const biomarker = biomarkersData.find(b => b.id === params.id);
    const t = translations[locale] || translations['en'];

    if (!biomarker) {
        return {
            notFound: true,
        };
    }

    const relatedBiomarkers = biomarker.relatedBiomarkers
        .map(relatedId => biomarkersData.find(b => b.id === relatedId))
        .filter(Boolean);

    return {
        props: {
            biomarker,
            relatedBiomarkers,
            translations: t,
        },
    };
}

const BiomarkerDetailPage = ({ biomarker, relatedBiomarkers, translations: serverTranslations }) => {
    const router = useRouter();
    const currentLang = router.locale || 'en';
    const t = serverTranslations;

    if (!biomarker) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <h1 className="text-3xl font-bold text-gray-700">Biomarker Not Found.</h1>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{biomarker.name} | Medical Insights</title>
                <meta name="description" content={`Detailed information about biomarker: ${biomarker.name}`} />
                <meta name="keywords" content={`${biomarker.name}, biomarker details, medical insights`} />
            </Head>
            <main className="container mx-auto px-4 py-12 max-w-5xl">
                <button
                    onClick={() => router.push('/biomarkers')}
                    className="flex items-center text-indigo-600 hover:text-indigo-900 transition-colors duration-200 mb-10 font-semibold text-lg px-4 py-2 rounded-lg border border-indigo-600 hover:border-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transform hover:-translate-x-1"
                >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    {t.biomarker.button_back}
                </button>
                <div className="bg-white p-10 rounded-lg shadow-3xl mb-14 border border-gray-100 transform transition-transform duration-300 ease-in-out ">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-indigo-800 mb-4">{biomarker.name}</h1>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">{biomarker.description}</p>
                    <div className="prose max-w-none text-gray-800 leading-relaxed text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: biomarker.detailedInfo }}></div>
                </div>
                {relatedBiomarkers.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.biomarker.titles}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedBiomarkers.map((relatedBiomarker) => (
                                <div
                                    key={relatedBiomarker.id}
                                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100"
                                    onClick={() => router.push(`/biomarkers/${relatedBiomarker.id}`)}
                                >
                                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">{relatedBiomarker.name}</h3>
                                    <p className="text-gray-600 text-sm">{relatedBiomarker.description}</p>
                                    <span className="text-indigo-600 hover:underline text-sm mt-3 inline-block font-medium">{t.biomarker.button_view_details} &rarr;</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </>
    );
};

export default BiomarkerDetailPage;
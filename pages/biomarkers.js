import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Ghost, Search } from 'lucide-react';
import translations from '../translations';
import biomarkersData from '../lib/biomarkers-data';

const BIOMARKERS_PER_LOAD = 9;

export async function getStaticProps({ locale }) {
    const t = translations[locale] || translations['en'];
    return {
        props: {
            translations: t,
            biomarkers: biomarkersData,
        },
    };
}

const BiomarkersPage = ({ translations: serverTranslations, biomarkers }) => {
    const router = useRouter();
    const currentLang = router.locale || 'en';
    const t = serverTranslations;
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleBiomarkerCount, setVisibleBiomarkerCount] = useState(BIOMARKERS_PER_LOAD);

    const filteredBiomarkers = useMemo(() => {
        const trimmedSearchTerm = searchTerm.toLowerCase().trim();
        if (!trimmedSearchTerm) return biomarkers;
        return biomarkers.filter(biomarker =>
            biomarker.name.toLowerCase().includes(trimmedSearchTerm) ||
            biomarker.description.toLowerCase().includes(trimmedSearchTerm)
        );
    }, [searchTerm, biomarkers]);

    const handleBiomarkerClick = (id) => {
        router.push(`/biomarkers/${id}`);
    };

    const handleLoadMore = () => {
        setVisibleBiomarkerCount(prevCount => prevCount + BIOMARKERS_PER_LOAD);
    };

    return (
        <>
            <Head>
                <title>{t.biomarker.title} | Medical Insights</title>
                <meta name="description" content={t.biomarker.description} />
                <meta name="keywords" content="biomarkers, medical insights, health information" />
            </Head>
            <main className="mx-auto px-4 py-12 w-full">
                <h1 className="text-5xl lg:text-5xl font-extrabold text-indigo-800 text-center mb-6">
                    {t.biomarker.title}
                </h1>
                <p className="text-xl text-gray-700 text-center mb-12">
                    {t.biomarker.description}
                </p>
                <div className="bg-white p-10 rounded-lg shadow-3xl max-w-full mx-auto border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        {t.biomarker.hubTitle}
                    </h2>
                    <p className="text-gray-600 mb-8 text-center leading-relaxed">
                        {t.biomarker.hubDescription}
                    </p>
                    <div className="relative mb-10">
                        <input
                            type="text"
                            placeholder={t.biomarker.searchPlaceholder}
                            className="shadow-inner appearance-none border border-gray-300 rounded-lg w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:ring-3 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 pl-14 text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
                    </div>
                    <div className="min-h-[300px] flex flex-col justify-center items-center">
                        {filteredBiomarkers.length === 0 && searchTerm.trim() ? (
                            <div className="text-center py-10">
                                <Ghost className="mx-auto w-32 h-32 mb-6 text-gray-400 opacity-75" />
                                <p className="text-2xl text-gray-600 font-semibold mb-2">
                                    {t.biomarker.noBiomarkerFoundTitle}
                                </p>
                                <p className="text-lg text-gray-500">
                                    {t.biomarker.noBiomarkerFoundMessage}
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredBiomarkers.slice(0, visibleBiomarkerCount).map((biomarker) => (
                                        <div
                                            key={biomarker.id}
                                            className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 cursor-pointer transition-all duration-200 transform hover:-translate-y-1 group flex flex-col items-start justify-between"
                                            onClick={() => handleBiomarkerClick(biomarker.id)}
                                        >
                                            <div>
                                                <h3 className="text-2xl font-bold text-indigo-700 mb-2 group-hover:text-indigo-800 transition-colors duration-200">{biomarker.name}</h3>
                                                <p className="text-gray-700 text-base mb-4">{biomarker.description}</p>
                                            </div>
                                            <span className="text-blue-600 group-hover:text-blue-700 hover:underline text-md font-medium flex items-center">
                                                {t.biomarkers.viewDetails}
                                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                {visibleBiomarkerCount < filteredBiomarkers.length && (
                                    <div className="text-center mt-10">
                                        <button
                                            onClick={handleLoadMore}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-lg"
                                        >
                                            {t.biomarkers.showMoreButton}
                                            {` (${filteredBiomarkers.length - visibleBiomarkerCount} ${t.biomarker.remainingText})`}
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </main>
            <style jsx>{`
                .shadow-3xl {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
                }
            `}</style>
        </>
    );
};

export default BiomarkersPage;
import Head from 'next/head';
import Link from 'next/link';
import { FileSpreadsheet, ChevronRight } from 'lucide-react';
import seoLandingPagesData from '../../lib/seo-landing-pages-data';

const BASE_URL = 'https://www.onlinebloodtestconverter.com';

const GROUPS = [
    { market: 'US', flag: '🇺🇸', badge: 'English', heading: 'Convert US Lab Results to Excel', subheading: 'Step-by-step guides for the most common US labs and test panels.' },
    { market: 'UA', flag: '🇺🇦', badge: 'Українською', heading: 'Перенесення результатів аналізів в Excel', subheading: 'Покрокові інструкції для найпопулярніших українських лабораторій та панелей аналізів.' },
];

export async function getStaticProps() {
    return {
        props: {
            pages: seoLandingPagesData.map(({ slug, market, locale, targetEntity, h1, metaDescription }) => ({
                slug, market, locale, targetEntity, h1, metaDescription,
            })),
        },
    };
}

const ConvertHubPage = ({ pages }) => {
    const title = 'Convert Lab Results to Excel — By Lab & Test Panel | Online Blood Test Converter';
    const description = 'Free step-by-step guides for converting PDF lab results from Labcorp, Quest, Mayo Clinic, Synevo, Dila, Eskulab, and more into Excel or CSV.';
    const canonicalUrl = `${BASE_URL}/convert`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
            </Head>
            <main className="mx-auto px-4 py-12 w-full max-w-5xl">
                <div className="text-center mb-12">
                    <FileSpreadsheet className="w-10 h-10 mx-auto mb-4 text-indigo-700" />
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-4">
                        Convert Lab Results to Excel
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Pick your lab or test panel below for a guide tailored to that report format — or just use the converter directly on any page.
                    </p>
                </div>

                {GROUPS.map((group) => {
                    const groupPages = pages.filter((p) => p.market === group.market);
                    if (!groupPages.length) return null;

                    return (
                        <section key={group.market} className="mb-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
                            <div className="flex justify-center mb-1">
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-white border border-gray-200 rounded-full px-3 py-1">
                                    <span aria-hidden="true">{group.flag}</span> {group.badge}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mt-3 mb-1 text-center">{group.heading}</h2>
                            <p className="text-gray-500 text-sm text-center mb-8">{group.subheading}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {groupPages.map((page) => (
                                    <Link
                                        key={page.slug}
                                        href={`/convert/${page.slug}`}
                                        locale={page.locale}
                                        className="group flex items-start justify-between gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
                                    >
                                        <div>
                                            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">
                                                {page.targetEntity}
                                            </p>
                                            <h3 className="text-lg font-bold text-indigo-800 group-hover:text-indigo-900 mb-1">
                                                {page.h1}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">{page.metaDescription}</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </main>
        </>
    );
};

export default ConvertHubPage;

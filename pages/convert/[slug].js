import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Upload, Microscope, Table } from 'lucide-react';
import seoLandingPagesData from '../../lib/seo-landing-pages-data';
import FileUploaderWidget from '../../components/FileUploaderWidget';
import HowItWorksSteps from '../../components/HowItWorksSteps';

// Same icon language as the homepage's "How it works" steps (Upload ->
// Microscope -> Table) — three steps every time, so a fixed mapping is fine.
const STEP_ICONS = [Upload, Microscope, Table];

const BASE_URL = 'https://www.onlinebloodtestconverter.com';

export async function getStaticPaths() {
    // Each entry only targets the one locale it's written for (en for US
    // labs/panels, uk for Ukrainian ones) — unlike the biomarker hub, this
    // content isn't translated across all 7 site locales, so we don't loop
    // over every locale here.
    const paths = seoLandingPagesData.map((page) => ({
        params: { slug: page.slug },
        locale: page.locale,
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
    const page = seoLandingPagesData.find((p) => p.slug === params.slug && p.locale === locale);

    if (!page) {
        return { notFound: true };
    }

    return { props: { page } };
}

const backLabel = { en: 'All conversion guides', uk: 'Усі інструкції з конвертації' };

const ConvertLandingPage = ({ page }) => {
    const canonicalUrl = `${BASE_URL}/${page.locale}/convert/${page.slug}`;

    return (
        <>
            <Head>
                <title>{page.seoTitle}</title>
                <meta name="description" content={page.metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={page.seoTitle} />
                <meta property="og:description" content={page.metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={`${BASE_URL}/favicon-96x96.png`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={page.seoTitle} />
                <meta name="twitter:description" content={page.metaDescription} />
            </Head>
            <main className="container mx-auto px-4 py-12 max-w-5xl">
                <Link
                    href="/convert"
                    locale={page.locale}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-900 transition-colors mb-8 font-medium text-sm"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {backLabel[page.locale] || backLabel.en}
                </Link>

                <h1 className="text-4xl lg:text-5xl font-extrabold text-indigo-900 mb-8 text-center leading-tight">
                    {page.h1}
                </h1>

                <div className="mb-12">
                    <FileUploaderWidget />
                </div>

                <div className="bg-white p-8 sm:p-10 rounded-xl shadow-md border border-gray-100 mb-10">
                    <div
                        className="prose max-w-none text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: page.bodyIntroHtml }}
                    />
                </div>

                {page.steps?.length > 0 && (
                    <HowItWorksSteps
                        title={page.stepsTitle}
                        steps={page.steps.map((step, i) => ({ ...step, icon: STEP_ICONS[i] || Upload }))}
                    />
                )}

                {page.bodyOutroHtml && (
                    <div className="bg-white p-8 sm:p-10 rounded-xl shadow-md border border-gray-100 mb-10">
                        <div
                            className="prose max-w-none text-gray-800 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: page.bodyOutroHtml }}
                        />
                    </div>
                )}

                {page.keyMetrics?.length > 0 && (
                    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
                            {page.keyMetricsTitle}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {page.keyMetrics.map((metric) => (
                                <div
                                    key={metric.name}
                                    className="flex items-center justify-between gap-3 px-4 py-3 bg-indigo-50 border border-indigo-100 rounded-lg"
                                >
                                    <span className="text-sm font-medium text-gray-800">{metric.name}</span>
                                    <span className="text-sm text-indigo-700 font-semibold whitespace-nowrap">{metric.unit}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-5 text-sm leading-relaxed">
                    {page.legalDisclaimer}
                </div>
            </main>
        </>
    );
};

export default ConvertLandingPage;

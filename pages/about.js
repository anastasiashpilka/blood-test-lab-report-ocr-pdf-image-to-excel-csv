import Head from 'next/head';
import Link from 'next/link';
import { ShieldCheck, Microscope, FileText, Globe } from 'lucide-react';

const BASE_URL = 'https://www.onlinebloodtestconverter.com';

export default function AboutPage() {
    const title = 'About — Online Blood Test Converter';
    const description =
        'Learn how the free AI-powered blood test converter works. Upload a PDF, image, or DOCX and get a structured table with out-of-range highlights in seconds. Your data is never stored.';
    const canonicalUrl = `${BASE_URL}/about`;

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
                <meta property="og:image" content={`${BASE_URL}/favicon-96x96.png`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Head>
            <div className="bg-gray-50 min-h-screen py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <Microscope className="w-10 h-10 mx-auto mb-4 text-indigo-700" />
                        <h1 className="text-4xl font-extrabold text-indigo-900 mb-3">About BloodTestConverter</h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A free AI-powered tool that turns blood test PDFs, images, and documents into structured, readable tables — then explains what the results mean.
                        </p>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6 flex items-start gap-4">
                        <ShieldCheck className="w-6 h-6 text-indigo-700 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold text-indigo-900 mb-1">Your data is never stored</p>
                            <p className="text-sm text-indigo-800 leading-relaxed">
                                Files are processed by Google Gemini AI and immediately discarded. Nothing is saved to our servers. No account required to convert results.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                        <h2 className="text-xl font-bold text-indigo-900 mb-4">How it works</h2>
                        <ol className="space-y-4">
                            {[
                                'Upload a PDF, DOCX, PNG, JPG, or WEBP of your blood test results.',
                                'Google Gemini AI extracts the biomarker data and structures it into an editable table.',
                                'Out-of-range values are highlighted and an AI summary explains what the results may indicate.',
                                'Copy the table, download as CSV, or save it to your account to track results over time.',
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <FileText className="w-5 h-5 text-indigo-600" />
                                <h2 className="text-base font-semibold text-gray-900">Supported formats</h2>
                            </div>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>PDF</li>
                                <li>DOCX / DOC</li>
                                <li>PNG, JPG, JPEG, WEBP</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Globe className="w-5 h-5 text-indigo-600" />
                                <h2 className="text-base font-semibold text-gray-900">Available languages</h2>
                            </div>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>English, Spanish, German</li>
                                <li>French, Ukrainian</li>
                                <li>Japanese, Chinese</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center pb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                        >
                            Try it free →
                        </Link>
                        <p className="text-xs text-gray-500 mt-3">No sign-up required. Results in seconds.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

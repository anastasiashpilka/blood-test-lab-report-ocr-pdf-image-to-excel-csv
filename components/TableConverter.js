import { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Microscope, HelpCircle, ChevronDown, ChevronUp, Globe, Upload, Table, Zap, Download } from 'lucide-react';
import translations from '../translations';
import { useRouter } from 'next/router';
import { useLanguage } from '../contexts/LanguageContext';
import * as ga from '../lib/gtag';
import FileUploaderWidget from './FileUploaderWidget';
import HowItWorksSteps from './HowItWorksSteps';

const TableConverter = () => {
    const router = useRouter();
    const { lang: currentLang } = useLanguage();

    const faqSectionRef = useRef(null);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const [showWelcome, setShowWelcome] = useState(false);

    const faqItems = [
        { questionKey: "q1", answerKey: "a1" },
        { questionKey: "q2", answerKey: "a2" },
        { questionKey: "q3", answerKey: "a3" },
        { questionKey: "q4", answerKey: "a4" },
        { questionKey: "q5", answerKey: "a5" },
        { questionKey: "q6", answerKey: "a6" },
        { questionKey: "q7", answerKey: "a7" },
        { questionKey: "q8", answerKey: "a8" },
        { questionKey: "q9", answerKey: "a9" },
        { questionKey: "q10", answerKey: "a10" },
        { questionKey: "q11", answerKey: "a11" },
        { questionKey: "q12", answerKey: "a12" }
    ];

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
        ga.event({
            action: 'faq_toggle',
            category: 'FAQ Interaction',
            label: openFaqIndex === index ? `Close FAQ ${index + 1}` : `Open FAQ ${index + 1}`,
        });
    };

    const scrollToFaq = () => {
        faqSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        ga.event({
            action: 'scroll_to_faq',
            category: 'Navigation',
            label: 'FAQ Button Click',
        });
    };

    const openFaqItem = (index) => {
        setOpenFaqIndex(index);
        faqSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        ga.event({
            action: 'scroll_to_faq',
            category: 'Navigation',
            label: 'Privacy Note Learn More Click',
        });
    };

    useEffect(() => {
        if (router.query.welcome === '1') {
            setShowWelcome(true);
            const timer = setTimeout(() => {
                setShowWelcome(false);
                router.replace('/', undefined, { shallow: true });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [router.query.welcome]);

    return (
        <>
            <div className="min-h-screen bg-gray-50 relative">
                {showWelcome && (
                    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium">
                        Welcome! Your tests will now be saved when you&apos;re signed in.
                    </div>
                )}
                <div className="container mx-auto px-4 py-8">
                    <header className="text-center mb-8 sm:mb-12">
                        <Microscope className="w-12 h-12 mx-auto mb-4 text-indigo-800" aria-label="Blood Test Converter Icon" />
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-3">
                            {translations[currentLang].header.title || "Blood Test Table Converter"}
                        </h1>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-4 text-base sm:text-lg">
                            {translations[currentLang].header.description || "Easily convert your blood test results into structured, editable tables. Upload PDF, DOCX, or images for instant results."}
                        </p>
                        <div id="privacy" className="bg-indigo-50 border border-indigo-200 text-indigo-800 px-4 py-3 rounded-lg flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-6 max-w-3xl mx-auto text-sm">
                            <ShieldCheck className="w-5 h-5 flex-shrink-0" aria-label="Privacy Assurance Icon" />
                            <span className="font-medium" dangerouslySetInnerHTML={{ __html: translations[currentLang].header.privacyNote.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></span>
                            <button
                                onClick={() => openFaqItem(0)}
                                className="font-semibold underline underline-offset-2 hover:text-indigo-900 whitespace-nowrap"
                            >
                                {translations[currentLang].header.learnMore || translations.en.header.learnMore}
                            </button>
                        </div>
                    </header>

                    <button
                        onClick={scrollToFaq}
                        className="fixed bottom-5 right-5 bg-white text-indigo-600 p-3 rounded-full shadow-lg border border-gray-200 hover:border-indigo-300 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 z-30"
                        aria-label="Go to Frequently Asked Questions"
                        title="Frequently Asked Questions"
                    >
                        <HelpCircle className="w-6 h-6" aria-label="FAQ Icon" />
                    </button>

                    <div className="mb-12">
                        <FileUploaderWidget />
                    </div>

                    <HowItWorksSteps
                        title={translations[currentLang].howItWorks.title}
                        steps={[
                            { icon: Upload, title: translations[currentLang].howItWorks.step1.title, description: translations[currentLang].howItWorks.step1.description },
                            { icon: Microscope, title: translations[currentLang].howItWorks.step2.title, description: translations[currentLang].howItWorks.step2.description },
                            { icon: Table, title: translations[currentLang].howItWorks.step3.title, description: translations[currentLang].howItWorks.step3.description },
                        ]}
                    />

                    <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-12">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-8 text-center">
                            {translations[currentLang].whyChooseUs.title}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                { key: 'accuracySpeed', Icon: Zap },
                                { key: 'convenientExport', Icon: Download },
                                { key: 'freeOnline', Icon: Globe },
                            ].map(({ key, Icon }) => {
                                const text = translations[currentLang].whyChooseUs[key];
                                const colonIdx = text.indexOf(': ');
                                const title = colonIdx !== -1 ? text.substring(0, colonIdx) : text;
                                const desc = colonIdx !== -1 ? text.substring(colonIdx + 2) : '';
                                return (
                                    <div key={key} className="flex flex-col gap-3 p-5 rounded-xl bg-indigo-50 border border-indigo-100">
                                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm border border-indigo-100">
                                            <Icon className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-1 text-sm">{title}</p>
                                            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <section ref={faqSectionRef} className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-12">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
                            {translations[currentLang].faq.title}
                        </h2>
                        {faqItems.map((item, index) => (
                            <div key={index} className="mb-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-4 flex justify-between items-center text-base font-medium text-gray-800 focus:outline-none"
                                    aria-expanded={openFaqIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    {translations[currentLang].faq[item.questionKey]}
                                    <span className="text-indigo-500">
                                        {openFaqIndex === index ? <ChevronUp className="w-6 h-6" aria-label="Collapse FAQ Icon" /> : <ChevronDown className="w-6 h-6" aria-label="Expand FAQ Icon" />}
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${index}`}
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-screen opacity-100 p-4 pt-0' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: translations[currentLang].faq[item.answerKey].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                                </div>
                            </div>
                        ))}
                        <p className="text-center text-sm text-gray-600 mt-6" dangerouslySetInnerHTML={{ __html: translations[currentLang].faq.moreInfo }}></p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default TableConverter;

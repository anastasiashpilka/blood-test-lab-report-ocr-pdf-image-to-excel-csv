import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import translations from '../translations';
import {
    convertUnit,
    biomarkerUnitCategories,
    getUnitsForBiomarker,
} from '../lib/unitConversions';
import {ExternalLink, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqItems = [
    { questionKey: 'q1_question', answerKey: 'q1_answer' },
    { questionKey: 'q2_question', answerKey: 'q2_answer' },
    { questionKey: 'q3_question', answerKey: 'q3_answer' },
    { questionKey: 'q4_question', answerKey: 'q4_answer' },
    { questionKey: 'q5_question', answerKey: 'q5_answer' },
    { questionKey: 'q6_question', answerKey: 'q6_answer' },
    { questionKey: 'q7_question', answerKey: 'q7_answer' }, 
    { questionKey: 'q8_question', answerKey: 'q8_answer' }, 
    { questionKey: 'q9_question', answerKey: 'q9_answer' },
];

export async function getStaticProps({ locale }) {
    const t = translations[locale] || translations['en'];
    const allBiomarkers = Object.keys(biomarkerUnitCategories).sort();

    return {
        props: {
            translations: t,
            allBiomarkers,
        },
    };
}

const UnitConverter = ({ translations: serverTranslations, allBiomarkers }) => {
    const router = useRouter();
    const currentLang = router.locale || 'en';
    const t = serverTranslations;

    const [inputValue, setInputValue] = useState('');
    const [selectedBiomarker, setSelectedBiomarker] = useState('');
    const [sourceUnit, setSourceUnit] = useState('');
    const [targetUnit, setTargetUnit] = useState('');
    const [convertedResult, setConvertedResult] = useState(null);
    const [error, setError] = useState('');
    const faqSectionRef = useRef(null);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // Function to send GA4 events
    const trackEvent = (eventName, eventParams = {}) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName, eventParams);
        }
    };

    const toggleFaq = (index) => {
        const isOpen = openFaqIndex === index;
        setOpenFaqIndex(isOpen ? null : index);
        trackEvent('faq_toggle', {
            faq_question: t.unitConverter?.faq?.[faqItems[index].questionKey] || faqItems[index].questionKey,
            action: isOpen ? 'collapse' : 'expand',
            page_path: router.asPath,
        });
    };

    const scrollToFaq = () => {
        faqSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        trackEvent('scroll_to_faq', {
            page_path: router.asPath,
        });
    };

    const allPossibleUnitsForBiomarker = useMemo(() => {
        if (!selectedBiomarker) return [];
        return getUnitsForBiomarker(selectedBiomarker).sort();
    }, [selectedBiomarker]);

    const possibleTargetUnits = useMemo(() => {
        if (!selectedBiomarker || !sourceUnit) return allPossibleUnitsForBiomarker;
        let validTargetUnits = new Set([sourceUnit]);
        allPossibleUnitsForBiomarker.forEach(targetU => {
            if (targetU !== sourceUnit && convertUnit(selectedBiomarker, 1, sourceUnit, targetU) !== null) {
                validTargetUnits.add(targetU);
            }
        });
        return Array.from(validTargetUnits).sort();
    }, [selectedBiomarker, sourceUnit, allPossibleUnitsForBiomarker]);

    useEffect(() => {
        if (targetUnit && !possibleTargetUnits.includes(targetUnit)) setTargetUnit('');
        setConvertedResult(null);
        setError('');
    }, [sourceUnit, targetUnit, possibleTargetUnits]);

    useEffect(() => {
        setSourceUnit('');
        setTargetUnit('');
        setInputValue('');
        setConvertedResult(null);
        setError('');
    }, [selectedBiomarker]);

    const handleConvert = () => {
        setError('');
        setConvertedResult(null);

        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            setError(t.unitConverter?.error?.invalidValue || 'Please enter a valid number.');
            trackEvent('conversion_error', {
                error_type: 'invalid_value',
                input_value: inputValue,
                biomarker: selectedBiomarker,
                source_unit: sourceUnit,
                target_unit: targetUnit,
                page_path: router.asPath,
            });
            return;
        }
        if (value < 0) {
            setError(t.unitConverter?.error?.negativeValue || 'Value cannot be negative.');
            trackEvent('conversion_error', {
                error_type: 'negative_value',
                input_value: inputValue,
                biomarker: selectedBiomarker,
                source_unit: sourceUnit,
                target_unit: targetUnit,
                page_path: router.asPath,
            });
            return;
        }
        if (!selectedBiomarker) {
            setError(t.unitConverter?.error?.noBiomarkerSelected || 'Please select a biomarker.');
            trackEvent('conversion_error', {
                error_type: 'no_biomarker_selected',
                input_value: inputValue,
                page_path: router.asPath,
            });
            return;
        }
        if (!sourceUnit || !targetUnit) {
            setError(t.unitConverter?.error?.selectUnits || 'Please select source and target units.');
            trackEvent('conversion_error', {
                error_type: 'units_not_selected',
                biomarker: selectedBiomarker,
                source_unit: sourceUnit,
                target_unit: targetUnit,
                page_path: router.asPath,
            });
            return;
        }
        if (sourceUnit === targetUnit) {
            setConvertedResult(value);
            trackEvent('conversion_successful', {
                biomarker: selectedBiomarker,
                source_unit: sourceUnit,
                target_unit: targetUnit,
                input_value: value,
                converted_value: value,
                conversion_type: 'same_units',
                page_path: router.asPath,
            });
            return;
        }

        try {
            const result = convertUnit(selectedBiomarker, value, sourceUnit, targetUnit);
            if (result !== null) {
                setConvertedResult(result);
                trackEvent('conversion_successful', {
                    biomarker: selectedBiomarker,
                    source_unit: sourceUnit,
                    target_unit: targetUnit,
                    input_value: value,
                    converted_value: result,
                    page_path: router.asPath,
                });
            } else {
                setError(t.unitConverter?.error?.conversionNotPossible || 'Conversion not possible.');
                trackEvent('conversion_error', {
                    error_type: 'conversion_not_possible',
                    biomarker: selectedBiomarker,
                    source_unit: sourceUnit,
                    target_unit: targetUnit,
                    input_value: value,
                    page_path: router.asPath,
                });
            }
        } catch (e) {
            setError(t.unitConverter?.error?.conversionFailed || 'An error occurred during conversion.');
            trackEvent('conversion_error', {
                error_type: 'conversion_failed_exception',
                error_message: e.message,
                biomarker: selectedBiomarker,
                source_unit: sourceUnit,
                target_unit: targetUnit,
                input_value: value,
                page_path: router.asPath,
            });
        }
    };

    const handleReset = () => {
        setInputValue('');
        setSelectedBiomarker('');
        setSourceUnit('');
        setTargetUnit('');
        setConvertedResult(null);
        setError('');
        trackEvent('converter_reset', {
            page_path: router.asPath,
        });
    };

    const handleBiomarkerChange = (e) => {
        const biomarker = e.target.value;
        setSelectedBiomarker(biomarker);
        trackEvent('biomarker_selected', {
            biomarker_name: biomarker,
            page_path: router.asPath,
        });
    };

    const handleSourceUnitChange = (e) => {
        const unit = e.target.value;
        setSourceUnit(unit);
        trackEvent('source_unit_selected', {
            biomarker_name: selectedBiomarker,
            source_unit: unit,
            page_path: router.asPath,
        });
    };

    const handleTargetUnitChange = (e) => {
        const unit = e.target.value;
        setTargetUnit(unit);
        trackEvent('target_unit_selected', {
            biomarker_name: selectedBiomarker,
            target_unit: unit,
            page_path: router.asPath,
        });
    };

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        trackEvent('page_view', {
            page_title: t.unitConverter?.title || 'Unit Converter',
            page_location: window.location.href,
            page_path: router.asPath,
            language: currentLang,
        });
    }, [currentLang, router.asPath, t.unitConverter?.title]);


    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>
                    {selectedBiomarker
                        ? `${t.unitConverter?.title || 'Unit Converter'} - ${t.biomarkers?.[selectedBiomarker] || selectedBiomarker}`
                        : t.unitConverter?.title || 'Unit Converter'}
                </title>
                <meta
                    name="description"
                    content={t.unitConverter?.description || 'Convert biomarker units easily with our tool.'}
                />
                <meta name="keywords" content="unit converter, biomarker converter, medical tools" />
                <meta property="og:title" content={t.unitConverter?.title || 'Unit Converter'} />
                <meta
                    property="og:description"
                    content={t.unitConverter?.description || 'Convert biomarker units easily with our tool.'}
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={currentLang} />
                {Object.keys(translations).map((lang) => (
                    <link
                        key={lang}
                        rel="alternate"
                        hrefLang={lang}
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/unit-converter`}
                    />
                ))}

    <script type="application/ld+json">
        {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: t.unitConverter?.title || 'Unit Converter',
            description: t.unitConverter?.descriptionLong || 'Easily convert lab test results with our precise biomarker unit converter.',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/unit-converter`,
        })}
    </script>
            </Head>
            <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
                {t.unitConverter?.title || 'Unit Converter'}
            </h1>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
                <div className="mb-6">
                    <label htmlFor="biomarkerSelect" className="block text-gray-700 text-lg font-medium mb-2">
                        {t.unitConverter?.selectBiomarkerLabel || 'Select Biomarker'}
                    </label>
                    <select
                        id="biomarkerSelect"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                        value={selectedBiomarker}
                        onChange={handleBiomarkerChange} 
                    >
                        <option value="">{t.unitConverter?.selectPlaceholder || 'Select a biomarker'}</option>
                        {allBiomarkers.map((biomarker) => (
                            <option key={biomarker} value={biomarker}>
                                {t.biomarkers?.[biomarker] || biomarker}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="inputValue" className="block text-gray-700 text-lg font-medium mb-2">
                        {t.unitConverter?.inputValueLabel || 'Enter Value'}
                    </label>
                    <input
                        type="number"
                        id="inputValue"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                        placeholder={t.unitConverter?.inputValuePlaceholder || 'Enter a value'}
                        value={inputValue}
                        onChange={handleInputValueChange} 
                        min="0" 
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label htmlFor="sourceUnitSelect" className="block text-gray-700 text-lg font-medium mb-2">
                            {t.unitConverter?.sourceUnitLabel || 'Source Unit'}
                        </label>
                        <select
                            id="sourceUnitSelect"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                            value={sourceUnit}
                            onChange={handleSourceUnitChange}
                            disabled={!selectedBiomarker}
                        >
                            <option value="">{t.unitConverter?.selectUnitPlaceholder || 'Select a unit'}</option>
                            {allPossibleUnitsForBiomarker.map((unit) => (
                                <option key={unit} value={unit}>{t.units?.[unit] || unit}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="targetUnitSelect" className="block text-gray-700 text-lg font-medium mb-2">
                            {t.unitConverter?.targetUnitLabel || 'Target Unit'}
                        </label>
                        <select
                            id="targetUnitSelect"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                            value={targetUnit}
                            onChange={handleTargetUnitChange} 
                            disabled={!selectedBiomarker || !sourceUnit}
                        >
                            <option value="">{t.unitConverter?.selectUnitPlaceholder || 'Select a unit'}</option>
                            {possibleTargetUnits.map((unit) => (
                                <option key={unit} value={unit}>{t.units?.[unit] || unit}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="text-center mb-6 flex justify-center gap-4">
                    <button
                        onClick={handleConvert}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-xl flex items-center justify-center"
                    >
                        {t.unitConverter?.convertButton || 'Convert'}
                    </button>
                     <button
                        onClick={handleReset}
                       className={`
        font-bold py-3 px-12 rounded-lg transition-colors duration-200 text-xl border-2
        bg-indigo-100  border border-indigo-600 text-indigo-600
        flex items-center justify-center
        ${
            selectedBiomarker || inputValue || sourceUnit || targetUnit || convertedResult !== null
            ? ' hover:bg-indigo-600 hover:text-white'
            : ' text-indigo-600 hover:bg-indigo-600 hover:text-white cursor-not-allowed '
        }

    `}
    disabled={!(selectedBiomarker || inputValue || sourceUnit || targetUnit || convertedResult !== null)}
    aria-label={t.unitConverter.resetButton || "Clear all fields"}
>
    {t.unitConverter.resetButton || "Clear"}
</button>
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}
                {convertedResult !== null && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center text-xl font-semibold">
                        {t.unitConverter?.resultLabel || 'Result'}: {inputValue} {t.units?.[sourceUnit] || sourceUnit} = {convertedResult.toFixed(4)} {t.units?.[targetUnit] || targetUnit}
                    </div>
                )}
                {selectedBiomarker && (
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-200 rounded-lg bg-indigo-50/50 p-6 mb-4">
                        <p className="text-indigo-900 text-lg font-medium mb-4">
                            {t.unitConverter?.learnMoreAboutBiomarker || 'Want to learn more about this biomarker?'}
                        </p>
                        <Link href={`/biomarkers/${selectedBiomarker}`} passHref>
                            <button
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg inline-flex items-center"
                                onClick={() => trackEvent('view_biomarker_details', {
                                    biomarker_name: selectedBiomarker,
                                    page_path: router.asPath,
                                })}
                            >
                                {t.unitConverter?.viewBiomarkerDetails || 'View Biomarker Details'}
                                <ExternalLink className="ml-2 w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            <section
    id="disclaimer"
    className="mt-8 bg-indigo-50 border-l-4 border-indigo-400 text-indigo-800 p-4 rounded-lg shadow-md max-w-5xl mx-auto"
    aria-describedby="disclaimer-content"
>
    <h2 className="text-3xl font-bold text-center mb-4">
        {t.disclaimer?.title || 'Important Disclaimer'}
    </h2>
    <div id="disclaimer-content" className="text-sm font-mediumleading-relaxed">
         <p className="mb-3">
                        {t.disclaimer?.paragraph1 || 'This unit converter is provided for general informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.'}
                    </p>
                    <p>
                        {t.disclaimer?.paragraph2 || 'The conversions provided are based on standard scientific formulas. While we strive for accuracy, results should always be confirmed by a healthcare professional. We do not guarantee the accuracy or completeness of the information presented.'}
                    </p>
    </div>
</section>

            <section id="about-converter" className="mt-12 max-w-5xl mx-auto text-center text-gray-700 bg-white p-8 rounded-lg shadow-md border border-gray-100" aria-labelledby="about-converter-title">
    <h2 id="about-converter-title" className="text-3xl font-bold text-indigo-800 mb-6">
        {t.unitConverter?.aboutToolTitle || 'Discover Our Biomarker Unit Converter'}
    </h2>
    <p className="text-lg leading-relaxed">
        {t.unitConverter?.descriptionLong || 'Easily convert lab test results with our precise biomarker unit converter. Designed for medical professionals and individuals, this tool simplifies switching between units like mg/dL and mmol/L, ensuring accurate and reliable results for better health insights.'}
    </p>
</section>

            <section className="mt-12 mb-20">
                <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">
                    {t.unitConverter?.howItWorks?.title || 'How It Works'}
                </h2>
                <div className="max-w-5xl mx-auto px-1">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_max-content_1fr_max-content_1fr] gap-8">
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center relative transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                            onClick={() => trackEvent('how_it_works_step_click', { step: 1, description: t.unitConverter?.howItWorks?.step1?.title || 'Step 1', page_path: router.asPath })}
                        >
                            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4 text-3xl font-bold border-2 border-indigo-600">
                                1
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t.unitConverter?.howItWorks?.step1?.title || 'Step 1'}</h4>
                            <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t.unitConverter?.howItWorks?.step1?.description || 'Select a biomarker from the dropdown.' }}></p>
                            <div className="absolute md:hidden bottom-[-1.75rem] left-1/2 transform -translate-x-1/2 z-10 text-indigo-400 text-4xl leading-none">&darr;</div>
                        </div>
                        <div className="hidden md:flex items-center justify-center text-indigo-400 text-4xl leading-none">
                            &rarr;
                        </div>
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center relative transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                            onClick={() => trackEvent('how_it_works_step_click', { step: 2, description: t.unitConverter?.howItWorks?.step2?.title || 'Step 2', page_path: router.asPath })}
                        >
                            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4 text-3xl font-bold border-2 border-indigo-600">
                                2
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t.unitConverter?.howItWorks?.step2?.title || 'Step 2'}</h4>
                            <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t.unitConverter?.howItWorks?.step2?.description || 'Enter a value and select units.' }}></p>
                            <div className="absolute md:hidden bottom-[-1.75rem] left-1/2 transform -translate-x-1/2 z-10 text-indigo-400 text-4xl leading-none">&darr;</div>
                        </div>
                        <div className="hidden md:flex items-center justify-center text-indigo-400 text-4xl leading-none">
                            &rarr;
                        </div>
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                            onClick={() => trackEvent('how_it_works_step_click', { step: 3, description: t.unitConverter?.howItWorks?.step3?.title || 'Step 3', page_path: router.asPath })}
                        >
                            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4 text-3xl font-bold border-2 border-indigo-600">
                                3
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">{t.unitConverter?.howItWorks?.step3?.title || 'Step 3'}</h4>
                            <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t.unitConverter?.howItWorks?.step3?.description || 'Click convert to see the result.' }}></p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={faqSectionRef} className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-12">
                <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
                    {t.unitConverter?.faq?.title || 'Frequently Asked Questions'}
                </h2>
                {faqItems.map((item, index) => (
                    <div key={index} className="mb-4 bg-indigo-50 rounded-lg border border-indigo-200">
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-4 flex justify-between items-center text-xl font-semibold text-indigo-700 focus:outline-none"
                            aria-expanded={openFaqIndex === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            {t.unitConverter?.faq?.[item.questionKey] || item.questionKey}
                            <span className="text-indigo-500">
                                {openFaqIndex === index ? (
                                    <ChevronUp className="w-6 h-6" aria-label={`Collapse FAQ: ${t.unitConverter?.faq?.[item.questionKey] || item.questionKey}`} />
                                ) : (
                                    <ChevronDown className="w-6 h-6" aria-label={`Expand FAQ: ${t.unitConverter?.faq?.[item.questionKey] || item.questionKey}`} />
                                )}
                            </span>
                        </button>
                        <div
                            id={`faq-answer-${index}`}
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-screen opacity-100 p-4 pt-0' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: (t.unitConverter?.faq?.[item.answerKey] || item.answerKey).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                        </div>
                    </div>
                ))}
            </section>

            <button
                onClick={scrollToFaq}
                className="fixed bottom-4 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 z-30"
                aria-label="Go to Frequently Asked Questions"
                title="Frequently Asked Questions"
            >
                <HelpCircle className="w-8 h-8" aria-label="FAQ Icon" />
            </button>
        </div>
    );
};

export default UnitConverter;
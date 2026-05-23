import { useState, useRef, useCallback, useEffect } from 'react';
import { CheckCircle, ShieldCheck, Copy, FileCheck, Microscope, X, AlertTriangle, Download, HelpCircle, ChevronDown, ChevronUp, Globe, Upload, Table, ArrowRight, ArrowDown, Zap, FileText, BookmarkPlus, BookmarkCheck, Loader } from 'lucide-react';
import translations from '../translations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import * as ga from '../lib/gtag';
import { useAuth } from '../contexts/AuthContext';
import { saveTest } from '../firebase/tests';
import { findBiomarkerId } from '../lib/biomarkerLookup';

const TableConverter = () => {
    const [tableData, setTableData] = useState({ headers: [], rows: [] });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const fileInputRef = useRef(null);
    const [fileDropped, setFileDropped] = useState(false);
    const [imageDescription, setImageDescription] = useState('');
    const [selectedFileName, setSelectedFileName] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [retryTime, setRetryTime] = useState(null);
    const router = useRouter();
    const { lang: currentLang } = useLanguage();

    const faqSectionRef = useRef(null);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const { currentUser } = useAuth();

    const [showWelcome, setShowWelcome] = useState(false);
    const [conversionSuccess, setConversionSuccess] = useState(null);

    // Interpretation state
    const [interpretation, setInterpretation] = useState(null);
    const [interpretationLoading, setInterpretationLoading] = useState(false);

    // Save state
    const [showSaveForm, setShowSaveForm] = useState(false);
    const [saveLabel, setSaveLabel] = useState('');
    const [saved, setSaved] = useState(false);
    const [saveError, setSaveError] = useState('');
    const [showSignInPrompt, setShowSignInPrompt] = useState(false);

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

    useEffect(() => {
        if (!tableData.headers.length || !tableData.rows.length) {
            setInterpretation(null);
            return;
        }
        setInterpretation(null);
        setInterpretationLoading(true);
        setSaved(false);
        setShowSaveForm(false);
        setSaveLabel('');

        fetch('/api/interpret-results', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ headers: tableData.headers, rows: tableData.rows }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.summary) setInterpretation(data);
            })
            .catch(() => {})
            .finally(() => setInterpretationLoading(false));
    }, [tableData]);

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

    const tableDataToHTML = (data) => {
        if (!data || !data.headers || !data.rows || data.headers.length === 0) {
            return ''; 
        }

        let htmlTable = '<table style="border-collapse: collapse; width: 100%;">';
        htmlTable += '<thead style="background-color: #4f46e5; color: white;"><tr>';

        data.headers.forEach(header => {
            htmlTable += `<th style="border: 1px solid #e5e7eb; padding: 8px; text-align: left; font-size: 14px; font-weight: medium; border-right: 1px solid #e5e7eb;">${header}</th>`;
        });
        htmlTable += '</tr></thead><tbody>';

        data.rows.forEach(row => {
            htmlTable += '<tr style="border-bottom: 1px solid #e5e7eb;">';
            row.forEach(cell => {
                htmlTable += `<td style="border: 1px solid #e5e7eb; padding: 8px; text-align: left; font-size: 14px; color: #4b5563; border-right: 1px solid #e5e7eb; word-wrap: break-word; white-space: normal;">${cell}</td>`;
            });
            htmlTable += '</tr>';
        });

        htmlTable += '</tbody></table>';
        return htmlTable;
    };

    const handleCopyTable = async () => {
        try {
            if (tableData && tableData.headers && tableData.rows && tableData.headers.length > 0 && tableData.rows.length > 0) {
                const htmlString = tableDataToHTML(tableData);

                const blob = new Blob([htmlString], { type: 'text/html' });
                const data = new ClipboardItem({ 'text/html': blob });

                await navigator.clipboard.write([data]);
                setCopied(true);
            } else {
                console.error('Cannot copy: tableData is empty or not in the correct format.');
                setCopied(false);
            }
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy table data as HTML:', err);
            setCopied(false);
            setErrorMessage(translations[currentLang].tableDisplay.copyError);
            setIsErrorModalOpen(true);
        }
    };

    const handleDownloadTable = () => {
    if (!tableData || !tableData.headers || !tableData.rows || tableData.headers.length === 0 || tableData.rows.length === 0) {
        console.error('No data to download:', tableData);
        setErrorMessage(translations[currentLang]?.tableDisplay?.downloadError || 'No data available for download');
        setIsErrorModalOpen(true);
        return;
    }

    try {
        const headers = tableData.headers.map(header => `"${header.replace(/"/g, '""')}"`).join(',');
        const rows = tableData.rows.map(row =>
            row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
        ).join('\n');

        const csvContent = `${headers}\n${rows}`;
        const bom = '\uFEFF';
        const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'blood_test_results.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url); 

        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 2000);
    } catch (error) {
        console.error('Error downloading table:', error);
        setErrorMessage(translations[currentLang]?.tableDisplay?.downloadError || 'Failed to download table');
        setIsErrorModalOpen(true);
    }
};

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        setTableData({ headers: [], rows: [] });
        setImageDescription('');
        setLoading(true);
        setFileDropped(false);
        setSelectedFileName(null);
        setIsDragging(false);
        setIsErrorModalOpen(false);
        setRetryTime(null);
        setConversionSuccess(null);

        const file = fileInputRef.current.files[0];

        if (!file) {
            setLoading(false);
            setErrorMessage(translations[currentLang].error.selectAnotherFile);
            setIsErrorModalOpen(true);
            return;
        }

        setSelectedFileName(file.name);
        setFileDropped(true);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/convert-to-table', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (response.status === 429) {
                    setErrorMessage(errorData.error);
                    setRetryTime(errorData.retryAfter);
                    setIsErrorModalOpen(true);
                } else if (errorData.error === "No medical analysis data found in the document.") {
                    setErrorMessage(translations[currentLang].error.noMedicalData);
                    setIsErrorModalOpen(true);
                } else {
                    setErrorMessage(errorData.error || translations[currentLang].error.networkError(`File processing error: ${response.status}`));
                    setIsErrorModalOpen(true);
                }
                return;
            }

            const data = await response.json();

            if (data.type === "image" && data.description) {
                setImageDescription(data.description);
                setTableData({ headers: [], rows: [] });
            } else if (data.headers && data.rows) {
                setTableData(data);
                setImageDescription('');
            } else {
                setErrorMessage(translations[currentLang].error.unexpectedData);
                setTableData({ headers: [], rows: [] });
                setImageDescription('');
            }

        } catch (error) {
            console.error("Fetch error:", error);
            setErrorMessage(translations[currentLang].error.networkError(error.message));
            setIsErrorModalOpen(true);
        } finally {
            setLoading(false);
        }
    };

const handleFileUpload = async (file) => {
    setLoading(true);
    setErrorMessage('');
    setSelectedFileName(file.name);
    setImageDescription('');

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/api/convert-to-table', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error data:', errorData);
            throw new Error(errorData.error || 'Server error');
        }

        const data = await response.json();
        setTableData(data);
        setLoading(false);
        if (data.rows && data.rows.length > 0) {
            setConversionSuccess(data.rows.length);
            setTimeout(() => setConversionSuccess(null), 4000);
        }

        ga.event({
            action: 'file_conversion',
            category: 'Conversion',
            label: 'Success',
            value: file.size
        });

    } catch (error) {
        console.error('Fetch error:', error);
        setErrorMessage(error.message);
        setLoading(false);
        ga.event({
            action: 'file_conversion',
            category: 'Conversion',
            label: `Failure - ${error.message.substring(0, 50)}`
        });
        ga.event({
            action: 'error_displayed',
            category: 'UI Error',
            label: `File conversion error: ${error.message.substring(0, 50)}`
        });
    }
};

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        setFileDropped(true);
        ga.event({
            action: 'file_drag',
            category: 'File Upload',
            label: 'Drop'
        });
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    }, [handleFileUpload]);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        ga.event({
            action: 'file_drag',
            category: 'File Upload',
            label: 'Drag Enter'
        });
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        ga.event({
            action: 'file_drag',
            category: 'File Upload',
            label: 'Drag Leave'
        });
    }, []);

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleFileChange = useCallback((event) => {
        if (event.target.files && event.target.files[0]) {
            handleFileUpload(event.target.files[0]);
        }
        ga.event({
            action: 'file_select_button_click',
            category: 'File Upload',
            label: 'File Selected via Input'
        });
    }, [handleFileUpload]);

    const handleCellChange = useCallback((rowIndex, header, newValue) => {
        setTableData(prevData => {
            const newRows = prevData.rows.map((row, index) => {
                if (index === rowIndex) {
                    const updatedRow = [...row];
                    const headerIndex = prevData.headers.indexOf(header);
                    if (headerIndex !== -1) {
                        updatedRow[headerIndex] = newValue;
                    }
                    return updatedRow;
                }
                return row;
            });
            return { ...prevData, rows: newRows };
        });
        ga.event({
            action: 'table_cell_edit',
            category: 'Table Interaction',
            label: `Edit Cell in Row ${rowIndex + 1}, Column ${header}`,
        });
    }, []);

    const getDefaultLabel = () => {
        const now = new Date();
        return `Blood test — ${now.toLocaleString('en', { month: 'long' })} ${now.getFullYear()}`;
    };

    const handleSaveClick = () => {
        if (!currentUser) {
            setShowSignInPrompt(true);
            return;
        }
        setSaveLabel(getDefaultLabel());
        setShowSaveForm(true);
        setShowSignInPrompt(false);
    };

    const handleConfirmSave = async () => {
        setSaveError('');
        try {
            await saveTest(currentUser.uid, {
                label: saveLabel || getDefaultLabel(),
                headers: tableData.headers,
                rows: tableData.rows,
                interpretationSummary: interpretation
                    ? JSON.stringify(interpretation)
                    : '',
            });
            setSaved(true);
            setShowSaveForm(false);
        } catch (err) {
            setSaveError(`Failed to save: ${err?.message || 'Please try again.'}`);
        }
    };

    const closeErrorModal = useCallback(() => {
        setIsErrorModalOpen(false);
        setErrorMessage('');
        setRetryTime(null);
        ga.event({
            action: 'error_modal_interaction',
            category: 'UI Error',
            label: 'Modal Closed'
        });
    }, []);

    const formatCellContent = (cellContent) => {
        if (typeof cellContent === 'string') {
            return cellContent.replace(/\n/g, '<br />');
        }
        return cellContent;
    };

    const isOutOfRange = (result, range) => {
        if (!range || !result) return false;

        try {
            const resultValue = parseFloat(String(result).replace(',', '.'));
            if (isNaN(resultValue)) return false;

            const rangeParts = String(range).split('-').map(part => part.trim());
            if (rangeParts.length === 2) {
                const minRange = parseFloat(rangeParts[0].replace(',', '.'));
                const maxRange = parseFloat(rangeParts[1].replace(',', '.'));
                if (!isNaN(minRange) && !isNaN(maxRange)) {
                    return resultValue < minRange || resultValue > maxRange;
                }
            } else {
                const parsedRange = parseFloat(String(range).replace(/[<>= ]/g, '').replace(',', '.'));
                const operatorMatch = String(range).match(/[<>=]{1,2}/);

                if (!isNaN(parsedRange) && operatorMatch) {
                    const operator = operatorMatch[0];
                    switch (operator) {
                        case '<': return resultValue >= parsedRange;
                        case '>': return resultValue <= parsedRange;
                        case '=': return resultValue !== parsedRange;
                        case '<=': return resultValue > parsedRange;
                        case '>=': return resultValue < parsedRange;
                        default: return false;
                    }
                }
            }
        } catch (error) {
            console.error("Error parsing values for range check:", error);
            return false;
        }
        return false;
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 relative">
                {showWelcome && (
                    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium">
                        Welcome! Your tests will now be saved when you&apos;re signed in.
                    </div>
                )}
                {conversionSuccess && (
                    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium flex items-center gap-2 animate-fade-in">
                        <CheckCircle className="w-4 h-4" />
                        Found {conversionSuccess} biomarker{conversionSuccess !== 1 ? 's' : ''} — results ready
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
                        <div id="privacy" className="bg-indigo-50 border border-indigo-200 text-indigo-800 p-3 rounded-lg flex items-start space-x-3 mt-6 max-w-5xl mx-auto">
                            <ShieldCheck className="w-6 h-6 flex-shrink-0 mt-0.5" aria-label="Privacy Assurance Icon" />
                            <div>
                                <p className="text-sm font-medium" dangerouslySetInnerHTML={{ __html: translations[currentLang].header.privacyNote.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                                <p className="text-xs mt-1" dangerouslySetInnerHTML={{ __html: translations[currentLang].header.googleCloudVision }}></p>
                            </div>
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

                    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 relative z-10 mb-12">
                        <div
                            className={`flex flex-col items-center justify-center border-2 rounded-lg p-8 mb-4
                                ${loading ? 'opacity-50 pointer-events-none' : ''}
                                ${isDragging ? 'border-indigo-500 bg-indigo-50 border-dashed shadow-inner transition-transform duration-200' : 'border-indigo-300 bg-white hover:border-indigo-400 transition-colors'}`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                        >
                            {selectedFileName && fileDropped && (
  <p className="mb-2 font-bold text-gray-900 text-center">
    {translations[currentLang].fileUpload.fileAdded.replace('{fileName}', selectedFileName)}
  </p>
)}
                            {!selectedFileName && !fileDropped && !isDragging && (
                                <p className="text-sm text-slate-600 mb-4 text-center">
                                    {translations[currentLang].fileUpload.dragOrClick}
                                </p>
                            )}
                            {isDragging && (
                                <p className="mb-4 font-bold text-indigo-900 text-center animate-pulse">
                                    {translations[currentLang].fileUpload.releaseToUpload}
                                </p>
                            )}
                            <label className="relative cursor-pointer mb-4">
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".docx, .doc, image/png, image/jpeg, image/jpg, image/webp, .pdf"
                                    ref={fileInputRef}
                                    onChange={handleSubmit}
                                />
                                <span className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                    <FileCheck className="w-5 h-5 mr-2" aria-label="File Upload Icon" />
                                    {translations[currentLang].fileUpload.selectFileButton}
                                </span>
                            </label>
                            <p className="text-sm text-slate-600 text-center">{translations[currentLang].fileUpload.supportedFormats}</p>
                        </div>

                        {loading && (
                        <div className="flex flex-col items-center justify-center fixed inset-0 z-40 bg-white bg-opacity-80 gap-4">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
                            <p className="text-sm text-indigo-700 font-medium">Processing your document…</p>
                        </div>
                    )}

                        {isErrorModalOpen && (
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                                <div className="bg-white p-6 rounded-xl shadow-xl relative max-w-sm w-full mx-4">
                                    <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors" onClick={closeErrorModal} aria-label="Close">
                                        <X className="w-5 h-5" />
                                    </button>
                                    <div className="flex justify-center mb-4">
                                        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                                            <AlertTriangle className="w-8 h-8 text-red-500" aria-label="Error Icon" />
                                        </div>
                                    </div>
                                    <div className="text-center mb-4">
                                        <div className="text-lg font-semibold text-gray-900 mb-1">{translations[currentLang].error.title}</div>
                                        <div className="text-sm text-gray-600">{errorMessage}</div>
                                        {retryTime && (
                                            <p className="mt-2 text-sm text-gray-500">
                                                {translations[currentLang].error.retryTime(retryTime)}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center mt-5">
                                        <button
                                            onClick={() => { fileInputRef.current.click(); closeErrorModal(); }}
                                            className="inline-flex items-center justify-center px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full text-sm font-medium"
                                        >
                                            {translations[currentLang].error.selectAnotherFile}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {errorMessage && !isErrorModalOpen && <div className="error-message text-red-500 text-center mb-4">{errorMessage}</div>}

                        <div className="overflow-hidden mb-4">
                            {tableData.headers.length > 0 && (
                                <div className="overflow-x-auto border border-gray-200 rounded-lg mb-4">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-indigo-600 text-white">
                                            <tr>
                                                {tableData.headers.map((header, index) => (
                                                    <th key={index} className="px-4 py-3 text-left text-sm font-medium border-r border-indigo-500">{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {tableData.rows.map((row, rowIndex) => (
                                                <tr key={rowIndex} className="hover:bg-blue-50 transition-colors">
                                                    {row.map((cell, cellIndex) => {
                                                        const header = tableData.headers[cellIndex];
                                                        const resultValue = (header === "Результат" || header === "Result") ? cell : null;
                                                        const referenceRange = (header === "Референтні інтервали" || header === "Reference Range") ? cell : null;
                                                        const highlight = isOutOfRange(resultValue, referenceRange);

                                                        return (
                                                            <td
                                                                key={cellIndex}
                                                                className={`px-4 py-3 text-sm text-gray-900 border-r border-gray-200 cursor-text transition-all hover:ring-1 hover:ring-inset hover:ring-indigo-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-400 focus-within:bg-indigo-50 ${highlight ? 'bg-red-100 font-semibold hover:bg-red-50' : 'hover:bg-indigo-50'}`}
                                                                contentEditable
                                                                suppressContentEditableWarning
                                                                title="Click to edit"
                                                                onBlur={(e) => handleCellChange(rowIndex, tableData.headers[cellIndex], e.target.innerText)}
                                                            >
                                                                <div dangerouslySetInnerHTML={{ __html: formatCellContent(cell) }} />
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {/* AI Interpretation Panel */}
                            {(interpretationLoading || interpretation) && (
                                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-4">
                                    <h3 className="text-base font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                                        <Microscope className="w-4 h-4" />
                                        What do your results mean?
                                    </h3>
                                    {interpretationLoading ? (
                                        <div className="flex items-center space-x-2 text-indigo-600">
                                            <Loader className="w-5 h-5 animate-spin" />
                                            <span className="text-sm">Analyzing your results…</span>
                                        </div>
                                    ) : interpretation ? (
                                        <>
                                            <p className="text-gray-700 mb-3 text-sm leading-relaxed">{interpretation.summary}</p>
                                            {interpretation.flaggedValues && interpretation.flaggedValues.length > 0 && (
                                                <ul className="space-y-2 mb-3">
                                                    {interpretation.flaggedValues.map((fv, i) => (
                                                        <li key={i} className="flex items-start space-x-2 text-sm">
                                                            <span className="mt-0.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                                                            <span>
                                                                {(() => {
                                                                    const id = findBiomarkerId(fv.name);
                                                                    return id ? (
                                                                        <Link
                                                                            href={`/biomarkers/${id}`}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="font-semibold text-indigo-700 hover:underline"
                                                                        >
                                                                            {fv.name}
                                                                        </Link>
                                                                    ) : (
                                                                        <strong className="text-gray-800">{fv.name}</strong>
                                                                    );
                                                                })()}
                                                                {fv.value ? ` (${fv.value})` : ''} — {fv.note}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            <p className="text-xs text-gray-500 italic">
                                                This is informational only. Always consult a healthcare professional.
                                            </p>
                                        </>
                                    ) : null}
                                </div>
                            )}
                            {imageDescription && (
                                <div className="p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg">
                                    <h3 className="font-semibold mb-2">{translations[currentLang].tableDisplay.imageProcessingResult}</h3>
                                    <p>{imageDescription}</p>
                                    <p className="mt-2 text-sm">{translations[currentLang].tableDisplay.imageProcessingNote}</p>
                                </div>
                            )}

                            {tableData.headers.length > 0 && (
                                <>
                                    <div className="flex justify-end gap-2 mb-4">
                                        <button
                                            onClick={handleCopyTable}
                                            className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${copied ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                        >
                                            {copied ? (
                                                <CheckCircle className="w-5 h-5 mr-2" aria-label="Copy Success Icon" />
                                            ) : (
                                                <Copy className="w-5 h-5 mr-2" aria-label="Copy Table Icon" />
                                            )}
                                            {copied ? translations[currentLang].tableDisplay.copySuccess : translations[currentLang].tableDisplay.copyTable}
                                        </button>
                                        <button
                                            onClick={handleDownloadTable}
                                            className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${downloaded ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                        >
                                            {downloaded ? (
                                                <CheckCircle className="w-5 h-5 mr-2" aria-label="Download Success Icon" />
                                            ) : (
                                                <Download className="w-5 h-5 mr-2" aria-label="Download Table Icon" />
                                            )}
                                            {downloaded ? translations[currentLang].tableDisplay.downloadSuccess : translations[currentLang].tableDisplay.downloadTable}
                                        </button>
                                        {!saved ? (
                                            <button
                                                onClick={handleSaveClick}
                                                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                            >
                                                <BookmarkPlus className="w-5 h-5 mr-2" />
                                                Save this test
                                            </button>
                                        ) : (
                                            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                                                <BookmarkCheck className="w-5 h-5 mr-2" />
                                                Saved!
                                            </span>
                                        )}
                                    </div>
                                    {showSignInPrompt && (
                                        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 px-4">
                                            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative">
                                                <button
                                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                                    onClick={() => setShowSignInPrompt(false)}
                                                    aria-label="Close"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Save &amp; track your health</h3>
                                                <p className="text-sm text-gray-600 mb-6">
                                                    Sign in or create a free account to save this test and compare your results over time.
                                                </p>
                                                <div className="flex flex-col gap-3">
                                                    <Link
                                                        href="/auth/signup"
                                                        className="w-full text-center px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
                                                    >
                                                        Create Account
                                                    </Link>
                                                    <Link
                                                        href="/auth/login"
                                                        className="w-full text-center px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
                                                    >
                                                        Sign In
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {showSaveForm && (
                                        <div className="mt-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Name this test
                                            </label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={saveLabel}
                                                    onChange={(e) => setSaveLabel(e.target.value)}
                                                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder={getDefaultLabel()}
                                                    onKeyDown={(e) => e.key === 'Enter' && handleConfirmSave()}
                                                />
                                                <button
                                                    onClick={handleConfirmSave}
                                                    className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={() => setShowSaveForm(false)}
                                                    className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                            {saveError && <p className="mt-2 text-red-600 text-xs">{saveError}</p>}
                                        </div>
                                    )}
                                    {!interpretationLoading && interpretation?.flaggedValues?.length > 0 && (
                                        <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <div>
                                                <p className="text-sm font-medium text-indigo-900">Want to understand your results?</p>
                                                <p className="text-xs text-indigo-600 mt-0.5">Our biomarker reference database explains what each value means.</p>
                                            </div>
                                            <Link
                                                href="/biomarkers"
                                                className="flex-shrink-0 px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors font-medium whitespace-nowrap"
                                            >
                                                Explore biomarkers →
                                            </Link>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                    </div>

                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-indigo-700 text-center mb-8">
                            {translations[currentLang].howItWorks.title}
                        </h3>
                        <div className="max-w-5xl mx-auto px-1">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_max-content_1fr_max-content_1fr] gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center relative transition-shadow duration-300 hover:shadow-md">
                                    <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <Upload className="w-8 h-8" aria-label="Upload File Icon" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{translations[currentLang].howItWorks.step1.title}</h4>
                                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: translations[currentLang].howItWorks.step1.description }}></p>
                                    <ArrowDown className="absolute md:hidden w-5.5 h-5.5 text-indigo-400 bottom-[-1.75rem] left-1/2 transform -translate-x-1/2 z-10" aria-label="Next Step Arrow" />
                                </div>
                                <div className="hidden md:flex items-center justify-center">
                                    <ArrowRight className="w-10 h-10 text-indigo-400" aria-label="Next Step Arrow" />
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center relative transition-shadow duration-300 hover:shadow-md">
                                    <div className="bg-indigo-100 text-indigo-600 rounded-fuull h-16 w-16 flex items-center justify-center mb-4">
                                        <Microscope className="w-8 h-8" aria-label="Conversion Process Icon" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{translations[currentLang].howItWorks.step2.title}</h4>
                                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: translations[currentLang].howItWorks.step2.description }}></p>
                                    <ArrowDown className="absolute md:hidden w-5.5 h-5.5 text-indigo-400 bottom-[-1.75rem] left-1/2 transform -translate-x-1/2 z-10" aria-label="Next Step Arrow" />
                                </div>
                                <div className="hidden md:flex items-center justify-center">
                                    <ArrowRight className="w-10 h-10 text-indigo-400" aria-label="Next Step Arrow" />
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center transition-shadow duration-300 hover:shadow-md">
                                    <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <Table className="w-8 h-8" aria-label="Table Result Icon" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{translations[currentLang].howItWorks.step3.title}</h4>
                                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: translations[currentLang].howItWorks.step3.description }}></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-12">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-8 text-center">
                            {translations[currentLang].whyChooseUs.title}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-5">
                            {[
                                { key: 'accuracySpeed', Icon: Zap },
                                { key: 'formatSupport', Icon: FileText },
                                { key: 'convenientExport', Icon: Download },
                                { key: 'dataSecurity', Icon: ShieldCheck },
                                { key: 'freeOnline', Icon: Globe },
                            ].map(({ key, Icon }) => {
                                const text = translations[currentLang].whyChooseUs[key];
                                const colonIdx = text.indexOf(': ');
                                const title = colonIdx !== -1 ? text.substring(0, colonIdx) : text;
                                const desc = colonIdx !== -1 ? text.substring(colonIdx + 2) : '';
                                return (
                                    <div key={key} className="flex flex-col gap-3 p-5 rounded-xl bg-indigo-50 border border-indigo-100 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
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
                                    className="w-full text-left p-4 flex justify-between items-center text-base font-medium text-indigo-700 focus:outline-none"
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
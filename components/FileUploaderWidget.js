import { useState, useRef, useCallback, useEffect, Fragment } from 'react';
import { CheckCircle, Copy, FileCheck, X, AlertTriangle, Download, BookmarkPlus, BookmarkCheck, Loader, Microscope, FileSpreadsheet } from 'lucide-react';
import translations from '../translations';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import * as ga from '../lib/gtag';
import { useAuth } from '../contexts/AuthContext';
import { saveTest } from '../firebase/tests';
import { findBiomarkerId } from '../lib/biomarkerLookup';
import { getAnomalyStatus, isOutOfRangeStatus, findResultColumnIndex, findRangeColumnIndex } from '../lib/anomalyDetection';
import AnomalyBadge, { ANOMALY_STYLES } from './AnomalyBadge';

// The core "upload a report, get a table back" experience, extracted from
// TableConverter so it can be embedded on landing pages without dragging in
// the homepage's header/how-it-works/why-choose-us/FAQ sections (which would
// otherwise duplicate an H1 and repeat identical boilerplate copy across
// every programmatic SEO page).
const FileUploaderWidget = () => {
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
    const { lang: currentLang } = useLanguage();
    const { currentUser } = useAuth();

    const [conversionSuccess, setConversionSuccess] = useState(null);

    const [interpretation, setInterpretation] = useState(null);
    const [interpretationLoading, setInterpretationLoading] = useState(false);

    const [showSaveForm, setShowSaveForm] = useState(false);
    const [saveLabel, setSaveLabel] = useState('');
    const [saved, setSaved] = useState(false);
    const [saveError, setSaveError] = useState('');
    const [showSignInPrompt, setShowSignInPrompt] = useState(false);
    const [exportingDashboard, setExportingDashboard] = useState(false);

    useEffect(() => {
        if (!tableData.headers.length || !tableData.rows.length) {
            setInterpretation(null);
            return;
        }
        let ignore = false;
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
                // Guards against a stale response from a superseded upload
                // resolving after a newer one and overwriting current state.
                if (!ignore && data.summary) setInterpretation(data);
            })
            .catch(() => {})
            .finally(() => {
                if (!ignore) setInterpretationLoading(false);
            });

        return () => {
            ignore = true;
        };
    }, [tableData]);

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
            const bom = '﻿';
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

    const handleExportDashboard = async () => {
        setExportingDashboard(true);
        try {
            // Single-test export: no history yet, so the Trends sheet is skipped
            // (needs 2+ dated tests) but the styled Overview/History/Raw Data
            // sheets are still generated from this one upload.
            const { exportHealthDashboard } = await import('../lib/exportHealthDashboard');
            await exportHealthDashboard(
                [{ label: getDefaultLabel(), createdAt: new Date(), headers: tableData.headers, rows: tableData.rows }],
                'health-dashboard.xlsx'
            );
        } catch (error) {
            console.error('Dashboard export failed:', error);
            setErrorMessage('Failed to generate the dashboard. Please try again.');
            setIsErrorModalOpen(true);
        } finally {
            setExportingDashboard(false);
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
        if (typeof cellContent !== 'string') return cellContent;
        const lines = cellContent.split('\n');
        return lines.map((line, i) => (
            <Fragment key={i}>
                {line}
                {i < lines.length - 1 && <br />}
            </Fragment>
        ));
    };

    const resultColumnIndex = findResultColumnIndex(tableData.headers);
    const rangeColumnIndex = findRangeColumnIndex(tableData.headers);

    return (
        <div className="relative">
            {conversionSuccess && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium flex items-center gap-2 animate-fade-in">
                    <CheckCircle className="w-4 h-4" />
                    Found {conversionSuccess} biomarker{conversionSuccess !== 1 ? 's' : ''} — results ready
                </div>
            )}
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 relative z-10">
                <div
                    className={`flex flex-col items-center justify-center border-2 rounded-lg p-8 mb-4
                        ${loading ? 'opacity-50 pointer-events-none' : ''}
                        ${isDragging ? 'border-indigo-500 bg-indigo-50 border-dashed shadow-inner transition-transform duration-200' : 'border-indigo-300 bg-white hover:border-indigo-400 transition-colors'}`}
                    onDrop={handleDrop}
                    onDragEnter={handleDragEnter}
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
                                    {tableData.rows.map((row, rowIndex) => {
                                        // Computed once per row (not per cell) so the Result and
                                        // Reference Range columns are compared against each other,
                                        // not each against a null from the other's own cell.
                                        const status = getAnomalyStatus(row[resultColumnIndex], row[rangeColumnIndex]);
                                        const highlight = isOutOfRangeStatus(status);
                                        // Soft status tint (green/amber/red), reused from AnomalyBadge's
                                        // palette — restrained to the Result/Range cells only, not the
                                        // whole row, to keep a busy table from looking noisy.
                                        const cellBg = ANOMALY_STYLES[status]?.cellBg || '';

                                        return (
                                            <tr key={rowIndex} className="hover:bg-blue-50 transition-colors">
                                                {row.map((cell, cellIndex) => {
                                                    const isStatusCell = cellIndex === resultColumnIndex || cellIndex === rangeColumnIndex;
                                                    return (
                                                        <td
                                                            key={cellIndex}
                                                            className={`px-4 py-3 text-sm text-gray-900 border-r border-gray-200 cursor-text transition-all hover:ring-1 hover:ring-inset hover:ring-indigo-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-400 focus-within:bg-indigo-50 ${isStatusCell ? cellBg : ''} ${highlight ? 'font-semibold' : ''} ${cellBg ? '' : 'hover:bg-indigo-50'}`}
                                                            contentEditable
                                                            suppressContentEditableWarning
                                                            title="Click to edit"
                                                            onBlur={(e) => handleCellChange(rowIndex, tableData.headers[cellIndex], e.target.innerText)}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <div>{formatCellContent(cell)}</div>
                                                                {cellIndex === resultColumnIndex && status !== 'unknown' && (
                                                                    <AnomalyBadge status={status} lang={currentLang} />
                                                                )}
                                                            </div>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
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
                                <button
                                    onClick={handleExportDashboard}
                                    disabled={exportingDashboard}
                                    className="inline-flex items-center px-4 py-2 rounded-lg transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                    title="Download a formatted spreadsheet with a chart (sign in and save tests over time to unlock trend charts)"
                                >
                                    {exportingDashboard ? (
                                        <Loader className="w-5 h-5 mr-2 animate-spin" aria-label="Generating" />
                                    ) : (
                                        <FileSpreadsheet className="w-5 h-5 mr-2" aria-label="Export to Health Dashboard Icon" />
                                    )}
                                    {exportingDashboard ? 'Generating…' : 'Export to Health Dashboard'}
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
        </div>
    );
};

export default FileUploaderWidget;

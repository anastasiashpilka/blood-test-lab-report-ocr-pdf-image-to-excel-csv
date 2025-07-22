import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import translations from '../translations';
import {
    convertUnit,
    biomarkerUnitCategories,
    molecularWeights,
    getUnitsForBiomarker,
    unitCategories,
    conversionFactors
} from '../lib/unitConversions';
import { ArrowRight } from 'lucide-react';

const UnitConverter = () => {
    const router = useRouter();
    const currentLang = router.locale || 'en';
    const t = translations[currentLang];

    const [inputValue, setInputValue] = useState('');
    const [selectedBiomarker, setSelectedBiomarker] = useState('');
    const [sourceUnit, setSourceUnit] = useState('');
    const [targetUnit, setTargetUnit] = useState('');
    const [convertedResult, setConvertedResult] = useState(null);
    const [error, setError] = useState('');
    const allBiomarkers = useMemo(() => Object.keys(biomarkerUnitCategories).sort(), []);

    const allPossibleUnitsForBiomarker = useMemo(() => {
        if (!selectedBiomarker) {
            return [];
        }
        return getUnitsForBiomarker(selectedBiomarker).sort();
    }, [selectedBiomarker]);

   
    const possibleTargetUnits = useMemo(() => {
        if (!selectedBiomarker || !sourceUnit) {
            return allPossibleUnitsForBiomarker;
        }

        let validTargetUnits = new Set();
        validTargetUnits.add(sourceUnit); 

        allPossibleUnitsForBiomarker.forEach(targetU => {
            if (targetU === sourceUnit) {
                return;
            }
            const testResult = convertUnit(selectedBiomarker, 1, sourceUnit, targetU);
            if (testResult !== null) {
                validTargetUnits.add(targetU);
            }
        });

        return Array.from(validTargetUnits).sort();
    }, [selectedBiomarker, sourceUnit, allPossibleUnitsForBiomarker]);

    useEffect(() => {
        if (targetUnit && !possibleTargetUnits.includes(targetUnit)) {
            setTargetUnit('');
        }
        setConvertedResult(null);
        setError('');
    }, [sourceUnit, targetUnit, possibleTargetUnits]);

    useEffect(() => {
        setSourceUnit('');
        setTargetUnit('');
        setConvertedResult(null);
        setError('');
    }, [selectedBiomarker]);

    const handleConvert = () => {
        setError('');
        setConvertedResult(null);

        const value = parseFloat(inputValue);

        if (isNaN(value)) {
            setError(t.unitConverter.error.invalidValue);
            return;
        }
        if (!selectedBiomarker) {
            setError(t.unitConverter.error.noBiomarkerSelected);
            return;
        }
        if (!sourceUnit || !targetUnit) {
            setError(t.unitConverter.error.selectUnits);
            return;
        }
        if (sourceUnit === targetUnit) {
            setConvertedResult(value);
            return;
        }

        const result = convertUnit(selectedBiomarker, value, sourceUnit, targetUnit);

        if (result !== null) {
            setConvertedResult(result);
        } else {
            setError(t.unitConverter.error.conversionNotPossible);
        }
    };

    return (
        
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
                {t.unitConverter.title}
            </h1>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                {/* Biomarker Selection */}
                <div className="mb-6">
                    <label htmlFor="biomarkerSelect" className="block text-gray-700 text-lg font-medium mb-2">
                        {t.unitConverter.selectBiomarkerLabel}
                    </label>
                    <select
                        id="biomarkerSelect"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                        value={selectedBiomarker}
                        onChange={(e) => setSelectedBiomarker(e.target.value)}
                    >
                        <option value="">{t.unitConverter.selectPlaceholder}</option>
                        {allBiomarkers.map((biomarker) => (
                            <option key={biomarker} value={biomarker}>
                                {t.biomarkers[biomarker] || biomarker}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Input Value */}
                <div className="mb-6">
                    <label htmlFor="inputValue" className="block text-gray-700 text-lg font-medium mb-2">
                        {t.unitConverter.inputValueLabel}
                    </label>
                    <input
                        type="number"
                        id="inputValue"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                        placeholder={t.unitConverter.inputValuePlaceholder || "Enter a value"} // Додано placeholder
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>

                {/* Unit Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label htmlFor="sourceUnitSelect" className="block text-gray-700 text-lg font-medium mb-2">
                            {t.unitConverter.sourceUnitLabel}
                        </label>
                        <select
                            id="sourceUnitSelect"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                            value={sourceUnit}
                            onChange={(e) => setSourceUnit(e.target.value)}
                            disabled={!selectedBiomarker}
                        >
                            <option value="">{t.unitConverter.selectUnitPlaceholder}</option>
                            {allPossibleUnitsForBiomarker.map((unit) => (
                                <option key={unit} value={unit}>{t.units[unit] || unit}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="targetUnitSelect" className="block text-gray-700 text-lg font-medium mb-2">
                            {t.unitConverter.targetUnitLabel}
                        </label>
                        <select
                            id="targetUnitSelect"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                            value={targetUnit}
                            onChange={(e) => setTargetUnit(e.target.value)}
                            disabled={!selectedBiomarker || !sourceUnit}
                        >
                            <option value="">{t.unitConverter.selectUnitPlaceholder}</option>
                            {/* This dropdown is filtered to show ONLY convertible units from the selected sourceUnit */}
                            {possibleTargetUnits.map((unit) => (
                                <option key={unit} value={unit}>{t.units[unit] || unit}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Convert Button */}
                <div className="text-center mb-6">
                    <button
                        onClick={handleConvert}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 text-xl flex items-center justify-center mx-auto"
                    >
                        {t.unitConverter.convertButton} <ArrowRight className="ml-2 w-6 h-6" />
                    </button>
                </div>

                {/* Result and Error Display */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6">
                        {error}
                    </div>
                )}

                {convertedResult !== null && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md text-center text-xl font-semibold">
                        {t.unitConverter.resultLabel}: {inputValue} {t.units[sourceUnit] || sourceUnit} = {convertedResult.toFixed(4)} {t.units[targetUnit] || targetUnit}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UnitConverter;
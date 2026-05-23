import { findBiomarkerId } from '../../lib/biomarkerLookup';

describe('findBiomarkerId', () => {
    test('returns id for exact name match (case-insensitive)', () => {
        expect(findBiomarkerId('Glucose')).toBe('Glucose');
        expect(findBiomarkerId('glucose')).toBe('Glucose');
        expect(findBiomarkerId('GLUCOSE')).toBe('Glucose');
    });

    test('returns id for exact match with parenthetical', () => {
        expect(findBiomarkerId('Hemoglobin (HGB)')).toBe('Hemoglobin (HGB)');
    });

    test('returns id via partial match when AI shortens the name', () => {
        // AI might say "Hemoglobin" — database has "Hemoglobin (HGB)"
        const id = findBiomarkerId('Hemoglobin');
        expect(id).not.toBeNull();
    });

    test('returns null for unknown biomarker', () => {
        expect(findBiomarkerId('XYZ Unknown Biomarker 9999')).toBeNull();
    });

    test('returns null for very short strings to avoid false positives', () => {
        expect(findBiomarkerId('abc')).toBeNull();
    });

    test('returns null for empty string', () => {
        expect(findBiomarkerId('')).toBeNull();
    });
});

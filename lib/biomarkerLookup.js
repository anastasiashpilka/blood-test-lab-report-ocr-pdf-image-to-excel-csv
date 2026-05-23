import biomarkersData from './biomarkers-data';

const biomarkerLookup = new Map(
    biomarkersData.map(b => [b.name.toLowerCase().trim(), b.id])
);

export function findBiomarkerId(name) {
    if (!name || typeof name !== 'string') return null;
    const normalized = name.toLowerCase().trim();
    if (!normalized) return null;
    if (biomarkerLookup.has(normalized)) return biomarkerLookup.get(normalized);
    if (normalized.length < 4) return null;
    for (const [key, id] of biomarkerLookup) {
        if (key.includes(normalized) || normalized.includes(key)) return id;
    }
    return null;
}

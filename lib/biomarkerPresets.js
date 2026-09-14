/**
 * Quick-filter biomarker panels for the trend dashboard's selector.
 * Reuses the fuzzy name matching already built for the biomarker-info pages
 * (findBiomarkerId) to map a user's own result names — arbitrary lab-report
 * text — onto lib/biomarkers-data.js's category ("type") field, rather than
 * re-implementing that matching heuristic here.
 *
 * This module (and its biomarkers-data.js import) is meant to be loaded via
 * dynamic import() at the point of use — see BiomarkerSelector.js — not
 * imported at the top of any client component. Import lib/biomarkerPresetDefinitions.js
 * instead for just the preset labels.
 */

import biomarkersData from './biomarkers-data';
import { findBiomarkerId } from './biomarkerLookup';
import { PRESETS } from './biomarkerPresetDefinitions';

export { PRESETS };

const typeById = new Map(biomarkersData.map((b) => [b.id, b.type]));

/**
 * @param {string} presetKey
 * @param {string[]} availableBiomarkerNames biomarker names present in the user's own test history
 * @param {number} [maxCount] the selector allows at most this many biomarkers at once
 * @returns {string[]} the subset of availableBiomarkerNames that belong to the preset, capped at maxCount
 */
export function getPresetBiomarkers(presetKey, availableBiomarkerNames, maxCount = 5) {
  const preset = PRESETS.find((p) => p.key === presetKey);
  if (!preset) return [];

  return availableBiomarkerNames
    .filter((name) => {
      const id = findBiomarkerId(name);
      const type = id && typeById.get(id);
      return Boolean(type) && preset.categories.includes(type);
    })
    .slice(0, maxCount);
}

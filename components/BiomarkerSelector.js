import { useState, useRef, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { PRESETS } from '../lib/biomarkerPresetDefinitions';

const MAX_SELECTED = 5;

/**
 * Searchable multi-select combobox (max 5 biomarkers) plus quick-filter
 * panel presets, scoped to whichever biomarkers actually appear in the
 * user's own test history.
 * @param {{availableBiomarkers: string[], selected: string[], onChange: (next: string[]) => void}} props
 */
export default function BiomarkerSelector({ availableBiomarkers, selected, onChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const atLimit = selected.length >= MAX_SELECTED;
  const options = availableBiomarkers.filter(
    (name) => !selected.includes(name) && name.toLowerCase().includes(query.toLowerCase())
  );

  function addBiomarker(name) {
    if (atLimit || selected.includes(name)) return;
    onChange([...selected, name]);
    setQuery('');
  }

  function removeBiomarker(name) {
    onChange(selected.filter((n) => n !== name));
  }

  async function applyPreset(presetKey) {
    // lib/biomarkerPresets.js pulls in the full biomarkers-data.js dataset
    // to do the matching — load it on demand instead of shipping it in
    // this component's initial bundle (same pattern as the .xlsx exports
    // lazy-loading exceljs / xlsx-populate).
    const { getPresetBiomarkers } = await import('../lib/biomarkerPresets');
    onChange(getPresetBiomarkers(presetKey, availableBiomarkers, MAX_SELECTED));
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.key}
            type="button"
            onClick={() => applyPreset(preset.key)}
            className="px-3 py-1 text-sm rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div ref={containerRef} className="relative">
        <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-2 py-1.5 focus-within:ring-2 focus-within:ring-indigo-500">
          {selected.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 text-sm px-2 py-0.5"
            >
              {name}
              <button
                type="button"
                aria-label={`Remove ${name}`}
                onClick={() => removeBiomarker(name)}
                className="hover:text-indigo-900"
              >
                <X className="w-3 h-3" aria-hidden="true" />
              </button>
            </span>
          ))}
          <div className="flex items-center gap-1 flex-1 min-w-[8rem]">
            <Search className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <input
              role="combobox"
              aria-expanded={open}
              aria-controls="biomarker-selector-listbox"
              type="text"
              value={query}
              onFocus={() => setOpen(true)}
              onClick={() => setOpen(true)}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              placeholder={atLimit ? `Up to ${MAX_SELECTED} biomarkers` : 'Search biomarkers…'}
              disabled={atLimit}
              className="flex-1 min-w-0 outline-none text-sm py-1 disabled:cursor-not-allowed disabled:bg-transparent"
            />
          </div>
        </div>

        {open && !atLimit && (
          <ul
            id="biomarker-selector-listbox"
            role="listbox"
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            {options.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-400">No matching biomarkers</li>
            )}
            {options.map((name) => (
              <li key={name} role="option" aria-selected="false">
                <button
                  type="button"
                  onClick={() => addBiomarker(name)}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-indigo-50"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

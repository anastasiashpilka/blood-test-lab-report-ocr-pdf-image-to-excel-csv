import { createContext, useContext, useState, useEffect } from 'react';

const VALID = ['en', 'es', 'de', 'fr', 'uk', 'ja', 'zh'];
const KEY = 'btc_lang';

const LangCtx = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children, defaultLang = 'en' }) {
    const [lang, setLangState] = useState(defaultLang);

    useEffect(() => {
        const saved = localStorage.getItem(KEY);
        if (saved && VALID.includes(saved)) setLangState(saved);
    }, []);

    function setLang(l) {
        if (!VALID.includes(l)) return;
        setLangState(l);
        localStorage.setItem(KEY, l);
    }

    return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export const useLanguage = () => useContext(LangCtx);

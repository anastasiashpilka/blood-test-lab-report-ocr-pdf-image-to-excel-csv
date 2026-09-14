import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import translations from '../translations';
import { Globe, ScanHeart, ChevronDown, ChevronUp, Menu, X, User } from 'lucide-react';
import Head from 'next/head';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '../lib/gtag';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from '../firebase/auth';
import { useLanguage } from '../contexts/LanguageContext';

const Layout = ({ children, title }) => {
    const router = useRouter();
    const { lang: currentLang, setLang } = useLanguage();
    const t = translations[currentLang] || translations['en'];

    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const langMenuRef = useRef(null);
    const mobileLangMenuRef = useRef(null);
    const userMenuRef = useRef(null);

    const { currentUser } = useAuth();

    const handleSignOut = async () => {
      await signOut();
      router.push('/');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const insideDesktopMenu = langMenuRef.current && langMenuRef.current.contains(event.target);
            const insideMobileMenu = mobileLangMenuRef.current && mobileLangMenuRef.current.contains(event.target);
            if (!insideDesktopMenu && !insideMobileMenu) {
                setIsLangMenuOpen(false);
            }
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (newLocale) => {
        setLang(newLocale);
        setIsLangMenuOpen(false);
    };

    const availableLocales = ['en', 'es', 'de', 'fr', 'uk', 'ja', 'zh'];
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
            <Head>
                <title>{title || t.header.defaultTitle || 'BloodTestConverter'}</title>
                <meta name="description" content={t.header.defaultDescription || 'Medical insights and converters'} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {GA_MEASUREMENT_ID && (
                <>
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                    />
                    <Script
                        id="gtag-init"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_MEASUREMENT_ID}', {
                                    page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </>
            )}
            <header className="bg-white shadow-sm p-4 sticky top-0 z-50 print:hidden">
                <nav className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <ScanHeart className="w-8 h-8 text-indigo-700" aria-label="Flask icon for Blood Test Converter" />
                        <div className="font-sans">
                            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent">
                                BloodTestConverter
                            </span>
                        </div>
                    </Link>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="text-gray-600 hover:text-indigo-600 focus:outline-none"
                            aria-label="Open menu"
                        >
                            <Menu className="w-8 h-8" />
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link href="/" className={`text-lg font-medium hover:text-indigo-600 transition-colors ${router.pathname === '/' ? 'text-indigo-700' : 'text-gray-600'}`}>
                            {t.nav.bloodTestConverter}
                        </Link>
                        <Link href="/unit-converter" className={`text-lg font-medium hover:text-indigo-600 transition-colors ${router.pathname === '/unit-converter' ? 'text-indigo-700' : 'text-gray-600'}`}>
                            {t.nav.unitConverter}
                        </Link>
                        <Link href="/biomarkers" className={`text-lg font-medium hover:text-indigo-600 transition-colors ${router.pathname === '/biomarkers' ? 'text-indigo-700' : 'text-gray-600'}`}>
                            {t.nav.biomarkers}
                        </Link>
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center space-x-2 text-lg font-medium text-gray-600 hover:text-indigo-600 focus:outline-none"
                            >
                                <Globe className="w-5 h-5" aria-label="Language Selector Icon" />
                                <span>{t.nav[`lang_${currentLang}`]}</span>
                                {isLangMenuOpen ? <ChevronUp className="w-4 h-4" aria-label="Collapse Language Menu Icon" /> : <ChevronDown className="w-4 h-4" aria-label="Expand Language Menu Icon" />}
                            </button>
                            {isLangMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
                                    {availableLocales.map((locale) => (
                                        <button
                                            key={locale}
                                            onClick={() => changeLanguage(locale)}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        >
                                            {t.nav[`lang_${locale}`]}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        {currentUser ? (
                          <div className="relative" ref={userMenuRef}>
                            <button
                              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                              className="flex items-center justify-center w-9 h-9 bg-indigo-100 hover:bg-indigo-200 rounded-full transition-colors focus:outline-none"
                              aria-label="Account menu"
                            >
                              <User className="w-5 h-5 text-indigo-700" />
                            </button>
                            {isUserMenuOpen && (
                              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-10">
                                <Link
                                  href="/my-tests"
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                                  onClick={() => setIsUserMenuOpen(false)}
                                >
                                  {t.nav.myTests}
                                </Link>
                                <div className="border-t border-gray-100 my-1" />
                                <button
                                  onClick={() => { handleSignOut(); setIsUserMenuOpen(false); }}
                                  className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                                >
                                  {t.nav.signOut}
                                </button>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3">
                            <Link
                              href="/auth/login"
                              className="text-lg font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                            >
                              {t.nav.signIn}
                            </Link>
                            <Link
                              href="/auth/signup"
                              className="px-4 py-2 border border-indigo-300 text-indigo-700 rounded-lg text-lg font-medium hover:bg-indigo-50 transition-colors"
                            >
                              {t.nav.signUp}
                            </Link>
                          </div>
                        )}
                    </div>
                </nav>
            </header>

            {/* Mobile drawer backdrop */}
            <div
                className={`md:hidden fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Mobile drawer */}
            <div className={`md:hidden fixed right-0 top-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center p-5 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">{t.nav.menu}</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex flex-col p-5 space-y-1">
                    <Link href="/" className="text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg px-3 py-2.5 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        {t.nav.bloodTestConverter}
                    </Link>
                    <Link href="/unit-converter" className="text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg px-3 py-2.5 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        {t.nav.unitConverter}
                    </Link>
                    <Link href="/biomarkers" className="text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg px-3 py-2.5 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        {t.nav.biomarkers}
                    </Link>
                    <div className="pt-2 border-t border-gray-100 mt-2" ref={mobileLangMenuRef}>
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex items-center justify-between w-full text-base font-medium text-gray-600 hover:text-indigo-600 rounded-lg px-3 py-2.5 transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <Globe className="w-5 h-5" />
                                {t.nav[`lang_${currentLang}`]}
                            </span>
                            {isLangMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {isLangMenuOpen && (
                            <div className="mt-1 ml-3 space-y-0.5">
                                {availableLocales.map((locale) => (
                                    <button
                                        key={locale}
                                        onClick={() => { changeLanguage(locale); setIsMobileMenuOpen(false); }}
                                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
                                    >
                                        {t.nav[`lang_${locale}`]}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="pt-2 border-t border-gray-100 mt-2">
                        {currentUser ? (
                            <>
                                <Link href="/my-tests" className="text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg px-3 py-2.5 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>
                                    {t.nav.myTests}
                                </Link>
                                <button
                                    onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }}
                                    className="w-full text-left text-base font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg px-3 py-2.5 transition-colors"
                                >
                                    {t.nav.signOut}
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col gap-2 mt-1">
                                <Link href="/auth/login" className="text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg px-3 py-2.5 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                    {t.nav.signIn}
                                </Link>
                                <Link href="/auth/signup" className="mx-3 text-center py-2.5 border border-indigo-300 text-indigo-700 rounded-lg text-base font-medium hover:bg-indigo-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                    {t.nav.signUp}
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-indigo-950 text-white py-10 mt-12 print:hidden">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-3">
                                <ScanHeart className="w-6 h-6 text-indigo-300" />
                                <span className="text-lg font-bold text-white">BloodTestConverter</span>
                            </div>
                            <p className="text-indigo-200 text-sm leading-relaxed">{t.footerSection.tagline}</p>
                            <p className="text-indigo-300 text-xs mt-2">{t.footerSection.privacy}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">{t.footerSection.toolsHeading}</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-indigo-200 hover:text-white text-sm transition-colors">{t.footerSection.bloodTestConverter}</Link></li>
                                <li><Link href="/unit-converter" className="text-indigo-200 hover:text-white text-sm transition-colors">{t.footerSection.unitConverter}</Link></li>
                                <li><Link href="/biomarkers" className="text-indigo-200 hover:text-white text-sm transition-colors">{t.footerSection.biomarkerHub}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">{t.footerSection.infoHeading}</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-indigo-200 hover:text-white text-sm transition-colors">{t.footerSection.about}</Link></li>
                                <li><Link href="/privacy-policy" className="text-indigo-200 hover:text-white text-sm transition-colors">{t.footerSection.privacyData}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-indigo-800 pt-6 text-center">
                        <p className="text-indigo-300 text-xs" dangerouslySetInnerHTML={{ __html: t.footer.copyright.replace('{year}', currentYear) }} />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
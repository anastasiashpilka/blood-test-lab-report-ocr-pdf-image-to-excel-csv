import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import translations from '../translations';
import { Globe, ScanHeart, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import Head from 'next/head';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '../lib/gtag';

const Layout = ({ children, title }) => {
    const router = useRouter();
    const currentLang = router.locale || 'en';
    const t = translations[currentLang];

    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const langMenuRef = useRef(null);
    const mobileMenuButtonRef = useRef(null);

    const changeLanguage = (newLocale) => {
        router.push(router.asPath, router.asPath, { locale: newLocale });
        setIsLangMenuOpen(false);
    };

     useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setIsLangMenuOpen(false);
            }

            if (isMobileMenuOpen) {
                const clickedOutsideMobileMenu = (
                    !mobileMenuButtonRef.current ||
                    !mobileMenuButtonRef.current.contains(event.target)
                ) && (
                    !document.querySelector('.mobile-menu') ||
                    !document.querySelector('.mobile-menu').contains(event.target)
                );

                if (clickedOutsideMobileMenu) {
                    setIsMobileMenuOpen(false);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const availableLocales = ['en', 'es', 'de', 'fr', 'uk', 'ja', 'zh'];
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
            <Head>
                <title>{title || t.header.defaultTitle || 'BloodTestConverter'}</title>
                <meta name="description" content={t.header.defaultDescription || 'Medical insights and converters'} />
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
            </Head>
            <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <ScanHeart
                            className="w-8 h-8 text-blue-700"
                            aria-label="Flask icon for Blood Test Converter"
                        />
                        <div className="font-sans">
                            <span className="text-2xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Blood</span>
                                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">Test</span>
                                <span className="bg-gradient-to-r from-blue-800 to-blue-950 bg-clip-text text-transparent">Converter</span>
                            </span>
                        </div>
                    </Link>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-indigo-600 focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
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
                    </div>
                </nav>
                {isMobileMenuOpen && (
                    <div className="md:hidden mobile-menu fixed inset-0 bg-white bg-opacity-95 z-40 p-4 flex flex-col space-y-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="self-end text-gray-600 hover:text-indigo-600 focus:outline-none"
                            aria-label="Close mobile menu"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <Link href="/" className="text-lg font-medium text-gray-600 hover:text-indigo-700" onClick={() => setIsMobileMenuOpen(false)}>
                            {t.nav.bloodTestConverter}
                        </Link>
                        <Link href="/unit-converter" className="text-lg font-medium text-gray-600 hover:text-indigo-700" onClick={() => setIsMobileMenuOpen(false)}>
                            {t.nav.unitConverter}
                        </Link>
                        <Link href="/biomarkers" className="text-lg font-medium text-gray-600 hover:text-indigo-700" onClick={() => setIsMobileMenuOpen(false)}>
                            {t.nav.biomarkers}
                        </Link>
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center space-x-2 text-lg font-medium text-gray-600 hover:text-indigo-600 focus:outline-none w-full justify-between"
                            >
                                <span className="flex items-center">
                                    <Globe className="w-5 h-5 mr-2" />
                                    {t.nav[`lang_${currentLang}`]}
                                </span>
                                {isLangMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                            {isLangMenuOpen && (
                                <div className="mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg py-1">
                                    {availableLocales.map((locale) => (
                                        <button
                                            key={locale}
                                            onClick={() => {
                                                changeLanguage(locale);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        >
                                            {t.nav[`lang_${locale}`]}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-8 mt-12">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p dangerouslySetInnerHTML={{ __html: t.footer.copyright.replace('{year}', currentYear) }} />
                </div>
            </footer>
        </div>
    );
};

export default Layout;
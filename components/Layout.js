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

const Layout = ({ children, title }) => {
    const router = useRouter();
    const currentLang = router.locale || 'en';
    const t = translations[currentLang];

    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const langMenuRef = useRef(null);
    const userMenuRef = useRef(null);
    const mobileMenuButtonRef = useRef(null);
    const [isClient, setIsClient] = useState(false);

    const { currentUser } = useAuth();

    const handleSignOut = async () => {
      await signOut();
      router.push('/');
    };

    useEffect(() => {
        setIsClient(true);
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setIsLangMenuOpen(false);
            }
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
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
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    const changeLanguage = (newLocale) => {
        router.push(router.asPath, router.asPath, { locale: newLocale });
        setIsLangMenuOpen(false);
    };

    const availableLocales = ['en', 'es', 'de', 'fr', 'uk', 'ja', 'zh'];
    const currentYear = new Date().getFullYear();

    if (!isClient) return null;

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
            <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
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
                              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
                            >
                              {t.nav.signUp}
                            </Link>
                          </div>
                        )}
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
                                <div className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1">
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
                        {currentUser ? (
                          <>
                            <Link
                              href="/my-tests"
                              className="text-lg font-medium text-gray-600 hover:text-indigo-700"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.nav.myTests}
                            </Link>
                            <button
                              onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }}
                              className="text-lg font-medium text-gray-600 hover:text-indigo-700 text-left"
                            >
                              {t.nav.signOut}
                            </button>
                          </>
                        ) : (
                          <>
                            <Link
                              href="/auth/login"
                              className="text-lg font-medium text-gray-600 hover:text-indigo-700"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.nav.signIn}
                            </Link>
                            <Link
                              href="/auth/signup"
                              className="inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-base font-medium hover:bg-indigo-700 transition-colors text-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.nav.signUp}
                            </Link>
                          </>
                        )}
                    </div>
                )}
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-indigo-950 text-white py-8 mt-12">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p dangerouslySetInnerHTML={{ __html: t.footer.copyright.replace('{year}', currentYear) }} />
                </div>
            </footer>
        </div>
    );
};

export default Layout;
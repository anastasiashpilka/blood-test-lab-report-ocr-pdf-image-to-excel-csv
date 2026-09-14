import Head from 'next/head';
import Link from 'next/link';
import { ShieldCheck, Lock, Database, Cookie, UserCheck, Mail, Globe, AlertTriangle } from 'lucide-react';

const BASE_URL = 'https://www.onlinebloodtestconverter.com';
const LAST_UPDATED = 'August 30, 2026';
const CONTACT_EMAIL = 'privacy@onlinebloodtestconverter.com';

const Section = ({ icon: Icon, title, children }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
            {Icon && <Icon className="w-5 h-5 text-indigo-600 flex-shrink-0" />}
            <h2 className="text-xl font-bold text-indigo-900">{title}</h2>
        </div>
        <div className="text-gray-700 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
);

export default function PrivacyPolicyPage() {
    const title = 'Privacy Policy — Online Blood Test Converter';
    const description =
        'Learn how BloodTestConverter collects, uses, and protects your data, including what happens to uploaded test files and saved results.';
    const canonicalUrl = `${BASE_URL}/privacy-policy`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={`${BASE_URL}/favicon-96x96.png`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Head>
            <div className="bg-gray-50 min-h-screen py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-indigo-700" />
                        <h1 className="text-4xl font-extrabold text-indigo-900 mb-3">Privacy Policy</h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            This Privacy Policy explains what information BloodTestConverter collects, how it is used, and the choices you have.
                        </p>
                        <p className="text-sm text-gray-500 mt-3">Last updated: {LAST_UPDATED}</p>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6 flex items-start gap-4">
                        <Lock className="w-6 h-6 text-indigo-700 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold text-indigo-900 mb-1">The short version</p>
                            <p className="text-sm text-indigo-800 leading-relaxed">
                                Files you upload to convert are processed in memory and never saved to our servers. You do not need an account to use the converter. If you create an account, results you choose to save are stored securely and tied only to your account — you can delete them at any time.
                            </p>
                        </div>
                    </div>

                    <Section icon={Database} title="1. Information We Collect">
                        <p><strong>Uploaded files.</strong> When you upload a blood test PDF, image, or document to convert, the file is sent to Google&apos;s Gemini AI to extract and interpret the data. We do not save the file itself to our servers — it is held in memory only for the duration of processing and then discarded.</p>
                        <p><strong>Account information.</strong> If you create an account, we (via Firebase Authentication) collect the email address and password you provide, or — if you sign in with Google — the name, email address, and profile information Google shares with us for that purpose.</p>
                        <p><strong>Saved test results.</strong> If you are signed in and choose to save converted results to &quot;My Tests,&quot; the extracted table data, labels, and any AI-generated summary are stored in our database (Firebase Firestore), associated with your account.</p>
                        <p><strong>Usage and technical data.</strong> We automatically collect limited technical information such as your IP address, browser type, device type, and pages visited, via Google Analytics and Vercel Speed Insights. Your IP address may also be used briefly to enforce rate limits that prevent abuse of the conversion tool.</p>
                    </Section>

                    <Section icon={UserCheck} title="2. How We Use Your Information">
                        <ul className="list-disc list-inside space-y-2">
                            <li>To convert uploaded files into structured tables and generate AI explanations of results.</li>
                            <li>To create and secure your account, and let you sign in.</li>
                            <li>To store and display test results you choose to save, and let you track, compare, or export them.</li>
                            <li>To operate, maintain, and improve the site, including diagnosing technical issues.</li>
                            <li>To understand aggregate usage patterns through analytics.</li>
                            <li>To detect and prevent abuse, fraud, or excessive automated use.</li>
                        </ul>
                        <p>We do not sell your personal information, and we do not use the content of your uploaded files for advertising or for training our own AI models.</p>
                    </Section>

                    <Section icon={Globe} title="3. Third-Party Service Providers">
                        <p>We rely on the following third-party services to operate BloodTestConverter. Each processes data under its own privacy policy and terms:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Google Gemini AI</strong> (Google) — receives the content of uploaded files to extract and interpret biomarker data. Subject to Google&apos;s privacy policy.</li>
                            <li><strong>Firebase</strong> (Google) — provides account authentication and stores saved test results in Firestore.</li>
                            <li><strong>Google Analytics</strong> — collects anonymized/aggregated usage statistics using cookies.</li>
                            <li><strong>Vercel</strong> — hosts the site and provides performance monitoring (Speed Insights).</li>
                            <li><strong>Upstash</strong> — provides short-term, IP-based rate limiting to prevent abuse of the conversion API.</li>
                        </ul>
                    </Section>

                    <Section icon={Cookie} title="4. Cookies and Local Storage">
                        <p>We use cookies and browser storage for a small number of purposes: keeping you signed in (Firebase Authentication), remembering your language preference, and measuring site usage (Google Analytics). You can control or block cookies through your browser settings, though this may affect sign-in and some site functionality.</p>
                    </Section>

                    <Section icon={Lock} title="5. Data Retention">
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Uploaded files</strong> are not retained — they are discarded immediately after conversion.</li>
                            <li><strong>Account information</strong> is retained for as long as your account exists.</li>
                            <li><strong>Saved test results</strong> are retained until you delete them individually or delete your account.</li>
                            <li><strong>Analytics and technical data</strong> are retained according to the standard retention periods of Google Analytics and Vercel.</li>
                        </ul>
                    </Section>

                    <Section icon={ShieldCheck} title="6. Data Security">
                        <p>Data is transmitted over encrypted (HTTPS) connections. Saved test results are stored in Firebase and protected by access rules that restrict each account&apos;s data to that account only. Uploaded files are validated before processing and are never written to persistent storage. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>
                    </Section>

                    <Section icon={UserCheck} title="7. Your Rights and Choices">
                        <p>Depending on where you live, you may have rights to access, correct, export, or delete your personal information, and to object to or restrict certain processing.</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>You can delete individual saved test results at any time from the <Link href="/my-tests" className="text-indigo-600 hover:underline font-medium">My Tests</Link> page.</li>
                            <li>You can use the converter and unit converter without creating an account or saving any data.</li>
                            <li>To request deletion of your account and all associated data, contact us at the email below.</li>
                        </ul>
                        <p>If you are in the European Economic Area or UK, you also have the right to lodge a complaint with your local data protection authority.</p>
                    </Section>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6 flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold text-amber-900 mb-1">About your health information</p>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                BloodTestConverter is not a healthcare provider, and this site is not intended to be used as a substitute for professional medical advice, diagnosis, or treatment. By uploading a test result, you consent to the processing described in this policy. Please only upload documents that belong to you, or that you have permission to submit, and avoid including information you don&apos;t want processed by our third-party AI provider.
                            </p>
                        </div>
                    </div>

                    <Section title="8. Children's Privacy">
                        <p>BloodTestConverter is not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.</p>
                    </Section>

                    <Section title="9. International Data Transfers">
                        <p>Our service providers (including Google and Vercel) operate global infrastructure, so your information may be processed in countries other than your own, including the United States. Where required, we rely on appropriate safeguards for such transfers.</p>
                    </Section>

                    <Section title="10. Changes to This Policy">
                        <p>We may update this Privacy Policy from time to time. Material changes will be reflected by updating the &quot;Last updated&quot; date at the top of this page. Continued use of the site after changes take effect constitutes acceptance of the revised policy.</p>
                    </Section>

                    <Section icon={Mail} title="11. Contact Us">
                        <p>If you have questions about this Privacy Policy, or want to exercise your data rights, contact us at:</p>
                        <p>
                            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline font-medium">
                                {CONTACT_EMAIL}
                            </a>
                        </p>
                    </Section>

                    <div className="text-center pb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                        >
                            Back to converter →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

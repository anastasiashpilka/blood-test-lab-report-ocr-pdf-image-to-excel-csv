/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const CSP = [
  "default-src 'self'",
  // Next.js inline scripts (hydration, JSON-LD) require unsafe-inline.
  // Dev-mode React Fast Refresh evaluates modules via eval(), which needs
  // unsafe-eval — restricted to dev only so production CSP stays strict.
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ''}https://va.vercel-scripts.com https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  // Firebase Auth + Firestore + Gemini all route through googleapis.com
  "connect-src 'self' https://*.googleapis.com https://vitals.vercel-insights.com https://*.firebaseapp.com wss://*.firebaseio.com https://www.googletagmanager.com https://www.google-analytics.com",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: CSP },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // next build's own ESLint step can't serialize the FlatCompat-resolved
    // parser under ESLint 9 (fails with "Cannot serialize key 'parse' in
    // parser") and would otherwise fail open, silently. `npm run lint`
    // (plain `eslint .`) runs the same config correctly — run it in CI
    // instead of relying on this step.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en', 'es', 'de', 'fr', 'uk', 'ja', 'zh'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

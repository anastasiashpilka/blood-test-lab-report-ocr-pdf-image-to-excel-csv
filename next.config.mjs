/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'de', 'fr', 'uk', 'ja', 'zh'], 
    defaultLocale: 'en', 
  },
};

export default nextConfig;
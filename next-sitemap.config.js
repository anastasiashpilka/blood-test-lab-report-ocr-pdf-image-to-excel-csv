/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://onlinebloodtestconverter.com', 
  generateRobotsTxt: true, 
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  transform: async (config, path) => {
    const locales = ['en', 'es', 'de', 'fr', 'uk', 'ja', 'zh'];
    const localizedPaths = locales.map(locale => ({
      loc: `${config.siteUrl}/${locale}${path === '/' ? '' : path}`,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: locales.map(altLocale => ({
        href: `${config.siteUrl}/${altLocale}${path === '/' ? '' : path}`,
        hreflang: altLocale,
      })),
    }));
    return localizedPaths;
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/unit-converter'),
    await config.transform(config, '/biomarkers'),
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://majstorimargarita.rs',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }],
  },
  exclude: ['/admin/*', '/api/*', '/en/*'],
  alternateRefs: [
    { href: 'https://majstorimargarita.rs', hreflang: 'sr' },
    { href: 'https://majstorimargarita.rs/en', hreflang: 'en' },
  ],
  priority: 0.7, changefreq: 'weekly',
};

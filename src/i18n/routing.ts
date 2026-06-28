import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sr', 'en'],
  defaultLocale: 'sr',
  pathnames: {
    '/': '/',
    '/paketi': { sr: '/paketi', en: '/packages' },
    '/rezervacija': { sr: '/rezervacija', en: '/booking' },
    '/galerija': { sr: '/galerija', en: '/gallery' },
    '/team-building': '/team-building',
    '/o-nama': { sr: '/o-nama', en: '/about' },
    '/kontakt': { sr: '/kontakt', en: '/contact' },
  },
});

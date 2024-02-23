export const i18nConfig = {
  defaultLocale: 'pl',
  locales: ['en', 'pl'],
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];

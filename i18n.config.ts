import type { I18nConfig } from 'next-i18next/proxy'

export const plLang = 'pl'
export const enLang = 'en'
export const languages = [plLang, enLang]
export type Locale = (typeof languages)[number]

const i18nConfig: I18nConfig = {
    supportedLngs: languages,
    fallbackLng: plLang,
    resourceLoader: (language, namespace) =>
        import(`./app/i18n/locales/${language}/common.json`).then(
            (module) => module.default
        ),
}

export default i18nConfig

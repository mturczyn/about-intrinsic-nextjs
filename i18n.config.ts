import type { I18nConfig } from 'next-i18next/proxy'

export const plLang = 'pl'
export const enLang = 'en'
export const languages = [plLang, enLang]
export type Locale = (typeof languages)[number]

const i18nConfig: I18nConfig = {
    supportedLngs: languages,
    fallbackLng: plLang,
}

export default i18nConfig

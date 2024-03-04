import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { Locale, getOptions } from './settings'

const initI18next = async (lng?: string, ns?: string) => {
    const i18nInstance = createInstance()
    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`./locales/${language}/${namespace}.json`)
            )
        )
        .init(getOptions(lng, ns))

    return i18nInstance
}

export async function useTranslation(
    lng: string,
    ns?: string,
    options: { keyPrefix?: string } = {}
) {
    const i18nextInstance = await initI18next(lng, ns)
    return {
        t: i18nextInstance.getFixedT(
            lng,
            Array.isArray(ns) ? ns[0] : ns,
            options.keyPrefix
        ),
        i18n: i18nextInstance,
    }
}

export default function redirectToLocale(locale: Locale, pathname: string) {
    // If pathname is not found, return "/" as the redirection path.
    if (!pathname) {
        return '/'
    }

    // Split pathaname as substrings in to an array, using "/" as a pattern.
    const pathParts = pathname.split('/')

    // Set the array index 1 as the locale, this position contains the locale.
    pathParts[1] = locale

    // Join the locale with "/" to get a valid URL path (/en, /pl etc...).
    const url = pathParts.join('/')

    // Return with locale.
    return url
}

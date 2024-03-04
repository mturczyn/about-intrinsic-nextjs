import { useTranslation } from '@/app/i18n'
import { Locale } from '@/app/i18n/settings'

export default async function Page({ params }: { params: { locale: Locale } }) {
    const { t } = await useTranslation(params.locale)

    return (
        <>
            <h1 className="text-4xl font-medium tracking-tight">
                {t('views.technology-stack.title')}
            </h1>
            <p>{t('views.technology-stack.body')}</p>

            <h2 className="text-2xl font-medium tracking-tight">
                {t('views.technology-stack.i18nTitle')}
            </h2>
            <p>{t('views.technology-stack.i18nParagraph')}</p>
        </>
    )
}

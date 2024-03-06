import { useTranslation } from '@/app/i18n'
import { Locale } from '@/app/i18n/settings'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kontakt',
}

export default async function Page({ params }: { params: { locale: Locale } }) {
    const { t } = await useTranslation(params.locale)

    return (
        <>
            <h1 className="text-4xl font-medium tracking-tight">
                {t('views.contact-info.title')}
            </h1>
            <p>{t('views.contact-info.body')}</p>
        </>
    )
}

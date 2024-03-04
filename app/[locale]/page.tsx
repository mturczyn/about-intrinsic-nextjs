'use client'
import Image from 'next/image'
import authorImage from '../../public/author-image.jpg'
import { Trans } from 'next-i18next'
import { useTranslation } from '../i18n/client'
import { Locale } from '../i18n/settings'

export default function Home({ params }: { params: { locale: Locale } }) {
    const { t } = useTranslation(params.locale)
    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <main>
            <Image
                src={authorImage}
                className="float-right m-5"
                height={250}
                alt="Michał Turczyn"
                loading="eager"
            ></Image>
            <h1 className="text-4xl font-medium tracking-tight">
                {t('title')}
            </h1>
            <Trans i18nKey={'body'}>
                <h1 className="text-4xl font-medium tracking-tight"></h1>
            </Trans>
        </main>
    )
}

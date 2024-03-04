'use client'
import Image from 'next/image'
import authorImage from '../../public/author-image.jpg'
import { Trans } from 'next-i18next'
import { useTranslation } from '../i18n/client'
import { Locale } from '../i18n/settings'

export default function Home({ params }: { params: { locale: Locale } }) {
    const { t } = useTranslation(params.locale)
    return (
        <>
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
                <p className="font-medium tracking-tight">
                    <a
                        className="underline hover:no-underline"
                        href="https://intrinsic-michal-turczyn.azurewebsites.net"
                        target="_blank"
                    ></a>
                </p>
            </Trans>
        </>
    )
}

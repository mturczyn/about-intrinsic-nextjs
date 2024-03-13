'use client'
import { useTranslation } from '@/app/i18n/client'
import { Locale } from '@/app/i18n/settings'
// import { Metadata } from 'next'
import { Trans } from 'next-i18next'
import Image from 'next/image'
import nextJsLogo from '../../../public/programming-languages-logo/next-js.svg'

// export const metadata: Metadata = {
//     title: 'Stack technologiczny',
// }

export default function Page({ params }: { params: { locale: Locale } }) {
    const { t } = useTranslation(params.locale)

    return (
        <div className="[&>p]:mx-5 [&>h1]:m-5">
            <Image
                style={{ maxWidth: '40%' }}
                src={nextJsLogo}
                className="float-right mt-5 ml-5 mb-5"
                width="200"
                alt="Michał Turczyn"
                loading="eager"
            ></Image>
            <h1 className="text-3xl font-medium tracking-tight">
                {t('technology-stack.theming')}
            </h1>
            <p>{t('technology-stack.theming-description')}</p>

            <h1 className="text-3xl font-medium tracking-tight">
                {t('technology-stack.resources')}
            </h1>
            <Trans i18nKey="technology-stack.resources-description">
                <p>
                    <a target="_blank" href="https://nextjs.org/learn"></a>
                    <a
                        target="_blank"
                        href="https://github.com/lauriahlfors/nextjs14-i18n.git"
                    ></a>
                    <a
                        target="_blank"
                        href="https://locize.com/blog/next-app-dir-i18n/"
                    ></a>
                </p>
            </Trans>

            <h1 className="text-3xl font-medium tracking-tight">
                {t('technology-stack.hosting')}
            </h1>
            <Trans i18nKey="technology-stack.hosting-description">
                <p>
                    <a
                        target="_blank"
                        href="https://github.com/mturczyn/about-intrinsic-nextjs"
                    ></a>
                    <a
                        target="_blank"
                        href="https://vercel.com/solutions/nextjs"
                    ></a>
                </p>
            </Trans>

            <h1 className="text-3xl font-medium tracking-tight">
                {t('technology-stack.pwa-service-workers')}
            </h1>
            <p>{t('technology-stack.pwa-service-workers-description')}</p>

            <Trans i18nKey="technology-stack.pwa-service-workers-serwist-description">
                <p>
                    <a
                        href="https://serwist.pages.dev"
                        rel="noopener"
                        target="_blank"
                    ></a>
                    <a
                        href="https://github.com/serwist/serwist"
                        rel="noopener"
                        target="_blank"
                    ></a>
                </p>
            </Trans>

            <h1 className="text-2xl font-medium tracking-tight">
                {t('technology-stack.pwa-workshop')}
            </h1>
            <Trans i18nKey="technology-stack.pwa-workshop-description">
                <p>
                    <a
                        rel="noreferrer"
                        href="https://pwa-workshop-codelab.vercel.app"
                        target="_blank"
                    ></a>
                    <a
                        rel="noreferrer"
                        href="https://web.dev/articles/new-pwa-training"
                        target="_blank"
                    ></a>
                </p>
            </Trans>
        </div>
    )
}

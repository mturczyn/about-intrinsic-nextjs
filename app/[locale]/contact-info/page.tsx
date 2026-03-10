'use client'

import { useTranslation } from '@/app/i18n/client'
import { Locale } from '@/app/i18n/settings'
import Image from 'next/image'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaStackOverflow } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import websiteLogo from '../../../public/website-logo.svg'
import { PropsWithChildren, useEffect, useState } from 'react'
import { getRecaptchaToken } from '@/utils/recaptcha.client'
import { getContactInformation } from '@/utils/contact-info'
import { Trans } from 'next-i18next'
import { BounceLoader } from '@/components/bounce-loader'
import { verifyRecaptchaToken } from '@/utils/recaptcha'

export default function Page({
    params,
}: {
    params: Promise<{ locale: Locale }>
}) {
    const [locale, setLocale] = useState<Locale | null>(null)
    const [contactInfoLoading, setContactInfoLoading] = useState(false)
    const [isHuman, setIsHuman] = useState<undefined | boolean>(undefined)
    const [contactInfo, setContactInfo] = useState<
        | {
              phoneNumber: string
              email: string
              linkedIn: string
              stackOverflow: string
              github: string
          }
        | undefined
    >(undefined)
    const { t } = useTranslation(locale || 'en')

    useEffect(() => {
        // Get locale from params
        params.then(({ locale }) => {
            setLocale(locale)
        })
    }, [params])

    useEffect(() => {
        async function getContactInfo() {
            try {
                const token = await getRecaptchaToken('visit_contact_info')
                // server-only call
                const { ok: success } = await verifyRecaptchaToken(token)
                setIsHuman(success)
                if (!success) {
                    console.error(
                        'ContactInfoPage',
                        'recaptcha verification failed'
                    )
                    return
                }

                setContactInfoLoading(true)

                // Get contact info
                const info = await getContactInformation(token)

                setContactInfoLoading(false)
                setContactInfo(info)
            } catch (err) {
                console.error('Error fetching contact information:', err)
                setContactInfoLoading(false)
                setContactInfo(undefined)
                setIsHuman(false)
            }
        }

        getContactInfo()
    }, [locale])

    if (contactInfoLoading || isHuman === undefined) {
        return (
            <div className="text-center mt-10">
                <BounceLoader className="m-auto mb-5" />
                <Trans i18nKey="contact.loadingContactInformation" />
            </div>
        )
    }

    if (isHuman === false) {
        return (
            <div className="text-red-600 text-center mt-10">
                {t('contact.recaptchaFailedAccessDenied')}
            </div>
        )
    }

    if (!contactInfo) {
        return (
            <div className="text-red-600 text-center mt-10">
                <Trans i18nKey="contact.contactInfoUnavailable" />
            </div>
        )
    }

    return (
        <header className="contact-card">
            <Image
                loading="eager"
                src={websiteLogo}
                alt="Intrinsic Michał Turczyn logo"
            ></Image>
            <h1>INTRINSIC</h1>
            {contactInfo && (
                <div className="contact-info-card">
                    <ContactInfoEntry icon={<BsTelephone />}>
                        <a
                            href={`tel:${contactInfo?.phoneNumber.replace(' ', '')}`}
                        >
                            {contactInfo?.phoneNumber}
                        </a>
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<MdOutlineEmail />}>
                        <a href={`mailto:${contactInfo.email}`}>
                            {contactInfo.email}
                        </a>
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<CiLocationOn />}>
                        Zabrze, {t('contact.poland')}
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<CiLinkedin />}>
                        <AnchorWithNewPage
                            description="linkedin.com"
                            url={contactInfo.linkedIn}
                        />
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<FaStackOverflow />}>
                        <AnchorWithNewPage
                            description="stackoverflow.com"
                            url={contactInfo.stackOverflow}
                        />
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<FaGithub />}>
                        <AnchorWithNewPage
                            description="github.com"
                            url={contactInfo.github}
                        />
                    </ContactInfoEntry>
                </div>
            )}
        </header>
    )
}

const AnchorWithNewPage = ({
    description,
    url,
}: {
    description: string
    url: string
}) => {
    return (
        <a target="_blank" rel="noreferrer" href={url}>
            {description}
        </a>
    )
}

const ContactInfoEntry = ({
    children,
    icon,
}: PropsWithChildren & {
    icon: React.ReactNode
}) => {
    return (
        <div>
            {icon}
            <div>{children}</div>
        </div>
    )
}

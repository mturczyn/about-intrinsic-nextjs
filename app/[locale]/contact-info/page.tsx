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
import { PropsWithChildren, use, useEffect, useState } from 'react'
import { getRecaptchaToken } from '@/utils/recaptcha.client'
import { getContactInformation } from '@/utils/contact-info'
import { Trans } from 'next-i18next'
import { BounceLoader } from '@/components/bounce-loader'
import { useQuery } from '@tanstack/react-query'

export default function Page({
    params,
}: {
    params: Promise<{ locale: Locale }>
}) {
    const { locale } = use(params)
    useTranslation(locale)

    const { data: contactInfo, isLoading } = useQuery({
        queryKey: ['contact-info'],
        queryFn: async () => {
            const token = await getRecaptchaToken('visit_contact_info')
            // const { ok: success } = await verifyRecaptchaToken(token)

            // if (!success) {
            //     throw new Error('Recaptcha verification failed')
            // }
            return getContactInformation(token)
        },
    })

    if (isLoading) {
        return (
            <div className="text-center mt-10">
                <BounceLoader className="m-auto mb-5" />
                <Trans i18nKey="contact.loadingContactInformation" />
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

    if (!contactInfo.recaptchaSuccess) {
        return (
            <div className="text-red-600 text-center mt-10">
                <Trans i18nKey="contact.recaptchaFailedAccessDenied" />
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
                            href={`tel:${contactInfo.contactInformation!.phoneNumber.replace(' ', '')}`}
                        >
                            {contactInfo.contactInformation?.phoneNumber}
                        </a>
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<MdOutlineEmail />}>
                        <a
                            href={`mailto:${contactInfo.contactInformation!.email}`}
                        >
                            {contactInfo.contactInformation!.email}
                        </a>
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<CiLocationOn />}>
                        Zabrze, <Trans i18nKey="contact.poland" />
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<CiLinkedin />}>
                        <AnchorWithNewPage
                            description="linkedin.com"
                            url={contactInfo.contactInformation!.linkedIn}
                        />
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<FaStackOverflow />}>
                        <AnchorWithNewPage
                            description="stackoverflow.com"
                            url={contactInfo.contactInformation!.stackOverflow}
                        />
                    </ContactInfoEntry>
                    <ContactInfoEntry icon={<FaGithub />}>
                        <AnchorWithNewPage
                            description="github.com"
                            url={contactInfo.contactInformation!.github}
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

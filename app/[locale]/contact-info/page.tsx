import { useTranslation } from '@/app/i18n'
import { Locale } from '@/app/i18n/settings'
import { Metadata } from 'next'
import Image from 'next/image'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaStackOverflow } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import websiteLogo from '../../../public/website-logo.svg'

const PHONE_NUMBER = '503 536 506'
const MAIL_ADDRESS = 'turek1992@o2.pl'

export const metadata: Metadata = {
    title: 'Kontakt',
}

export default async function Page({ params }: { params: { locale: Locale } }) {
    const { t } = await useTranslation(params.locale)

    return (
        <header className="contact-card">
            <Image
                loading="eager"
                src={websiteLogo}
                alt="Intrinsic Michał Turczyn logo"
            ></Image>
            <h1>INTRINSIC</h1>
            <div className="contact-info-card">
                <ContactInfoEntry icon={<BsTelephone />}>
                    <a href={`tel:${PHONE_NUMBER.replace(' ', '')}`}>
                        {PHONE_NUMBER}
                    </a>
                </ContactInfoEntry>
                <ContactInfoEntry icon={<MdOutlineEmail />}>
                    <a href={`mailto:${MAIL_ADDRESS}`}>{MAIL_ADDRESS}</a>
                </ContactInfoEntry>
                <ContactInfoEntry icon={<CiLocationOn />}>
                    Zabrze, {t('Poland')}
                </ContactInfoEntry>
                <ContactInfoEntry icon={<CiLinkedin />}>
                    <AnchorWithNewPage
                        description="linkedin.com"
                        url="https://www.linkedin.com/in/michał-turczyn-6851a2117/"
                    />
                </ContactInfoEntry>
                <ContactInfoEntry icon={<FaStackOverflow />}>
                    <AnchorWithNewPage
                        description="stackoverflow.com"
                        url="https://stackoverflow.com/users/7132550/michał-turczyn"
                    />
                </ContactInfoEntry>
                <ContactInfoEntry icon={<FaGithub />}>
                    <AnchorWithNewPage
                        description="github.com"
                        url="https://github.com/mturczyn"
                    />
                </ContactInfoEntry>
            </div>
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
}: {
    children: any
    icon: JSX.Element
}) => {
    return (
        <div>
            {icon}
            <div>{children}</div>
        </div>
    )
}

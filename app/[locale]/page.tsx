'use client'
import Image from 'next/image'
import authorImage from '../../public/author-image.jpg'
import arcelorMittal from '../../public/employers-logos/arcelormittal.png'
import flightScope from '../../public/employers-logos/Flightscope.webp'
import exadel from '../../public/employers-logos/exadel.png'
import rite from '../../public/employers-logos/rite-nrg.png'
import rac from '../../public/employers-logos/rac.png'
import rsm from '../../public/employers-logos/rsm.png'
import cSharpLogo from '../../public/programming-languages-logo/c-sharp.png'
import jsLogo from '../../public/programming-languages-logo/js-logo.webp'
import nextJsLogo from '../../public/programming-languages-logo/next-js.svg'
import { useEffect } from 'react'
import { Locale } from '@/i18n.config'
import { Trans, useT } from 'next-i18next/client'

const PAGE_TITLE = 'Główna'

export default function Home({
    params,
}: {
    params: Promise<{ locale: Locale }>
}) {
    const { t } = useT()

    useEffect(() => {
        document.title = `${PAGE_TITLE} | Intrinsic Michal Turczyn`
    }, [])

    return (
        <>
            <Image
                style={{ maxWidth: '40%' }}
                src={authorImage}
                className="float-right mt-5 ml-5 mb-5"
                width="200"
                alt="Michał Turczyn"
                loading="eager"
            ></Image>
            <h1 className="text-4xl font-medium tracking-tight m-5">
                <Trans t={t} i18nKey="home.title"></Trans>
            </h1>
            <div className="[&>p]:m-5">
                <Trans t={t} i18nKey={'home.body'}>
                    <p></p>
                    <p></p>
                    <ProgrammingLanguages />
                    <p></p>
                    <p>
                        <a
                            href="https://intrinsic-michal-turczyn.azurewebsites.net"
                            target="_blank"
                        ></a>
                        <a
                            href="https://intrinsic-michal-turczyn.turek1992.workers.dev"
                            target="_blank"
                        ></a>
                    </p>
                </Trans>
            </div>

            <h1 className="text-4xl font-medium tracking-tight m-5">
                <Trans t={t} i18nKey="home.previous-employers" />
            </h1>
            <p className="m-5">
                <Trans t={t} i18nKey="home.previous-employers-body" />
            </p>

            <div className="logos">
                <EmployersLogos />
                <EmployersLogos />
            </div>
        </>
    )
}

const ProgrammingLanguages = () => {
    return (
        <div
            className="programming-languages"
            style={{ float: 'left', margin: '2ch' }}
        >
            <Image src={cSharpLogo} alt="C#" className="csharp mr-2" />
            <Image src={jsLogo} alt="JavaScript" className="js" />
            <Image src={nextJsLogo} alt="Next.js" className="nextjs" />
        </div>
    )
}

const EmployersLogos = () => (
    <ul role="list" className="logos-slide">
        <li>
            <Image height={150} src={arcelorMittal} alt="ArcelorMittal" />
        </li>
        <li>
            <Image height={150} src={flightScope} alt="FlightScope" />
        </li>
        <li>
            <Image height={150} src={exadel} alt="Exadel" />
        </li>
        <li>
            <Image height={150} src={rite} alt="RiteNRG" />
        </li>
        <li>
            <Image height={150} src={rsm} alt="RSM" />
        </li>
        <li>
            <Image height={150} src={rac} alt="RAC" />
        </li>
    </ul>
)

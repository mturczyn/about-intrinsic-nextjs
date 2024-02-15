import Image from 'next/image'

// export const PAGE_TITLE = 'Intrinsic | Web Development and Programming | Zabrze'

export default function Home() {
    // const t = useTranslations()
    const t = (s: string) => s

    // useEffect(() => {
    //     document.title = t(PAGE_TITLE)
    // }, [t])

    return (
        <>
            <div>
                <header className="Home-header">
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                    {/* <img
                        style={{ float: 'right', margin: '2ch' }}
                        src={authorImage}
                        className="Sized-image"
                        alt="me"
                    /> */}
                    <h1>{t('helloWithIntro')}</h1>
                    <p>{t('homePageIntroduction.firstPara')}</p>
                    <div
                        className="programming-languages"
                        style={{ float: 'left', margin: '2ch' }}
                    >
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                        {/* <img src={cSharpLogo} alt="C#" className="csharp" />
                        <img src={jsLogo} alt="JavaScript" className="js" />
                        <img src={reactLogo} alt="React" className="react" /> */}
                    </div>
                    <p>{t('homePageIntroduction.secondPara')}</p>
                    <p>{t('homePageIntroduction.thirdPara')}</p>
                    {/* <Trans i18nKey="homePageIntroduction.fourthPara">
                        <p>
                            <a href="https://about-intrinsic-nextjs.vercel.app"></a>
                        </p>
                    </Trans> */}
                </header>

                <h1>{t('pastEmployers')}</h1>
                <p>
                    {t(
                        'I have worked for following companies throughout my career:'
                    )}
                </p>
                <div className="logos">
                    <EmployersLogos />
                    <EmployersLogos />
                </div>
            </div>
        </>
    )
}

const EmployersLogos = () => (
    <ul role="list" className="logos-slide">
        <li>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
            {/* <img src={arcelorMittal} alt="ArcelorMittal" /> */}
        </li>
        <li>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
            {/* <img src={flightScope} alt="FlightScope" /> */}
        </li>
        {/* <li>
            <img src={exadel} alt="Exadel" />
        </li>
        <li>
            <img src={rite} alt="RiteNRG" />
        </li>
        <li>
            <img src={rsm} alt="RSM" />
        </li>
        <li>
            <img src={rac} alt="RAC" />
        </li> */}
    </ul>
)

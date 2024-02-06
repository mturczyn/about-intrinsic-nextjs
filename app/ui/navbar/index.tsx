'use client'

import clsx from 'clsx'
import { appRoutes } from '@/app/lib/routes'
// import plFlag from 'images/flags/pl.svg'
// import gbFlag from 'images/flags/gb.svg'
// import './Navbar.css'

export const Navbar = () => {
    // const { i18n, t } = useTranslation()
    const t = (s: string) => s
    const i18n = { changeLanguage(s: string) {} }

    const changeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode)
        document.documentElement.setAttribute('lang', languageCode)
    }

    return (
        <nav>
            {appRoutes.map((i) => (
                <a
                    key={i.path + i.name}
                    href={i.path}
                    className={clsx({
                        // 'current-location': window.location.pathname === i.path,
                    })}
                >
                    {t(i.name)}
                </a>
            ))}
            <button
                onClick={() => changeLanguage('SUPPORTED_LANGUAGES.pl')}
                style={{
                    // backgroundImage: 'url(' + plFlag + ')',
                    backgroundPosition: '0px 0px',
                }}
                className="langButton"
            >
                <span>PL</span>
            </button>
            <button
                onClick={() => changeLanguage('SUPPORTED_LANGUAGES.en')}
                className="langButton"
                // style={{ backgroundImage: 'url(' + gbFlag + ')' }}
            >
                <span>ENG</span>
            </button>
        </nav>
    )
}

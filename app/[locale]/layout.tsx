import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Nav from '@/components/nav'
import { Providers } from '@/components/Providers'
import i18nConfig, { languages } from '@/i18n.config'
import { getResources, getT, initServerI18next } from 'next-i18next/server'

initServerI18next(i18nConfig)

export async function generateStaticParams() {
    return languages.map((locale) => ({ locale }))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        template: '%s | Intrinsic Michal Turczyn',
        default: 'Intrinsic Michal Turczyn',
    },
    description:
        'Programowanie, tworzenie stron internetowych - Intrinsic, Michał Turczyn',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params
    const { i18n } = await getT()
    const resources = getResources(i18n)

    return (
        <html lang={locale} className={inter.className}>
            <head>
                <meta charSet="utf-8" />
                <link type="text/plain" rel="author" href="humans.txt" />
                <link rel="icon" href="favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#FFFFFF" />
                <meta
                    name="description"
                    content="Intrinsic Michał Turczyn - programowanie, rozwój stron internetowych, rozwiązania w chmurze. C#, .NET, JS, React oraz Azure."
                />
                {/* <meta
                    http-equiv="content-security-policy"
                    content="default-src 'self' 'unsafe-inline'; img-src 'self' data:;"
                /> */}
                <link rel="apple-touch-icon" href="logo192.png" />
                <link rel="manifest" href="manifest.json" />
            </head>
            <body>
                <Providers language={locale} resources={resources}>
                    <Nav params={{ locale }} />
                    <main className="px-8 lg:px-96 [&_a]:underline [&_a:hover]:no-underline">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Nav from '@/components/nav'
import Script from 'next/script'

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

export default function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    return (
        <html lang={params.locale} className={inter.className}>
            <head>
                <Script id="register-service-worker">
                    {`if ('serviceWorker' in navigator) {
                        navigator.serviceWorker
                            .register('/service-worker.js')
                            .then((registration) => console.log('scope is: ', registration.scope))
                    }`}
                </Script>
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
                <Nav params={params} />
                <main className="px-8 lg:px-96 [&_a]:underline [&_a:hover]:no-underline">
                    {children}
                </main>
            </body>
        </html>
    )
}

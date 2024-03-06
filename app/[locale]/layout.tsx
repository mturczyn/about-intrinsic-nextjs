import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Nav from '@/components/nav'

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
            <body>
                <Nav params={params} />
                <main className="px-8 pt-16 lg:px-96">{children}</main>
            </body>
        </html>
    )
}

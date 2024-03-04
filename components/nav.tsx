import { useTranslation } from '@/app/i18n'
import LocaleSelector from '@/components/locale-selector'
import Link from 'next/link'

export default async function Nav({ params }: { params: { locale: string } }) {
    const { t } = await useTranslation(params.locale)
    return (
        <nav className="absolute flex h-16 w-full items-center border-b border-b-neutral-200 bg-white px-8 lg:px-96 [&>a:hover]:bg-gray-200 [&>a]:p-3">
            <Link href="/">{t('home')}</Link>
            <Link href="/contact-info">{t('contact-info')}</Link>
            <Link href="/technology-stack">{t('technology-stack')}</Link>
            <LocaleSelector message={t('locale-selector.message')} />
        </nav>
    )
}

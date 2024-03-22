import { useTranslation } from '@/app/i18n'
import LocaleSelector from '@/components/locale-selector'
import Link from 'next/link'

export default async function Nav({ params }: { params: { locale: string } }) {
    const { t } = await useTranslation(params.locale)
    return (
        <nav className="[&>a]:flex [&>a]:items-center sticky top-0 flex w-full items-center border-b border-b-neutral-200 bg-white px-8 lg:px-96 [&>a]:rounded-lg [&>a:hover]:bg-neutral-200 [&>a]:p-3 [&>a]:transition-colors [&>a]:duration-1000 [&>a]:my-1">
            <Link href="/">{t('nav.home')}</Link>
            <Link href="/contact-info">{t('nav.contact-info')}</Link>
            <Link href="/technology-stack">{t('nav.technology-stack')}</Link>
            <LocaleSelector message={t('locale-selector.message')} />
        </nav>
    )
}

import LocaleSelector from '@/components/locale-selector';
import { TranslationObejct } from '@/lib/i18n/loadTranslation';
import Link from 'next/link';

interface Props {
  translation: TranslationObejct;
}

export default function Nav({ translation }: Props) {
  return (
    <nav className="absolute flex h-16 w-full items-center border-b border-b-neutral-200 bg-white px-8 lg:px-96 [&>a:hover]:bg-gray-200 [&>a]:p-3">
      <Link href="/">{translation('nav.home-page')}</Link>
      <Link href="/contact-info">{translation('nav.contact-info')}</Link>
      <Link href="/technology-stack">
        {translation('nav.technology-stack')}
      </Link>
      <LocaleSelector message={translation('nav.locale-selector.message')} />
    </nav>
  );
}

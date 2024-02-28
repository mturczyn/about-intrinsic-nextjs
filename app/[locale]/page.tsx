import { Locale } from '@/i18n';
import getTranslation from '@/lib/i18n/getTranslation';
import Image from 'next/image';

type Props = {
  params: { locale: Locale };
};

export default async function Page({ params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <section className="flex h-96 flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-medium tracking-tight">
        {translation('views.home.title')}
      </h1>
      <Image
        src="/author-image.jpg"
        width={200}
        height={200}
        alt="Michał Turczyn"
        loading="eager"
      ></Image>
      <p className="align-middle text-xl font-light tracking-tight text-neutral-600 decoration-wavy">
        {translation('views.home.body')}
      </p>
    </section>
  );
}

import { Locale } from '@/i18n';
import getTranslation from '@/lib/i18n/getTranslation';
import Image from 'next/image';
import authorImage from '../../public/author-image.jpg';

type Props = {
  params: { locale: Locale };
};

export default async function Page({ params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    // <section className="flex h-96 flex-col items-center justify-center gap-4">
    <>
      <Image
        src={authorImage}
        className="float-right m-5"
        height={250}
        alt="Michał Turczyn"
        loading="eager"
      ></Image>
      <h1 className="text-4xl font-medium tracking-tight">
        {translation('views.home.title')}
      </h1>
      <p className="align-middle text-xl font-light tracking-tight text-neutral-600 decoration-wavy">
        {translation('views.home.body')}
      </p>
    </>
    // </section>
  );
}

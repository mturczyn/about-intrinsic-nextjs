import { Locale } from '@/i18n';
import getTranslation from '@/lib/i18n/getTranslation';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const translation = await getTranslation(params.locale);

  return (
    <>
      <h1 className="text-4xl font-medium tracking-tight">
        {translation('views.contact-info.title')}
      </h1>
      <p>{translation('views.contact-info.body')}</p>
    </>
  );
}

import messages from '../lib/messages';

export default async function Home({
  params,
}: {
  params: { locale: 'en' | 'fr' };
}) {
  const { locale } = await params
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">
        {messages[locale]?.welcome}
      </h1>
      <p>{messages[locale]?.intro}</p>
    </>
  );
}
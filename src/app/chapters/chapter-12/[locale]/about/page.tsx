export default async function About({
  params,
}: {
  params: { locale: 'en' | 'fr' };
}) {
  const { locale } = await params
  return <p>{locale === 'fr' ? 'Page À propos' : 'About page'}</p>;
}
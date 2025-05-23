import Image from 'next/image';
import { getAllCarSlugs, getCarBySlug } from '../../lib/dataClient';

export async function generateStaticParams() {
  const slugs = await getAllCarSlugs(); // mocked
  return slugs.map(slug => ({ slug }));
}

export default async function CarPage({ params }: { params: { slug: string } }) {
  const car = await getCarBySlug(params?.slug);
  return (
    <div>
      <h1>{car.name}</h1>
      <Image src={car.images[0]} alt={car.name} width={800} height={450} />
      <table>
        <tbody>
          <tr><th>Range</th><td>{car.specs.range} miles</td></tr>
          <tr><th>Top Speed</th><td>{car.specs.topSpeed} mph</td></tr>
        </tbody>
      </table>
      <button>Add to Cart</button>
    </div>
  );
}
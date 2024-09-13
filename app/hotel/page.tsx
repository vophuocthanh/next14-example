import { fetchHotels } from '@/app/api/api';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const dataHotel = await fetchHotels();
  const hotels = dataHotel.data;

  return (
    <div>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
            <p>Price: ${hotel.price}</p>
            <p>Address: {hotel.address}</p>
            <Link href={`/hotel/${hotel.id}`}>
              <Image
                src={
                  hotel.images.startsWith('http')
                    ? hotel.images
                    : `/default-image.jpg`
                }
                alt={hotel.name}
                width={100}
                height={100}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

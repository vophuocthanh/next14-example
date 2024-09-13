import { fetchHotelById } from '@/app/api/api';
import FormDetail from '@/components/form-detail';

export default async function Page({ params }: { params: { id: string } }) {
  console.log('params:', params);
  const hotel = await fetchHotelById(params.id);
  console.log('hotel:', hotel);

  return (
    <div>
      <FormDetail data={hotel} />
    </div>
  );
}

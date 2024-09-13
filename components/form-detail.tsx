'use client';
import { Hotel } from '@/lib/data';
import Image from 'next/image';

interface FormDetailProps {
  data: Hotel;
}

const FormDetail: React.FC<FormDetailProps> = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Description: {data.description}</p>
      <p>Price: ${data.price}</p>
      <p>Address: {data.address}</p>
      <Image
        src={
          data.images.startsWith('http') ? data.images : `/default-image.jpg`
        }
        alt={data.name}
        width={300}
        height={300}
      />
    </div>
  );
};

export default FormDetail;

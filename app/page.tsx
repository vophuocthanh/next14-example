import { fetchPosts } from '@/app/api/api';
import { Post } from '@/lib/data';
import Image from 'next/image';

export default async function Home() {
  const data = await fetchPosts();

  const posts: Post[] = data.data;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.description}</p>
          <p>Price: ${post.price}</p>
          <p>Start Date: {post.startDate}</p>
          <p>End Date: {post.endDate}</p>
          <Image
            src={
              post.images.startsWith('http')
                ? post.images
                : `/default-image.jpg`
            }
            alt={post.name}
            width={100}
            height={100}
          />
        </li>
      ))}
    </ul>
  );
}

import { fetchUserMe } from '@/app/api/api';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value || '';

  if (!accessToken) {
    return <p>Bạn chưa đăng nhập. Vui lòng đăng nhập.</p>;
  }
  const userData = await fetchUserMe(accessToken);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Tên: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
    </div>
  );
}

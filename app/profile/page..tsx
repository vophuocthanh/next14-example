import { cookies } from 'next/headers';

export default async function page() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value || '';

  if (!accessToken) {
    return <p>Bạn chưa đăng nhập. Vui lòng đăng nhập.</p>;
  }

  const response = await fetch('http://localhost:3001/api/user/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const userData = await response.json();

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Tên: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Đăng nhập thất bại' }, { status: 401 });
  }

  const data = await response.json();

  // Set cookies on the server
  const responseWithCookies = NextResponse.json(data);
  responseWithCookies.cookies.set('access_token', data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });

  responseWithCookies.cookies.set('refresh_token', data.refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });

  return responseWithCookies;
}

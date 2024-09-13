import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
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
      throw new Error('Đăng nhập thất bại');
    }

    const data = await response.json();

    // Thiết lập cookie access_token và refresh_token
    cookies().set('access_token', data.access_token, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    cookies().set('refresh_token', data.refresh_token, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    // Redirect về trang chủ nếu đăng nhập thành công
    return NextResponse.redirect('/');
  } catch (error) {
    // Redirect lại trang đăng nhập với thông báo lỗi
    return NextResponse.redirect(`/login?error=${error}`);
  }
}

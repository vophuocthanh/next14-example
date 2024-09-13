import { cookieConfig } from '@/utils/cookieConfig'; // Cấu hình cookie
import { cookies } from 'next/headers';

export async function loginUser(email: string, password: string) {
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

    // Lưu token vào cookie
    cookies().set('access_token', data.access_token, {
      ...cookieConfig.accessToken,
      sameSite: 'strict',
    });
    cookies().set('refresh_token', data.refresh_token, {
      ...cookieConfig.refreshToken,
      sameSite: 'strict',
    });

    return null; // Đăng nhập thành công, không có lỗi
  } catch (error) {
    console.error('Error during login:', error);
    return error; // Trả về lỗi nếu đăng nhập thất bại
  }
}

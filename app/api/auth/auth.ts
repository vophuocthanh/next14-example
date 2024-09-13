import { cookieConfig } from '@/utils/cookieConfig';
import Cookies from 'js-cookie';

export const authLogin = async (email: string, password: string) => {
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

    Cookies.set('access_token', data.access_token, cookieConfig.accessToken);
    Cookies.set('refresh_token', data.refresh_token, cookieConfig.refreshToken);

    return data;
  } catch (error) {
    throw error;
  }
};

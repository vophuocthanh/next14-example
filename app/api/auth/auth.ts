import { apiFetch } from '@/app/api/api-client';
import Cookies from 'js-cookie';

export const authLogin = async (email: string, password: string) => {
  try {
    const response = await apiFetch('auth/login', '', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!response || !response.access_token || !response.refresh_token) {
      throw new Error('Đăng nhập thất bại');
    }

    Cookies.set('access_token', response.access_token, {
      expires: 7, // ví dụ, token có thể hết hạn sau 7 ngày
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    Cookies.set('refresh_token', response.refresh_token, {
      expires: 30, // ví dụ, refresh token có thể hết hạn sau 30 ngày
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return response;
  } catch (error) {
    throw error;
  }
};

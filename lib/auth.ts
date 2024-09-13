import { apiFetch } from '@/app/api/api-client';
import { ApiResponse } from '@/lib/data';
import { cookies } from 'next/headers';

interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

export const authLogin = async (
  email: string,
  password: string
): Promise<ApiResponse<AuthResponse>> => {
  const response = await apiFetch('auth/login', '', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const cookieStore = cookies();
  const accessToken = response.data?.access_token || '';
  const refreshToken = response.data?.refresh_token || '';

  cookieStore.set('access_token', accessToken);
  cookieStore.set('refresh_token', refreshToken);

  return response;
};

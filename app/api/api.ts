import { apiFetch } from '@/app/api/api-client';
import { ApiResponse, Hotel, Post, UserMeType } from '@/lib/data';
import { cookies } from 'next/headers';

export const fetchPosts = async (): Promise<ApiResponse<Post>> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value || '';
  return apiFetch('flight', accessToken);
};

export const fetchHotels = async (): Promise<ApiResponse<Hotel>> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value || '';
  return apiFetch('hotel', accessToken);
};

export const fetchUserMe = async (accessToken: string): Promise<UserMeType> => {
  return apiFetch('user/me', accessToken);
};

export const fetchHotelById = async (id: string): Promise<Hotel> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value || '';
  return apiFetch(`hotel/${id}`, accessToken);
};

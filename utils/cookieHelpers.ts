// utils/cookieHelpers.ts
import { serialize } from 'cookie';
import { NextApiResponse } from 'next';

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: { [key: string]: any } = {}
) => {
  const cookie = serialize(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Chỉ sử dụng secure ở production
    sameSite: 'strict',
    maxAge: options.expires * 24 * 60 * 60, // chuyển số ngày thành giây
    path: '/',
    ...options,
  });
  res.setHeader('Set-Cookie', cookie);
};

export const clearCookie = (res: NextApiResponse, name: string) => {
  const cookie = serialize(name, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: -1, // Xóa cookie
    path: '/',
  });
  res.setHeader('Set-Cookie', cookie);
};

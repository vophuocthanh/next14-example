import Cookies from 'js-cookie';

// Hàm để lưu cookie
export const setCookie = (name: string, value: string, options = {}) => {
  Cookies.set(name, value, {
    expires: 7, // Giá trị mặc định là 7 ngày
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    ...options,
  });
};

// Hàm để lấy giá trị cookie
export const getCookie = (name: string) => {
  return Cookies.get(name);
};

// Hàm để xóa cookie
export const clearCookie = (name: string) => {
  Cookies.remove(name);
};

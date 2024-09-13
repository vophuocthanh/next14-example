// cookieConfig.ts
export const cookieConfig = {
  accessToken: {
    expires: 7, // token will last for 7 days
    secure: process.env.NODE_ENV !== 'development', // secure only in production
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    sameSite: 'Strict' as 'Strict', // Correct literal value
  },
  refreshToken: {
    expires: 30, // refresh token will last for 30 days
    secure: process.env.NODE_ENV !== 'development',
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    sameSite: 'Strict' as 'Strict', // Correct literal value
  },
};

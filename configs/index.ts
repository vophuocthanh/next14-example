export const config = {
  api: {
    externalResolver: true,
  },
};

export const BASE_URL =
  process.env.NEXT_PUBLIC_URL_API || 'http://localhost:3001';

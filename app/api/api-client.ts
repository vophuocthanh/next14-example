export const apiFetch = async (
  endpoint: string,
  accessToken?: string,
  options: RequestInit = {}
) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_URL_API;

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Failed to fetch ${endpoint}: ${errorText}`);
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return response.json();
};

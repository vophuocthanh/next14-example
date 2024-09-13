export interface Post {
  id: string;
  name: string;
  userId: string;
  createAt: string;
  updateAt: string;
  description: string;
  price: string;
  startDate: string;
  endDate: string;
  perios: string;
  images: string;
}

export interface Hotel {
  id: string;
  name: string;
  userId: string;
  address: string;
  createAt: string;
  updateAt: string;
  evaluate: string;
  price: string;
  description: string;
  images: string;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
  locationId: string;
}

export interface ApiResponse<T> {
  data: T[];
  total: number;
  currentPage: number;
  itemsPerPage: number;
}

export interface UserMeType {
  id: string;
  email?: string;
  phone?: string;
  address?: string;
  avatar?: string;
  name?: string;
  date_of_birth?: string;
  country?: string;
  createAt?: string;
  updateAt?: string;
  roleId?: string;
  verificationCode?: string | null;
  verificationCodeExpiresAt?: string | null;
  isVerified?: boolean;
}

export interface LoginResponse {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}

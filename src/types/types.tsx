export interface IItem {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  brand: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  currency: string;
  count?: number;
  catalogCount?: number;
  thumbnail: string;
  images: string[];
  stock: number;
}

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface ICartInfo {
  id: number;
  products: ICartItem[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface IProductsRes {
  products: IItem[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProductsQuery {
  q?: string;
  limit?: number;
  skip?: number;
}

export interface IFormData {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "female" | "male";
  image: string;
  accessToken: string;
  refreshToken: string;
}

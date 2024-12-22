export type IUser = {
  name: string;
  email: string;
  role: 'admin' | 'seller' | 'buyer';
  imgUrl?: string;
  wishlist: string[];
  cart: string[];
  status?: 'pending' | 'approved';
}
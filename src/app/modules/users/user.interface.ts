export type User = {
  name: string;
  role: 'admin' | 'seller' | 'buyer';
  imgUrl?: string;
  wishlist: string[];
  cart: string[];
  status: 'pending' | 'approved';
}
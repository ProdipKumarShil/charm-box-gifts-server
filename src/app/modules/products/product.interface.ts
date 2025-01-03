export type IProduct = {
  name: string;
  email: string;
  description: string;
  imgUrl: string,
  price: number;
  category: 'dress' | 'toys' | 'cosmetics' | 'pets' | 'foods';
  genderType: 'male' | 'female';
  brand: string;
  status: 'pending' | 'approved';
}
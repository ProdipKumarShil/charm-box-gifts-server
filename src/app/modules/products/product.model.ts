import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
  name: {type: String, required: true},
  description: {type: String, required: true},
  imgUrl: {type: String, default: null},
  price: {type: Number, required: true},
  category: {type: String, enum: ['dress', 'toys', 'cosmetics', 'pets', 'foods'], required: true},
  genderType: {type: String, enum: ['male', 'female']},
  brand: {type: String, required: true},
  status: {type: String, enum: ['pending', 'approved'], required: true},
})

export const Product = model<IProduct>('Product', productSchema)
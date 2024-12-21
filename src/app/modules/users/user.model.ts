import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {type: String, required: true},
  role: {type: String,enum: ['admin', 'seller', 'buyer'], required: true},
  imgUrl: {type: String, default: null},
  wishlist: {type: [String], default: []},
  cart: {type: [String], default: []},
  status: {type: String, enum: ['pending', 'approved'], default: 'pending'}
})

export const User = model<IUser>('User', userSchema)
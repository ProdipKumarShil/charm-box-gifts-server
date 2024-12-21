import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (productData: IProduct): Promise<IProduct> => {
  return await Product.create(productData)
}

const getProductById = async (id: string): Promise<IProduct | null> => {
  return await Product.findById(id)
}

const updateProduct = async (id: string, updateData: Partial<IProduct>): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, updateData, {new: true})
}

const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return await Product.findByIdAndDelete(id)
}

export const ProductServices = {
  createProduct, getProductById, updateProduct, deleteProduct
}
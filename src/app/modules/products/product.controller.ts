import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Product create error",
      details: error
    });
  }
};

// const getProducts = async (req: Request, res: Response) => {
//   try {
//     const products = await ProductServices.ge
//   } catch (error) {

//   }
// }

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.getProductById(req.params.id);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Product found successfully",
        data: product,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Product found by id error",
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.updateProduct(
      req.params.id,
      req.body
    );
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: product,
      });
    }
  } catch (error: any) {
    res.status(500).json({ 
      success: false,
      message: 'Product update error' 
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.deleteProduct(req.params.id);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: product,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const ProductControllers = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};

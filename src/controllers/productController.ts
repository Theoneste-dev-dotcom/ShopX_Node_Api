import { Request, Response } from "express";
import Product, { IProduct } from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct: IProduct = new Product(req.body);
    const product = await newProduct.save();
    console.log("product created");
    res.status(201).json("Product created");
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

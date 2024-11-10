import { Request, Response } from "express";
import SaleProduct, { SaleProductType } from "../models/saleProduct";

export const getSaleProducts = async (req: Request, res: Response) => {
  try {
    const products = await SaleProduct.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

export const createSaleProduct = async (req: Request, res: Response) => {
  try {
    const newProduct: SaleProductType = new SaleProduct(req.body);
    const product = await newProduct.save();
    console.log("product created");
    res.status(201).json("Sale Product created");
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

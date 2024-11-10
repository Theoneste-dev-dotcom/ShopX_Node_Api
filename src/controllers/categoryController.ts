import mongoose from "mongoose";
import { Request, Response } from "express";
import Category from "../models/category";
export const createCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json("Category created");
  } catch (error) {
    console.log("Failed to create category");
    res.status(500).json("Failed to craete category");
  }
};
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(201).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json("Failed to get categories");
  }
};

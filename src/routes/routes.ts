import express from "express";
import { createProduct, getProducts } from "../controllers/productController";
import { createCategory, getCategories } from "../controllers/categoryController";
import { createSaleProduct, getSaleProducts } from "../controllers/saleProductController";

const router = express.Router();

router.get("/saleProducts", getSaleProducts);
router.post("/saleProducts", createSaleProduct);
router.get("/products", getProducts);
router.post("/products", createProduct);
router.get("/categories", getCategories);
router.post("/categories", createCategory);

export default router;

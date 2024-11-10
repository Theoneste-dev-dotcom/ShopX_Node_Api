"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const categoryController_1 = require("../controllers/categoryController");
const saleProductController_1 = require("../controllers/saleProductController");
const router = express_1.default.Router();
router.get("/saleProducts", saleProductController_1.getSaleProducts);
router.post("/saleProducts", saleProductController_1.createSaleProduct);
router.get("/products", productController_1.getProducts);
router.post("/products", productController_1.createProduct);
router.get("/categories", categoryController_1.getCategories);
router.post("/categories", categoryController_1.createCategory);
exports.default = router;

// routes/productRoutes.js we build api routes or api endpoint 
// all product-related API routes
// This is where we define URLs for API endpoints.

import express from "express"
import { getAllProducts, getProductsByCategory, getProductById, getProductByCategoryAndId } from "../controllers/productController.js"

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:category/:id", getProductByCategoryAndId);
router.get("/:category", getProductsByCategory);
router.get("/id/:id", getProductById)

export default router

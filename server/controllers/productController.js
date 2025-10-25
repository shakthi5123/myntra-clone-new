//controllers/productController.js logic for each route

import Product from "../models/Product.js";

// Get all the products 
export const getAllProducts = async (req , res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error})
    }
}

// Get products by category 
export const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params
        const products = await Product.find({ category })
        if(!products.length){
            return res.status(404).json({ message: "No products found" })
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching category products", error });
    }
}

// Get single product by ID 
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const products = await Product.findById(id)
        if(!products) return res.status(404).json({ message: "Product not found" })
        res.status(200).json(products)    
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error })
    }
}

// Get single product by category + id
export const getProductByCategoryAndId = async (req, res) => {
  try {
    const { category, id } = req.params;
    const product = await Product.findOne({ category, _id: id });
    
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};
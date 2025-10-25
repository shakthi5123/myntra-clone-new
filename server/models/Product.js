// models/Product.js this is for MongoDB schema

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        image: { type: String , required: true },
        brand: { type: String , required: true },
        title: { type: String , required: true },
        price: { type: Number , required: true },
        category: { type: String , required: true , enum: ["tshirts", "kurtis"] },
    },
    { timestamps: true}
);

export default mongoose.model("Product", productSchema)
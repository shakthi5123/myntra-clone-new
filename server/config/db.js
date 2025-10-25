// config/db.js this is where we connect to database

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`)
        process.exit(1); // stop app if DB fails  
        
    }
}
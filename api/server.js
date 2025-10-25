// server.js main entry point

import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config(); // this is used to load .env file
const app = express();

app.use(cors())
app.use(express.json());


// Connect to MongoDB
connectDB();

//Routes
app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("Myntra backend API is running......");
});

// Start server
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })

export default app;

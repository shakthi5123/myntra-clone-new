import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


// Register new user 
export const registerUser = async (req, res) => {
    try {
        const { name , email , password } = req.body;

        //check if the user already exists 
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password 
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user 
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" })

    } catch (error) {
        res.status(500).json({ message: "Error registering user", error })
    }
}

// Login user 
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        // find user by email 
        const user = await User.findOne({email})
        if(!user) return res.status(404).json({ message: "User not found" })
        
        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: "Invalid password" })
        
        // create token 
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d"}
        )

        res.status(200).json({ message: "Login Successful", token })

    } catch (error) {
        res.status(500).json({ message: "Error logging In", error })
    }
}

// Example protected route
export const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id).select("-password")
    res.json(user);
}
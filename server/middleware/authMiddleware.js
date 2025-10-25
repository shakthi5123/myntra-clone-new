// The protect function checks if a client request has a valid JSON Web Token (JWT), and if so, it authenticates the user and allows the request to proceed.
// Line,Action,Explanation
// "const token = req.headers.authorization?.split("" "")[1];",Extracts the Token,"Tries to get the value of the Authorization header, splits it (assuming it's formatted as ""Bearer TOKEN""), and takes the actual TOKEN part."
// if (!token) return res.status(401).json(...),Checks for Token,"If no token is found, it immediately sends a 401 Unauthorized response and stops the request."
// "const decoded = jwt.verify(token, process.env.JWT_SECRET);",Verifies the Token,"Uses the jsonwebtoken library to decode the token using a secret key stored in environment variables. If the token is invalid (expired, wrong signature), this line throws an error, which is caught by the catch block."
// req.user = decoded;,Attaches User Data,"If the token is valid, the decoded user information (the token's payload) is attached to the request object as req.user. This data is now available to subsequent route handlers."
// next();,Passes Control,"Calls the next() function, allowing the request to proceed to the intended route handler."
// catch (error) { ... },Handles Errors,"If token verification fails (e.g., the token is expired or tampered with), it sends a 401 Unauthorized response with an ""Invalid token"" message."




import jwt from "jsonwebtoken"
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
        if (!token) return res.status(401).json({ message: "No token, authorization denied" })
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await  User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token "})
    }
}

//This function will be used on routes that require login (like /api/cart or /wishlist).
// It checks if a valid JWT is present in the request headers.
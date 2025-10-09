import jwt from "jsonwebtoken";


import { ENV } from "../lib/env.js";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.nigga;
    if(!token) return res.status(401).json({message: 'Unauthorized - No Token Found'});

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if(!decoded) return res.status(401).json({ message: "Unauthorized - Invalid Token " });
   
    const user = await User.findById(decoded.userId).select('-password');
    if(!user) return res.status(404).json({ message: "User Not Found" });

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
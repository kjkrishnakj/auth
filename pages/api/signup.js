import connectDb from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      
      let newUser = new User(req.body);
      
      
      await newUser.save();

      
      res.status(201).json({ success: "User created successfully" });
    } catch (error) {
      
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Failed to save user" });
    }
  } else {
    
    res.status(400).json({ error: "Bad request" });
  }
}

export default connectDb(handler);

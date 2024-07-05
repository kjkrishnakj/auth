import connectDb from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
  if (req.method === 'POST') {
      try {
          const { email, password } = req.body;
          const user = await User.findOne({ email });

      if (user) {
        if (password === user.password) {
          res.status(200).json({ success: true, email: user.email });
        } else {
          res.status(200).json({ success: false, error: "Invalid credentials" });
        }
      } else {
        res.status(200).json({ success: false, error: "No user found" });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default connectDb(handler);

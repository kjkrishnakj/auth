import mongoose from 'mongoose';
import cors from 'cors';
const corsMiddleware = cors({
    origin: 'https://auth-exwx.vercel.app', // Replace with your frontend URL
    methods: ['GET', 'POST'], // Allow specific methods
    allowedHeaders: ['Content-Type'], // Allow only certain headers
  });
const connectDb = (handler) => async (req, res) => {
  const uri =process.env.uri;

  try {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    console.log("connected2");

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return handler(req, res);
  } catch (error) {
    console.error('Error connecting to database:', error.message);
    res.status(500).json({ error: 'Database connection error' });
  }
};

export default connectDb;

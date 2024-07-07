  import mongoose from 'mongoose';

const connectDb = (handler) => async (req, res) => {
  const uri =process.env.uri;

  try {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }

    await mongoose.connect(uri);

    return handler(req, res);
  } catch (error) {
    console.error('Error connecting to database:', error.message);
    res.status(500).json({ error: 'Database connection error' });
  }
};

export default connectDb;

import mongoose from 'mongoose';

const connectDb = (handler) => async (req, res) => {
  const uri ='mongodb+srv://krishnajaswl:hello@cluster0.pbdkolm.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0';

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

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {

    const { MONGO_URI } = process.env;
    if(!MONGO_URI) throw new Error('MONGO_URI is not defined');

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB:', conn.connection.host);
  } catch (error) {
    console.error("Error Connecting to MongoDB", error);
    process.exit(1);
  }
}
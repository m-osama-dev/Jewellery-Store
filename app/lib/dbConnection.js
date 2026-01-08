import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "muhammadosama_db",
    });
    console.log("✅ Connected to MongoDB.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default connectMongoDB;

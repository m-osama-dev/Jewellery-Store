import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

let isConnected = false;

export default async function connectMongoDB() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(MONGODB_URI);

    isConnected = conn.connections[0].readyState === 1;

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    throw error;
  }
}
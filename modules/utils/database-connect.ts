import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) return;

  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL || "");
    
    isConnected = connection.connection.readyState === 1;

    console.log("DB connected!");
  } catch (error) {
    console.log("Failed to connect DB: ", error);
  }
};

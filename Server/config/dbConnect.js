require("dotenv").config();

import mongoose from "mongoose";
import { MongoClient } from "mongodb";

// const MONGODB_URI = process.env.mongodburl;
const MONGODB_URI =
  "mongodb+srv://Bhuvan2533:BhuvanAnish3322@aikya23cluster.af9mh09.mongodb.net/?retryWrites=true&w=majority";
const MONGODB_DB = "aikya23";

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

let cachedClient = null;

export async function connectDB() {
  if (cachedClient) {
    return {
      client: cachedClient,
    };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  let conn;
  try {
    conn = await mongoose.connect(process.env.mongodburl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDb connected :" + conn.connection.host);
  } catch (error) {
    console.error("Error :" + error.message);
    process.exit();
  }
  cachedClient = conn;
  return {
    client: cachedClient,
  };
}

module.exports = connectDB;

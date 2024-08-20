import { connect } from "mongoose";
export const connectDb = async () => {
  try {
    const connectionString = process.env.MONGO_CONNECTION_STRING || "";
    console.log("connectionString--->", connectionString);
    await connect(connectionString);
  } catch (error) {
    console.log("db error--->", error);
    throw new Error("Unable to connect to DB");
  }
};

export * from "./user.schema";

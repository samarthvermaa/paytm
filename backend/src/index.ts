import express from "express";
import * as dotenv from "dotenv";
import { connectDb } from "./db";
dotenv.config();

connectDb()
  .then(() => {
    const app = express();
    const PORT = process.env.PORT || 3010;
    app.listen(PORT, () => {
      console.log("server is running on port:- " + PORT);
    });
  })
  .catch((error) => {
    console.log("unable to connect to db");
  });

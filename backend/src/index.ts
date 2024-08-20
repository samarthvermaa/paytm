import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log("server is running on port:- " + PORT);
});

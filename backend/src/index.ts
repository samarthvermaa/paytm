import * as dotenv from "dotenv";
import { connectDb } from "./db";
import app from "./app";
dotenv.config();

connectDb()
  .then(() => {
    const PORT = process.env.PORT || 3010;
    app.listen(PORT, () => {
      console.log("server is running on port:- " + PORT);
    });
    app.on("error", () => {
      console.log("Unable to connect to DB");
      process.exit();
    });
  })
  .catch((error) => {
    console.log("unable to connect to db");
  });

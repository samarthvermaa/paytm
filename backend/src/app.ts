import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

import { userRouter } from "./router";
app.use("/api/v1/user", userRouter);
export default app;

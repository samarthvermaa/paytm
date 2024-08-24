import express from "express";

const app = express();
app.use(express.json());

import { userRouter } from "./router";
app.use("/api/v1/user", userRouter);
export default app;

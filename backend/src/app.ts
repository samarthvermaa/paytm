import express from "express";
import cors from "cors";
import { homeRouter, userRouter } from "./router";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/page", homeRouter);
export default app;

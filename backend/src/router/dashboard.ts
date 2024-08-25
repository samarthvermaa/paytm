import express from "express";
import { authenticateUser } from "../middlewares/authentication";
import { home } from "../controllers";

const homeRouter = express.Router();

homeRouter.use(authenticateUser);

homeRouter.route("/home").get(home);

export { homeRouter };

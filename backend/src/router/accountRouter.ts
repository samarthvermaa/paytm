import express from "express";
import { authenticateUser } from "../middlewares/authentication";
import { getBalance, transferBalance } from "../controllers";
import { validateUserData } from "../middlewares/validations";
import { TransferAmount, TTransferAmount } from "../types";

const accountRouter = express.Router();

accountRouter.use(authenticateUser);

accountRouter.route("/balance").get(getBalance);
accountRouter.route("/transfer").post((req, res, next) => {
  validateUserData<TTransferAmount>(req, res, next, TransferAmount);
}, transferBalance);

export { accountRouter };

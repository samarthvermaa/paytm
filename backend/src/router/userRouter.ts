import express, { NextFunction, Request, Response } from "express";
import { loginUser, registerUser } from "../controllers";
import {
  checkUserExits,
  validateUserData,
  verifyUser,
} from "../middlewares/validations";
import { TUser, TUserLogin, User, UserLogin } from "../types";
const userRouter = express.Router();

const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log(new Date());
  next();
};

userRouter.use(timeLog);

//to save the user details
userRouter.route("/signup").post(
  (req, res, next) => {
    validateUserData<TUser>(req, res, next, User);
  },
  checkUserExits,
  registerUser
);

//to validate user and check if the user exits
userRouter.route("/login").post(
  (req, res, next) => {
    validateUserData<TUserLogin>(req, res, next, UserLogin);
  },
  verifyUser,
  loginUser
);

export { userRouter };

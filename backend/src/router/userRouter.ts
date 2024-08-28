import express, { NextFunction, Request, Response } from "express";
import { loginUser, registerUser, updateUserDetails } from "../controllers";
import {
  checkUserExits,
  validateUserData,
  verifyUser,
} from "../middlewares/validations";
import {
  TUpdateUser,
  TUser,
  TUserLogin,
  UpdateUser,
  User,
  UserLogin,
} from "../types";
import { authenticateUser } from "../middlewares/authentication";
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

userRouter.route("/").patch(
  (req, res, next) => {
    validateUserData<TUpdateUser>(req, res, next, UpdateUser);
  },
  authenticateUser,
  updateUserDetails
);

export { userRouter };

import express, { NextFunction, Request, Response } from "express";
import { registerUser, validateUser } from "../controllers";
const userRouter = express.Router();

const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log(new Date());
  next();
};

userRouter.use(timeLog);

//to save the user details
userRouter.route("/signup").post(registerUser);

//to validate user and check if the user exits
userRouter.route("/login").post(validateUser);

export { userRouter };

import express, { NextFunction, Request, Response } from "express";
import { loginUser, registerUser } from "../controllers";
import { checkUserExits, validateUserData } from "../middlewares/validations";
const userRouter = express.Router();

const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log(new Date());
  next();
};

userRouter.use(timeLog);

//to save the user details
userRouter
  .route("/signup")
  .post(validateUserData, checkUserExits, registerUser);

//to validate user and check if the user exits
userRouter.route("/login").post(loginUser);

export { userRouter };

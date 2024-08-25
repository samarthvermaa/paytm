import { NextFunction, Request, Response } from "express";
import { checkUserAlreadyExits } from "../../services";
import { TUser, TUserLogin } from "../../types";
import { compareHash } from "../../utils";

export const validateUserData = <validationType>(
  req: Request,
  res: Response,
  next: NextFunction,
  validationRule: any
) => {
  try {
    const userData: validationType = req.body;
    const validate = validationRule.safeParse(userData);
    if (validate.success) {
      next();
    } else {
      throw validate.error.format();
    }
  } catch (error) {
    return res.status(400).json({ error: 400, message: error });
  }
};

export const checkUserExits = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData: TUser = req.body;
  const { email } = userData;
  try {
    const isUserExists = await checkUserAlreadyExits(email);
    if (isUserExists) {
      return res.status(409).send({
        error: 409,
        message: "User is already registered with this email",
      });
    } else {
      next();
    }
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData: TUserLogin = req.body;
  const { email, password } = userData;
  try {
    const user = await checkUserAlreadyExits(email);
    if (user) {
      const result = await compareHash(password, user.password);
      if (result) {
        next();
      } else {
        return res.status(401).send({
          error: 401,
          message: "Invalid credentials",
        });
      }
    } else {
      return res.status(401).send({
        error: 401,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    throw error;
  }
};

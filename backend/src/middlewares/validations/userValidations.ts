import { z } from "zod";
import { TUser, User } from "../../types";
import { NextFunction, Request, Response } from "express";
import { userModel } from "../../db";
import { checkUserAlreadyExits } from "../../services";

export const validateUserData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData: TUser = req.body;
    const validate = User.safeParse(userData);
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

import { NextFunction, Request, Response } from "express";
import { getUserBalance, transferUserBalance } from "../services";
export const getBalance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email;
    const data = await getUserBalance(email);
    return res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

export const transferBalance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, to, amount } = req.body;
    await transferUserBalance(email, to, amount);
    return res.status(200).send({
      message: "Transfer successful",
    });
  } catch (error) {
    next(error);
  }
};

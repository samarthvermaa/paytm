import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  console.log("user can signup");
  return res.status(201).send({ message: "User has been saved successfully" });
};

export const validateUser = async (req: Request, res: Response) => {
  console.log("user has been successfully validated");
  return res.status(201).send({ message: "user has been validated" });
};

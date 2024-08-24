import { Request, Response } from "express";
import { addUser } from "../services";

export const registerUser = async (req: Request, res: Response) => {
  const { body } = req;
  const user = await addUser(body);
  return res.status(201).send(user);
};

export const loginUser = async (req: Request, res: Response) => {
  console.log("user has been successfully validated");
  return res.status(201).send({ message: "user has been validated" });
};

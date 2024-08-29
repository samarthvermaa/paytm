import { NextFunction, Request, Response } from "express";
import {
  addUser,
  generateUserToken,
  updateUser,
  getBulkUsers,
} from "../services";

export const registerUser = async (req: Request, res: Response) => {
  const { body } = req;
  const user = await addUser(body);
  return res.status(201).send(user);
};

export const loginUser = async (req: Request, res: Response) => {
  const token = generateUserToken(req.body.email);
  return res.status(200).send({ token });
};

export const updateUserDetails = async (req: Request, res: Response) => {
  const user = await updateUser(req.body);
  return res.status(200).send({ user });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryString = req.query;
    const result = await getBulkUsers(queryString);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

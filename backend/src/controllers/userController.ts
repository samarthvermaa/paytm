import { Request, Response } from "express";
import { addUser, generateUserToken } from "../services";

export const registerUser = async (req: Request, res: Response) => {
  const { body } = req;
  const user = await addUser(body);
  return res.status(201).send(user);
};

export const loginUser = async (req: Request, res: Response) => {
  const token = generateUserToken(req.body.email);
  return res.status(200).send({ token });
};

export const home = (req: Request, res: Response) => {
  return res
    .status(200)
    .send(
      "<html><head><title>Home</title></head><body>This is my home page</body></html>"
    );
};

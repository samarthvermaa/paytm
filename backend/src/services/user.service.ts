import { JWT_SECRET } from "../config";
import { checkUserExits, saveUser } from "../repositories";
import { TUser } from "../types";
import { createHash } from "../utils";
import jwt from "jsonwebtoken";

export const checkUserAlreadyExits = async (email: string): Promise<any> => {
  try {
    return await checkUserExits(email);
  } catch (error) {
    throw error;
  }
};

export const addUser = async (user: TUser) => {
  const dbUser = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: await createHash(user.password),
  };
  try {
    return await saveUser(dbUser);
  } catch (error) {
    throw error;
  }
};

export const generateUserToken = (email: string) => {
  return jwt.sign({ email }, JWT_SECRET);
};

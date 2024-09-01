import { JWT_SECRET } from "../config";
import {
  checkUserExits,
  saveUser,
  modifyUser,
  getAllUsers,
  addBankAccount,
} from "../repositories";
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
  try {
    const createdUser = await saveUser(user);
    await addBankAccount(createdUser._id);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

export const generateUserToken = (email: string) => {
  return jwt.sign({ email }, JWT_SECRET);
};

export const updateUser = async (requestData: any) => {
  const { email } = requestData;
  if (email && Object.keys(requestData).length > 1) {
    try {
      return await modifyUser(email, requestData);
    } catch (error) {
      throw error;
    }
  }
};

export const getBulkUsers = async (filterData: any) => {
  const query = filterData.filter || undefined;
  if (!query) {
    return getAllUsers();
  }
  return await getAllUsers(query);
};

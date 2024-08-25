import { userModel } from "../db";

export const checkUserExits = async (email: string) => {
  const user = await userModel.findOne({ email });
  return user;
};

export const saveUser = async (user: any) => {
  const savedUser = await userModel.create(user);
  return savedUser;
};

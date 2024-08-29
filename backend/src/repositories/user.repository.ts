import { userModel } from "../db";
import { createHash } from "../utils";

export const checkUserExits = async (email: string) => {
  const user = await userModel.findOne({ email });
  return user;
};

export const saveUser = async (user: any) => {
  const dbUser = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: await createHash(user.password),
  };
  const savedUser = await userModel.create(dbUser);
  return savedUser;
};

export const modifyUser = async (email: string, requestData: any) => {
  const updateData: any = {};
  if (requestData.firstName) updateData.firstName = requestData.firstName;
  if (requestData.lastName) updateData.lastName = requestData.lastName;
  if (requestData.password)
    updateData.password = await createHash(requestData.password);

  const modifiedUser = await userModel.findOneAndUpdate({ email }, updateData, {
    new: true,
  });
  return modifiedUser;
};

export const getAllUsers = async (query: string) => {
  const users = await userModel.find({
    $or: [
      { firstName: new RegExp(".*" + query + ".*") },
      { lastName: new RegExp(".*" + query + ".*") },
    ],
  });
  return users.map((user) => ({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    _id: user._id,
  }));
};

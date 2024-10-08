import { userModel } from "../db";
import { accountsModel } from "../db/accounts.schema";
import { createHash } from "../utils";

export const checkUserExits = async (email: string) => {
  const user = await userModel.findOne({ email });
  return user;
};

export const checkUserExitsById = async (id: string) => {
  const user = await userModel.findById(id);
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

export const addBankAccount = async (userId: any) => {
  await accountsModel.create({ userId, balance: 1 + Math.random() * 10000 });
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

export const getAllUsers = async (query?: string) => {
  const users = query
    ? await userModel.find({
        $or: [
          { firstName: new RegExp(".*" + query + ".*") },
          { lastName: new RegExp(".*" + query + ".*") },
        ],
      })
    : await userModel.find();
  return users.map((user) => ({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    _id: user._id,
  }));
};

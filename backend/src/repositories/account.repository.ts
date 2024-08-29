import { ClientSession } from "mongoose";
import { userModel, accountsModel } from "../db";

export const getBalanceForUser = async (
  email: string,
  session?: ClientSession
) => {
  return await userModel.aggregate(
    [
      {
        $match: {
          email: email,
        },
      },
      {
        $lookup: {
          from: "accounts",
          localField: "_id",
          foreignField: "userId",
          as: "accountDetails",
        },
      },
      { $unwind: "$accountDetails" },
      { $addFields: { balance: "$accountDetails.balance" } },
      {
        $project: {
          email: 1,
          firstName: 1,
          lastName: 1,
          balance: 1,
        },
      },
    ],
    { session }
  );
};

export const transferBalance = async (
  fromId: string,
  toId: string,
  amount: number,
  session?: any
) => {
  await accountsModel.findOneAndUpdate(
    { userId: fromId },
    { $inc: { balance: -amount } },
    { session, new: true }
  );

  await accountsModel.findOneAndUpdate(
    { userId: toId },
    { $inc: { balance: amount } },
    { session, new: true }
  );
};

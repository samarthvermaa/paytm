import { ClientSession } from "mongoose";
import { userModel, accountsModel } from "../db";
import { ObjectId } from "bson";

export const getBalanceForUser = async (
  email?: string,
  _id?: string,
  session?: ClientSession
) => {
  const andClause = [];
  if (email) {
    andClause.push({ email: email });
  }
  if (_id) {
    andClause.push({ _id: new ObjectId(_id) });
  }
  return await userModel.aggregate(
    [
      {
        $match: {
          $and: andClause,
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

import mongoose from "mongoose";
import {
  checkUserExitsById,
  getBalanceForUser,
  transferBalance,
} from "../repositories";

export const getUserBalance = async (email: string) => {
  return await getBalanceForUser(email);
};

export const transferUserBalance = async (
  fromEmail: string,
  to: string,
  amount: number
) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const fromAccount = await getBalanceForUser(fromEmail, session);
    if (
      !fromAccount ||
      !fromAccount[0]?.balance ||
      amount > fromAccount[0]?.balance
    ) {
      throw new Error("Insufficient balance");
    }
    const toAccountUser = await checkUserExitsById(to);
    if (!toAccountUser) {
      throw new Error("Invalid account");
    }
    const toAccount = await getBalanceForUser(toAccountUser.email, session);
    if (!toAccount[0] || !toAccount[0]?.balance) {
      throw new Error("Invalid account");
    }
    await transferBalance(
      fromAccount[0]._id.toString(),
      toAccount[0]._id,
      amount,
      session
    );
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  }
};

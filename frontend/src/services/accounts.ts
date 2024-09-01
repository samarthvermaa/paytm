/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { apiBaseUrl } from "../constants";

export const getUserBalance = async (token: string) => {
  return await axios.get(`${apiBaseUrl}/v1/account/balance`, {
    headers: { Authorization: token },
  });
};

export const transferAmount = async (
  transferTo: string,
  amount: number,
  token: string
) => {
  const transferAmountData = {
    to: transferTo,
    amount,
  };
  return await axios.post(
    `${apiBaseUrl}/v1/account/transfer`,
    transferAmountData,
    {
      headers: { Authorization: token },
    }
  );
};

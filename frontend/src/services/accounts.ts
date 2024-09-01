/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { apiBaseUrl } from "../constants";

export const getUserBalance = async (
  token: string
): Promise<AxiosResponse<any>> => {
  return await axios.get(`${apiBaseUrl}/v1/account/balance`, {
    headers: { Authorization: token },
  });
};

export const transferAmount = async (
  transferTo: string,
  amount: number,
  token: string
): Promise<AxiosResponse<any>> => {
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

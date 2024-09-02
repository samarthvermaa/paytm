/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router-dom";
import Button from "../baseComponents/Button";
import { useLocalStorage, useTransferToUser } from "../hooks";
import { transferAmount } from "../services";
import { useState } from "react";

export const TransferMoney = () => {
  const [searchParams] = useSearchParams();

  // Get a specific query parameter
  const transferTo = searchParams.get("to") || "";
  const transferToUser: any = useTransferToUser(transferTo);
  const [token] = useLocalStorage("token");
  const [amount, setAmount] = useState(0);

  const transferUserAmount = async (event: any) => {
    event.preventDefault();
    try {
      if (transferTo && amount) {
        const { status } = await transferAmount(transferTo, amount, token);
        if (status == 200) {
          alert("amount transfered");
        }
      }
    } catch (error: any) {
      if (error?.status === 409 || error?.response?.status === 409) {
        alert(
          "Data for this user is already saved with us. Please continue to login."
        );
      } else if (error.status === 400) {
        alert("Invalid data provide. Please provide valid data.");
      } else {
        alert(error?.response?.data?.message || "Something went wrong...");
      }
    }
  };
  return (
    <>
      <div className="flex flex-col items-center p-2 ">
        <b>Send Money</b>
        <b>
          to - {transferToUser?.firstName} {transferToUser?.lastName}
        </b>
        <form className="p-5" onSubmit={transferUserAmount}>
          <label className="block">Amount(in Rs.)</label>
          <input
            className="border border-black"
            type="text"
            placeholder="Enter Amount"
            onChange={(e: any) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
          <div className="flex flex-col justify-center items-center p-4">
            <Button type="submit">Initiate Transfer</Button>
          </div>
        </form>
      </div>
    </>
  );
};

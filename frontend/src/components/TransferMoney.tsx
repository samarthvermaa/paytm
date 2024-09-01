/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../baseComponents/Button";

export const TransferMoney = ({ transferTo }: any) => {
  return (
    <>
      <div className="flex flex-col items-center p-2 ">
        <b>Send Money</b>
        <b>{transferTo}</b>
        <form className="p-5">
          <label className="block">Amount(in Rs.)</label>
          <input
            className="border border-black"
            type="text"
            placeholder="Enter Amount"
          />
          <Button>Initiate Transfer</Button>
        </form>
      </div>
    </>
  );
};

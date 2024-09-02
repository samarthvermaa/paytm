/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import Button from "../baseComponents/Button";
export const User = ({ sno, fname, lname, id }: any) => {
  const navigate = useNavigate();
  const transferToUser = (id: string) => {
    navigate(`/send?to=${id}`);
  };
  return (
    <div className="grid grid-cols-12 place-items-center">
      <p className="col-span-1">{sno}</p>
      <p className="col-span-8">
        {fname} {lname}
      </p>
      <Button
        className="col-span-3 self-end"
        onClick={() => {
          transferToUser(id);
        }}
      >
        Send Money
      </Button>
    </div>
  );
};

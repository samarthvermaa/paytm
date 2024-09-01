/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../baseComponents/Button";
export const User = ({ sno, fname, lname }: any) => {
  console.log(sno, fname);
  return (
    <div className="grid grid-cols-12 place-items-center">
      <p className="col-span-1">{sno}</p>
      <p className="col-span-8">
        {fname} {lname}
      </p>
      <Button className="col-span-3 self-end">Send Money</Button>
    </div>
  );
};

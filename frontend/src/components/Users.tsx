/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "./User";
export const Users = ({ userDetails }: any) => {
  console.log(userDetails.length);
  return (
    <div>
      {userDetails &&
        userDetails.length > 0 &&
        userDetails.map((user: any, index: number) => (
          <User
            key={user._id}
            sno={index}
            fname={user.firstName}
            lname={user.lastName}
          />
        ))}
    </div>
  );
};

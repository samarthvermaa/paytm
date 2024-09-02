/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "./User";
export const Users = ({ userDetails }: any) => {
  return (
    <div>
      {userDetails &&
        userDetails.length > 0 &&
        userDetails.map((user: any, index: number) => (
          <User
            key={user._id}
            sno={index + 1}
            fname={user.firstName}
            lname={user.lastName}
            id={user._id}
          />
        ))}
    </div>
  );
};

import { Users } from "./Users";

export const Dashboard = () => {
  const balance = "$50000";
  return (
    <>
      <div className="flex flex-col p-5">
        <div className="flex flex-1 py-2 justify-between">
          <p>Payment App</p>
          <p>Hello, User</p>
        </div>
        <div className="py-2">
          <p>Your Balance: {balance}</p>
        </div>
        <div className="py-2">
          <p>Users</p>
        </div>
        <div className="py-2">
          <input type="text" placeholder="Search User..." />
        </div>
        <Users
          userDetails={[
            { _id: "432423", firstName: "Samarth", lastName: "Verma" },
          ]}
        />
      </div>
    </>
  );
};

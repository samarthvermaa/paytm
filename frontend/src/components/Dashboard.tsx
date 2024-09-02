import { useNavigate } from "react-router-dom";
import Button from "../baseComponents/Button";
import { useBalance, useLocalStorage, useUsers } from "../hooks";
import { Users } from "./Users";
import { useState } from "react";

export const Dashboard = () => {
  const [token, setToken] = useLocalStorage("token");
  const currentUser = useBalance();
  const [search, setSearch] = useState("");
  const users = useUsers(search);
  const navigate = useNavigate();
  return token ? (
    <>
      <div className="flex flex-col p-5">
        <div className="flex flex-1 py-2 justify-between">
          <p>Payment App</p>
          <Button
            onClick={() => {
              setToken("");
              navigate("/signin");
            }}
          >
            Hello, {currentUser?.firstName.toUpperCase()}
          </Button>
        </div>
        <div className="py-2">
          <p>Your Balance: {currentUser?.balance}</p>
        </div>
        <div className="py-2">
          <p>Users</p>
        </div>
        <div className="py-2">
          <input
            type="text"
            placeholder="Search User..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
        <Users userDetails={users} />
      </div>
    </>
  ) : (
    <p>Authorized Access. Not allowed to access</p>
  );
};

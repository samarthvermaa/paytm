/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Button from "../baseComponents/Button";
import { useState } from "react";
import { signIn } from "../services";
import { useLocalStorage } from "../hooks";

const initialUser = {
  email: "",
  password: "",
};
export const SignIn = () => {
  const [user, setUser] = useState(initialUser);
  const [localStorage, setLocalStorage] = useLocalStorage("token");
  const navigate = useNavigate();

  const updateUserState = (event: any) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const loginUserData = async (event: any) => {
    event.preventDefault();
    try {
      const { status, data } = await signIn(user.email, user.password);

      if (status === 200) {
        setUser(initialUser);
        setLocalStorage(data.token);
        navigate("/dashboard");
      }
    } catch (error: any) {
      if (error?.status === 401 || error?.response?.status === 401) {
        alert("Invalid Credentials");
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
        <b>Sign In</b>
        <p>Enter your credentials to access your account</p>

        <form className="p-5">
          <label className="block">Email</label>
          <input
            className="border border-black"
            type="text"
            placeholder="johndoe@gmmail.com"
            name="email"
            onChange={updateUserState}
            value={user.email}
          />
          <label className="block">Password</label>
          <input
            className="border border-black"
            type="password"
            name="password"
            onChange={updateUserState}
            value={user.password}
          />
          <Button type="submit" onClick={loginUserData}>
            Sign In
          </Button>
        </form>
        <p>
          Do not have an Account?{" "}
          <u>
            <Link to={"/signup"}>Sign Up</Link>
          </u>
        </p>
      </div>
    </>
  );
};

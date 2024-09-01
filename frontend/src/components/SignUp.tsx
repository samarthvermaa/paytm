/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Button from "../baseComponents/Button";
import { useRef, useState } from "react";
import { signUp } from "../services";

const initialUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
export const SignUp = () => {
  const [user, setUser] = useState(initialUser);
  const firstNameRef = useRef();

  const updateUserState = (event: any) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const createAndSaveUserData = async (event: any) => {
    event.preventDefault();
    try {
      const { status } = await signUp(
        user.email,
        user.firstName,
        user.lastName,
        user.password
      );

      if (status === 201) {
        alert("Data has been successfully saved. Please proceed to login.");
        setUser(initialUser);
        (firstNameRef?.current as any).focus();
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
        <b>Sign Up</b>
        <p>Enter your information to create an account</p>

        <form className="p-5" onSubmit={createAndSaveUserData}>
          <label className="block">First Name</label>
          <input
            className="border border-black"
            type="text"
            placeholder="john"
            name="firstName"
            onChange={updateUserState}
            value={user.firstName}
            ref={firstNameRef}
          />
          <label className="block">Last Name</label>
          <input
            className="border border-black"
            type="text"
            placeholder="doe"
            name="lastName"
            onChange={updateUserState}
            value={user.lastName}
          />
          <label className="block">Email</label>
          <input
            className="border border-black"
            type="email"
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
          <div className="flex flex-col justify-center items-center p-4">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>

        <p>
          Already have an account?{" "}
          <u>
            <Link to={"/signin"}>Login</Link>
          </u>
        </p>
      </div>
    </>
  );
};

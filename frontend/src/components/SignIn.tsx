import { Link } from "react-router-dom";
import Button from "../baseComponents/Button";

export const SignIn = () => {
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
          />
          <label className="block">Password</label>
          <input className="border border-black" type="password" />
        </form>
        <Button>Sign In</Button>
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

import { Link } from "react-router-dom";
import Button from "../baseComponents/Button";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center p-2 ">
        <b>Sign Up</b>
        <p>Enter your information to create an account</p>

        <form className="p-5">
          <label className="block">First Name</label>
          <input
            className="border border-black"
            type="text"
            placeholder="john"
          />
          <label className="block">Last Name</label>
          <input
            className="border border-black"
            type="text"
            placeholder="doe"
          />
          <label className="block">Email</label>
          <input
            className="border border-black"
            type="text"
            placeholder="johndoe@gmmail.com"
          />
          <label className="block">Password</label>
          <input className="border border-black" type="password" />
        </form>
        <Button>Sign Up</Button>
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

export default SignUp;

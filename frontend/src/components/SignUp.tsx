import React, { useState } from "react";
import { MyModal } from "../baseComponents/MyModal";

const SignUp = () => {
  const [modalIsOpen, setIsOpen] = useState(true);
  return (
    <div>
      <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col items-center">
          <b>Sign Up</b>
          <p>Enter your information to create an account</p>
        </div>
        <form>
          <label className="block">First Name</label>
          <input className="border border-black" type="text" />
          <label className="block">Last Name</label>
          <input className="border border-black" type="text" />
          <label className="block">Email</label>
          <input className="border border-black" type="text" />
          <label className="block">Password</label>
          <input className="border border-black" type="text" />
        </form>
      </MyModal>
    </div>
  );
};

export default SignUp;

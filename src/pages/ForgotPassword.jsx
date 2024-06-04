import React from "react";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <div className="py-5 d-flex justify-content-center align-items-center" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h1 className="text-center" style={{fontSize: "28px"}}>Forgot Password</h1>
        <p className="text-center">Please enter your email to get reset password link.</p>
        <form action="">
          <CustomInput type="email" label="Email Address" i_id="email" />
          <button className="border-0 rounded-2 px-3 py-2 w-100 text-dark fw-bold" style={{ background: "#ffd333" }} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

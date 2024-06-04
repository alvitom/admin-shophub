import React from "react";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <div className="py-5 d-flex justify-content-center align-items-center" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h1 className="text-center" style={{ fontSize: "28px" }}>
          Reset Password
        </h1>
        <p className="text-center">Please enter your new password</p>
        <form action="">
          <CustomInput type="password" label="New Password" i_id="password" />
          <CustomInput type="password" label="Confirm Password" i_id="confirm-password" />
          <button className="border-0 rounded-2 px-3 py-2 w-100 text-dark fw-bold" style={{ background: "#ffd333" }} type="submit">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

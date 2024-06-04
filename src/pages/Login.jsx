import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userSchema = Yup.object({
    email: Yup.string().email("Email Should be valid").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isLoading, isError, isSuccess, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isLoading, isError, isSuccess]);
  return (
    <div className="py-5 d-flex justify-content-center align-items-center" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h1 className="text-center" style={{ fontSize: "28px" }}>
          Login
        </h1>
        <p className="text-center">Login to your account to continue</p>
        <div className="error text-center">{message.message === "Rejected" && "You are not an admin"}</div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput type="text" name="email" label="Email Address" i_id="email" val={formik.values.email} onCh={formik.handleChange("email")} />
          <div className="error">{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>
          <CustomInput type="password" name="password" label="Password" i_id="password" val={formik.values.password} onCh={formik.handleChange("password")} />
          <div className="error">{formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}</div>
          <div className="d-flex justify-content-between my-4 align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="remember-me" />
              <label className="form-check-label" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button className="border-0 px-3 py-2 w-100 text-dark fw-bold rounded-2" style={{ background: "#ffd333" }} type="submit">
            Login
          </button>
          <div className="d-flex align-items-center justify-content-center my-4 gap-2">
            <div className="border w-25"></div>
            <p className="mb-0" style={{ fontSize: "10px", color: "#777" }}>
              OR CONTINUE WITH
            </p>
            <div className="border w-25"></div>
          </div>
          <div className="d-flex align-items-center justify-content-around my-4">
            <button className="border-0 rounded-2 px-3 py-2" style={{ backgroundColor: "#ccc" }}>
              Google
            </button>
            <button className="border-0 rounded-2 px-3 py-2" style={{ backgroundColor: "#ccc" }}>
              Facebook
            </button>
            <button className="border-0 rounded-2 px-3 py-2" style={{ backgroundColor: "#ccc" }}>
              Twitter
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2 my-3">
            <span>Don't have an account?</span>
            <a href="/sign-up">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

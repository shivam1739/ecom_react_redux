import "./signInScreen.css";
import React, { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { PRIMARY_COLOR } from "../../utils/assets";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import Toaster from "../../components/toaster/Toaster";
import { userAuthSignIn } from "../../services/auth.services";
import { useNavigate } from "react-router-dom";

import {
  userLoginFail,
  userLoginRequest,
  userLoginSuccess,
} from "../../actions/auth.actions";

const SigninScreen = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const initError = {
    emailError: "",
    passwordError: "",
  };
  const { loading, error, message, userInfo } = useSelector(
    (state) => state.auth
  );
  const [userData, setUserDate] = useState(initialState);
  const [validationError, setValidationError] = useState(initError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("x-access-token");
    if (token) {
      navigate("/");
    }
  }, [userInfo, message]);

  const handleChange = (e) => {
    setValidationError(initError);
    const { name, value } = e.target;
    setUserDate({ ...userData, [name]: value });
  };

  const formValidation = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex =
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    e.preventDefault();
    if (!emailRegex.test(userData.email.trim())) {
      setValidationError({ emailError: "* name should not be empty" });
      return false;
    } else if (!passRegex.test(userData.password.trim())) {
      setValidationError({
        passwordError: "*min 6char and alphanumeric with speacil char",
      });
      return false;
    }
    return true;
  };

  const handleSignIn = async (e) => {
    if (!formValidation(e)) {
      return;
    }
    try {
      dispatch(userLoginRequest());
      const response = await userAuthSignIn(userData);
      console.log(response, "respose form screen");
      if ((response.message = "successfully sign in")) {
        dispatch(userLoginSuccess(response));
        localStorage.setItem("x-access-token", response.token);
        localStorage.setItem("userType", response.roles[0]);
        localStorage.setItem("userId", response.data.id);
      }
    } catch (err) {
      console.log(err, "=====errr======");
      dispatch(userLoginFail(err.message));
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      {error || message ? <Toaster props={{ error, message }} /> : null}
      <div className="main_signUp_con">
        <form style={{ border: `solid ${PRIMARY_COLOR}` }}>
          <h1>Logo</h1>

          <div className="field">
            <label>Email</label>
            <Input
              props={{
                type: "email",
                name: "email",
                placeholder: "Email",
                value: userData.email,
                setValue: handleChange,
              }}
            />
            <p className="error" name="emailError">
              {validationError.emailError}
            </p>
          </div>

          <div className="field">
            <label>Password</label>
            <Input
              props={{
                type: "password",
                name: "password",
                placeholder: "password",
                value: userData.password,
                setValue: handleChange,
              }}
            />
            <p className="error">{validationError.passwordError}</p>
          </div>

          <Button props={{ name: "Login", handleClick: handleSignIn }} />
          <p className="swithchLogin">
            <NavLink className="navLink" to="/register">
              don't have an account?SignUp
            </NavLink>
          </p>

          {/* <button></button> */}
        </form>
      </div>
    </>
  );
};

export default SigninScreen;

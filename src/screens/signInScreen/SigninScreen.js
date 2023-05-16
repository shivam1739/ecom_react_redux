import "./signInScreen.css";
import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { PRIMARY_COLOR } from "../../utils/assets";
import { NavLink } from "react-router-dom";
const SigninScreen = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const initError = {
    emailError: "",
    passwordError: "",
  };
  const [userData, setUserDate] = useState(initialState);
  const [error, setError] = useState(initError);

  const handleChange = (e) => {
    setError(initError);
    const { name, value } = e.target;
    setUserDate({ ...userData, [name]: value });
  };

  const handleSignUp = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
    e.preventDefault();
    if (userData.name.trim().length < 2) {
      setError({ nameError: "* name should not be empty" });
      return;
    } else if (!emailRegex.test(userData.email.trim())) {
      setError({ emailError: "* invalid email" });
      return;
    } else if (!passRegex.test(userData.password.trim())) {
      setError({ passwordError: "* atleast min 8char and alphanumeric" });
      return;
    }
    console.log(userData);
  };

  return (
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
            {error.emailError}
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
          <p className="error">{error.passwordError}</p>
        </div>

        <Button props={{ name: "Login", handleClick: handleSignUp }} />
        <p className="swithchLogin">
          <NavLink className="navLink" to="/register">
            don't have an account?SignUp
          </NavLink>
        </p>

        {/* <button></button> */}
      </form>
    </div>
  );
};

export default SigninScreen;

import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./registerScreen.css";
import { PRIMARY_COLOR } from "../../utils/assets";
import { NavLink } from "react-router-dom";
import { userAuthRegister } from "../../services/auth.services";
import Loading from "../../components/loading/Loading";
import Toaster from "../../components/toaster/Toaster";

const RegisterScreen = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const initError = {
    nameError: "",
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

  const handleSignUp = async (e) => {
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

    const response = await userAuthRegister(userData);
    console.log(response, "response from auth.js");
  };

  return (
    <>
      <Toaster props={{ error: "success" }} />
      <div className="main_signUp_con">
        <form style={{ border: `solid ${PRIMARY_COLOR}` }}>
          <h1>Logo</h1>

          <div className="field">
            <label>Name</label>
            <Input
              props={{
                type: "text",
                name: "name",
                placeholder: "Name",
                value: userData.name,
                setValue: handleChange,
              }}
            />
            <p className="error" name="nameError">
              {error.nameError}
            </p>
          </div>
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

          <Button props={{ name: "signUp", handleClick: handleSignUp }} />
          <p className="swithchLogin">
            <NavLink className="navLink" to="/signIn">
              alrady have an account?login
            </NavLink>
          </p>

          {/* <button></button> */}
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;

import React, { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./registerScreen.css";
import { PRIMARY_COLOR } from "../../utils/assets";
import { NavLink } from "react-router-dom";
import { userAuthRegister } from "../../services/auth.services";
import Loading from "../../components/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import Toaster from "../../components/toaster/Toaster";
import { useNavigate } from "react-router-dom";
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
} from "../../actions/auth.actions";

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
  const [validationError, setValidationError] = useState(initError);
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

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
    if (userData.name.trim().length < 2) {
      setValidationError({ nameError: "* name should not be empty" });
      return false;
    } else if (!emailRegex.test(userData.email.trim())) {
      setValidationError({ emailError: "* invalid email" });
      return false;
    } else if (!passRegex.test(userData.password.trim())) {
      setValidationError({
        passwordError: "*min 6char and alphanumeric with speacil char",
      });
      return false;
    }
    return true;
  };

  const handleSignUp = async (e) => {
    console.log(userData);
    console.log(loading, "loading");

    try {
      if (!formValidation(e)) {
        return;
      }
      dispatch(userRegisterRequest());
      const response = await userAuthRegister(userData);

      if (response.message == "succsessfull signup") {
        response.data.password = undefined;
        dispatch(userRegisterSuccess(response));
        // setToasterData({ message: response.data.message });
        navigate("/signIn");
      }
    } catch (err) {
      dispatch(userRegisterFail(err.message));
    }
  };
  console.log(loading, "loading");
  return (
    <>
      {loading ? <Loading /> : null}
      {error || message ? <Toaster props={{ error, message }} /> : null}
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
              {validationError.nameError}
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

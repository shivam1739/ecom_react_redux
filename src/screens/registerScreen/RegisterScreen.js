import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./registerScreen.css";
import { BACKGROUND_COLOR } from "../../utils/assets";

const RegisterScreen = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserDate] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDate({ ...userData, [name]: value });
  };
  console.log("object");
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="main_signUp_con">
      <h1>Logo</h1>
      <form>
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
        </div>
        <Button props={{ name: "signUp", handleClick: handleSignUp }} />

        {/* <button></button> */}
      </form>
      {/* <Button /> */}
    </div>
  );
};

export default RegisterScreen;

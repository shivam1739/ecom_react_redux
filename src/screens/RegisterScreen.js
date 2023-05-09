import React, { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const RegisterScreen = () => {
  const [userData, setUserDate] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDate({ ...userData, [name]: value });
  };
  console.log("object");
  const handleClick = () => {};
  return (
    <div>
      <h1>Logo</h1>
      <form>
        <div>
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
        <div>
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
        <div>
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
        <Button props={{ name: "SignUp" }} />

        {/* <button></button> */}
      </form>
    </div>
  );
};

export default RegisterScreen;

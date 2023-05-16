import React, { useState } from "react";
import "./userPopup.css";
import { FaUserEdit } from "react-icons/fa";
import Button from "../button/Button";
import { BUTTON_COLOR } from "../../utils/assets";
import { useNavigate } from "react-router-dom";

const UserPopup = ({ props }) => {
  const [btnLogin, setBtn] = useState(() => false);
  const navigate = useNavigate();

  const btnStyle = {
    width: "100%",
    height: "2rem",
    backgroundColor: BUTTON_COLOR,
    color: "white",
    fill: "solid",
    fontWeight: "bolder",
    borderRadius: "5px",
    border: "none",
  };

  const handleClick = () => {
    if (!btnLogin) {
      navigate("/signIn");
    } else {
      localStorage.clear();
    }
    props.setUserPopup(false);
    props.setMenu(false);
  };
  return (
    <div className="userpop">
      <i className="userIcon">
        <FaUserEdit /> Edit profile
      </i>
      <Button
        props={{
          handleClick,
          name: btnLogin ? "Logout" : "Login",
          style: btnStyle,
        }}
      />
    </div>
  );
};

export default UserPopup;

import React, { useState } from "react";
import "./userPopup.css";
import { FaUserEdit } from "react-icons/fa";
import Button from "../button/Button";
import { BUTTON_COLOR } from "../../utils/assets";
import { useNavigate } from "react-router-dom";

const UserPopup = ({ props }) => {
  const [btn, setBtn] = useState(() => false);
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
    if (!btn) {
      navigate("/signIn");
    }
    props.setUserPopup(false);
    props.setMenu(false);
  };
  return (
    <div className="userpop">
      <li>
        <FaUserEdit /> Edit profile
      </li>
      <Button
        props={{ handleClick, name: btn ? "Logout" : "Login", style: btnStyle }}
      />
    </div>
  );
};

export default UserPopup;

import React, { useEffect, useState } from "react";
import "./userPopup.css";
import { FaUserEdit } from "react-icons/fa";
import Button from "../button/Button";
import { BUTTON_COLOR } from "../../utils/assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../actions/auth.actions";
import ClickOutsideWrapper from "../../utils/ClickOutsideWrapper";

const UserPopup = ({ props }) => {
  const [btnLogin, setBtn] = useState(() => false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("x-access-token");
    if (token) {
      setBtn(true);
    }
  }, []);

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
    localStorage.clear();
    if (!btnLogin) {
      navigate("/signIn");
    } else {
      dispatch(userLogout());
      localStorage.clear();
    }
    props.setUserPopup(false);
  };
  return (
    <ClickOutsideWrapper clickOutside={props.setUserPopup}>
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
    </ClickOutsideWrapper>
  );
};

export default UserPopup;

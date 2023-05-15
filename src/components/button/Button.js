import React, { memo } from "react";
import { BUTTON_COLOR } from "../../utils/assets";
const Button = ({ props }) => {
  return (
    <button
      style={
        props.style || {
          backgroundColor: BUTTON_COLOR,
          fill: "solid",
          color: "white",
          width: "40%",
          height: "2.5rem",
          fontWeight: "bolder",
          borderRadius: "5px",
          border: "none",
        }
      }
      id="btn"
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
};

export default memo(Button);

import React, { memo } from "react";

const Button = ({ props }) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

export default memo(Button);

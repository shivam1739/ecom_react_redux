import React from "react";

const Input = ({ props }) => {
  const style = props.style;
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder || ""}
      value={props.value}
      onChange={(e) => props.setValue(e)}
      style={style}
    />
  );
};

export default Input;

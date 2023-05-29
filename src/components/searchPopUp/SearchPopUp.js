import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "./searchPopUp.css";
import { BUTTON_COLOR } from "../../utils/assets";
import ClickOutsideWrapper from "../../utils/ClickOutsideWrapper";

const SearchPopUp = ({ props }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChage = (e) => {
    setSearchInput(e.target.value);
  };

  console.log(searchInput);

  const style = {
    width: "50%",
    height: "70%",
    borderRadius: "5px",
    paddingLeft: "10px",
    fontSize: "1.2rem",
  };
  const btnStyle = {
    width: "20%",
    height: "70%",
    backgroundColor: BUTTON_COLOR,
    color: "white",
    fill: "solid",
    fontWeight: "bolder",
    borderRadius: "5px",
    border: "none",
  };

  const handleSearch = () => {
    console.log("sdnasdjn");
  };

  return (
    <ClickOutsideWrapper
      classes={"searchPopUp"}
      clickOutside={props.setSearchBar}
    >
      <>
        <Input
          props={{
            type: "text",
            name: "searchBar",
            placeholder: "search hear",
            value: searchInput,
            setValue: handleChage,
            style: style,
          }}
          className="searchInp"
        />
        <Button
          className="searchBtn"
          props={{ name: "Search", style: btnStyle, handleClick: handleSearch }}
        />
      </>
    </ClickOutsideWrapper>
  );
};

export default SearchPopUp;

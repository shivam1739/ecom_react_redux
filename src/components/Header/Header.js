import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../../utils/assets";
import "./header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import SearchPopUp from "../searchPopUp/SearchPopUp";

const Header = () => {
  const [isMenu, setMenu] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: BACKGROUND_COLOR,
        color: PRIMARY_COLOR,
        position: "fixed",
        top: "0",
      }}
    >
      <div className="w-20">
        <h1>logo</h1>
      </div>

      <div className="menu">
        <div className={isMenu ? "menu-containt active" : "menu-containt"}>
          <ul className="navLi">
            <NavLink className="link" to="/home">
              <li>Home</li>
            </NavLink>
            <NavLink className="link" to="/poroducts">
              <li>Products</li>
            </NavLink>
            <NavLink className="link" to="">
              <li>Categories</li>
            </NavLink>
            <NavLink className="link" to="">
              <li>About</li>
            </NavLink>
            <NavLink className="link" to="">
              <li>Countact Us</li>
            </NavLink>
          </ul>
          <div className="right-con">
            <BiSearchAlt2
              className="icon"
              onClick={() => setSearchBar(!searchBar)}
            />
            <IoMdCart className="icon" />
            <HiUserCircle className="icon" />
          </div>
        </div>

        <div className="mobile">
          <i
            onClick={() => {
              setMenu(!isMenu);
              setSearchBar(false);
            }}
          >
            {isMenu ? (
              <AiOutlineClose color="rgba(7, 72, 74, 1)" />
            ) : (
              <FiMenu color="rgba(7, 72, 74, 1)" />
            )}
          </i>
        </div>
      </div>
      {searchBar ? (
        <SearchPopUp
          onSubmit={() => console.log("bvjvkonBlur")}
          props={{ setSearchBar }}
        />
      ) : null}
    </nav>
  );
};

export default Header;

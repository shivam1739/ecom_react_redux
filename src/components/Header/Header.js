import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import "./header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenu, setMenu] = useState(false);

  return (
    <nav
      className="w-100  h-3 d-flex header-wrapper justify-content-around align-items-center  "
      style={{
        backgroundColor: "rgba(196,196,196,1",
        color: "rgba(7,72,74,1)",
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
            <BiSearchAlt2 />
            <IoMdCart />
            <HiUserCircle />
          </div>
        </div>

        <div className="mobile">
          <i onClick={() => setMenu(!isMenu)}>
            {isMenu ? (
              <AiOutlineClose color="rgba(7, 72, 74, 1)" />
            ) : (
              <FiMenu color="rgba(7, 72, 74, 1)" />
            )}
          </i>
        </div>
      </div>
    </nav>
  );
};

export default Header;

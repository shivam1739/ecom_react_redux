import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
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

      <div className=" w-50  h-100  ">
        <ul
          className=" m-0 p-0 d-flex h-100 justify-content-between align-items-center list-unstyled fw-bolder fs-5  "
          style={{
            fontFamily: "playfair-display",
          }}
        >
          <NavLink className="text-decoration-none  " to="/home">
            <li>Home</li>
          </NavLink>

          <li>Products</li>
          <li>Categories</li>
          <li>About</li>
          <li>Countact Us</li>
        </ul>
      </div>
      <div
        className=" d-flex justify-content-between playfair-display "
        style={{ width: "7%" }}
      >
        <BiSearchAlt2 />
        <IoMdCart />
        <HiUserCircle />
      </div>
    </nav>
  );
};

export default Header;

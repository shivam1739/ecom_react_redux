import "./sideBar.css";
import React, { useState } from "react";
import sellerSidebarItems from "../../utils/sideBarData";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="sidebar">
      <div>
        {sellerSidebarItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="sidebar-link"
            activeclassName="sidebar-active"
          >
            <div className="sidebar-icon">{item.icon}</div>
            {showSideBar ? <div className="link_text">{item.name}</div> : null}
          </NavLink>
        ))}
      </div>
      <div>
        {showSideBar ? (
          <HiOutlineChevronLeft
            className="on-off"
            onClick={() => setShowSideBar(!showSideBar)}
          />
        ) : (
          <HiOutlineChevronRight
            className="on-off"
            onClick={() => setShowSideBar(!showSideBar)}
          />
        )}
      </div>
    </div>
    //   <main>{children}</main>
  );
};

export default SideBar;

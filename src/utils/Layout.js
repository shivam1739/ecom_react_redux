import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";

const Layout = ({ children }) => {
  const location = useLocation();
  const isSellerRoute = location.pathname.startsWith("/seller"); // Check if the current route starts with "/seller"
  const isSeller = localStorage.getItem("userType");
  console.log(isSeller, "isdeller");
  return (
    <div>
      <Header />

      {isSellerRoute && isSeller == "seller" && <SideBar />}
      {/* Render the sidebar for seller routes */}
      {/* {children} Render the main content of each page */}
    </div>
  );
};

export default Layout;

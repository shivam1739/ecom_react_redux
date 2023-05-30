import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const SellerProtectedRoute = () => {
  //   const { token, userInfo } = useSelector((state) => state.auth);
  //   console.log(token, userInfo);
  const token = localStorage.getItem("x-access-token");
  const userType = localStorage.getItem("userType");
  return userType === "seller" ? <Outlet /> : <Navigate to="/" />;
};

export default SellerProtectedRoute;

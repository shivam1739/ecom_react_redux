import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SellerStore from "./screens/sellerStore/SellerStore";
import NotFoundScreen from "./screens/NotFoundScreen";
import ProductsScreen from "./screens/ProductsScreen";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RegisterScreen from "./screens/registerScreen/RegisterScreen";
import SigninScreen from "./screens/signInScreen/SigninScreen";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sideBar/SideBar";
import SellerProtectedRoute from "./utils/SellerProtectedRoute";
import SellerDashBorad from "./screens/sellerDashBoard/SellerDashBoard";
import Layout from "./utils/Layout";

function App() {
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {}, []);
  // console.log(sideBarData, "sideBarData");

  console.log(window.location.href, "aap.js");
  return (
    <div className="App">
      <Router>
        <Layout />

        <Routes>
          <Route path="/signIn" element={<SigninScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search/:keyword" element={<HomeScreen />} />
          <Route path="/page/:pageNumber" element={<HomeScreen />} />
          <Route
            path="/search/:keyword/page/:pageNumber"
            exact
            element={<HomeScreen />}
          />
          <Route path="/poroducts" exact element={<ProductsScreen />} />

          <Route element={<SellerProtectedRoute />}>
            <Route
              index
              path="/seller/dashboard"
              element={<SellerDashBorad />}
            />
          </Route>

          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/register/seller" element={<RegisterScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
          <Route path="/profile/edit/:id" element={<ProfileScreen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

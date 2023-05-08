import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Switch>
            <Route path="/" exact component={<LoginScreen />} />
            <Route path="/home" component={<HomeScreen />} />
            <Route path="/search/:keyword" exact component={<HomeScreen />} />
            <Route path="/page/:pageNumber" exact component={<HomeScreen />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              exact
              component={<HomeScreen />}
            />
            <Route path="/product/:id" component={<ProductScreen />} />
            <Route path="/cart/:id?" component={<CartScreen />} />
            <Route path="/register" component={<RegisterScreen />} />
            <Route path="/shipping" component={<ShippingScreen />} />
            <Route path="/payment" component={<PaymentScreen />} />
            <Route path="/placeorder" component={<PlaceOrderScreen />} />
            <Route path="/order/:id" component={<OrderScreen />} />
            <Route path="/profile" component={<ProfileScreen />} />
            <Route path="*" component={<NotFoundScreen />} />
            <Route path="/profile/edit/:id" component={<ProfileScreen />} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

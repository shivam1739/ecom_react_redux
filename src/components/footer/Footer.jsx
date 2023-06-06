import React from "react";

const Footer = () => {
  const footerData = [
    {
      heading: "My Account",
      contents: [
        { name: "Sign in", path: "/signIn" },
        { name: "Register", path: "/register" },
        { name: "Order Status", path: "/Order staus" },
      ],
    },
    {
      heading: "Shop",
      contents: [
        { name: "All Products", path: "/" },
        { name: "Electrinics", path: "/" },
        { name: "furinture", path: "/" },
      ],
    },
    {
      heading: "Leagal Stuff",
      contents: [
        { name: "Shipping & Delivery", path: "/" },
        { name: "Tearms & Conditions", path: "/" },
        { name: "Privacy & policy", path: "/" },
      ],
    },
  ];

  return (
    <div>
      <section></section>
      <section></section>
    </div>
  );
};

export default Footer;

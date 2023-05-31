import React from "react";
import TopProducts from "../../components/topProducts/TopProducts";
import "./sellerDashBoard.css";
import { SELLER_PAGE_BG } from "../../utils/assets";
const SellerDashBorad = () => {
  return (
    <div
      className="sellerDashBoard"
      style={{ backgroundColor: SELLER_PAGE_BG }}
    >
      <TopProducts />
    </div>
  );
};

export default SellerDashBorad;

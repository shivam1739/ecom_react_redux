import React from "react";
import TopProducts from "../../components/topProducts/TopProducts";
import "./sellerDashBoard.css";
import {
  DASHBOARD_PAGE_BG,
  DASHBOARD_PAGE_COMPONENT_BG,
} from "../../utils/assets";
import LineChart from "../../components/lineChart/LineChart";
const SellerDashBorad = () => {
  return (
    <div
      className="sellerDashBoard"
      style={{ backgroundColor: DASHBOARD_PAGE_BG }}
    >
      <TopProducts />
      <section
        style={{
          width: "40rem",
          borderRadius: "10px",
          height: "20rem",
          backgroundColor: DASHBOARD_PAGE_COMPONENT_BG,
        }}
      >
        <LineChart />
      </section>
    </div>
  );
};

export default SellerDashBorad;

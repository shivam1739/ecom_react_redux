import React, { useEffect, useState } from "react";
import "./sellerProducts.css";
import { DASHBOARD_PAGE_BG, DASHBOARD_TEXT_COLOR } from "../../utils/assets";
import Table from "../../components/materailTable/ProductTable";
import axios from "axios";

const SellerProducts = () => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://erin-clear-lamb.cyclic.app/ecomm/api/v1/products")
      .then((res) => {
        setMyProducts(res?.data?.data);
        console.log(myProducts);
      });
  }, []);

  return (
    <div
      className="sellerProducts"
      style={{
        backgroundColor: DASHBOARD_PAGE_BG,
        width: "100vw",
        height: "100vh",
      }}
    >
      <section></section>
      <section className="product-table">
        {myProducts.length > 0 ? (
          <Table myProducts={myProducts} />
        ) : (
          <h2 style={{ color: DASHBOARD_TEXT_COLOR }}>no Products found...</h2>
        )}
      </section>
    </div>
  );
};

export default SellerProducts;

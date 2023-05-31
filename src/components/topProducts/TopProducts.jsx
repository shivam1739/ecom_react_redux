import React from "react";
import "./topProducts.css";
import Table from "react-bootstrap/Table";
// import ProgressBar from "react-bootstrap/ProgressBar";
import {
  SELLER_PAGE_COMPONENT_BG,
  SELLER_PAGE_TEXT_COLOR,
} from "../../utils/assets";
import { table_color } from "../../utils/assets";
import ProgressBar from "../progressbar/ProgressBar";
const TopProducts = () => {
  const tableHead = ["#", "Name", "Popularity", "Sales"];
  const data = [
    { name: "Home Decoration Range", Popularity: "45", sales: "45%" },
    { name: "Disney Princess Dress", Popularity: "25", sales: "25%" },
    { name: "OnePlus LED 14inch", Popularity: "15", sales: "15%" },
    { name: "Boat HeadPhone", Popularity: "10", sales: "10%" },
    { name: "ADDIDAS Shoes", Popularity: "05", sales: "05%" },
  ];
  return (
    <div
      className="top-product-container"
      style={{
        backgroundColor: SELLER_PAGE_COMPONENT_BG,
      }}
    >
      <h4>Top Products</h4>
      <Table className="topProductTable">
        <thead>
          <tr style={{ borderBlockColor: "rgba(255, 255, 255, 0.06) " }}>
            {tableHead.map((item) => {
              return <th style={{ color: SELLER_PAGE_TEXT_COLOR }}>{item}</th>;
            })}
          </tr>
          <tbody style={{ display: "contents" }} className="t-body">
            {data.map((item, idx) => (
              <tr
                style={{
                  color: "white",
                  borderBlockColor: "rgba(255, 255, 255, 0.06) ",
                  padding: "5px 0",
                }}
              >
                <td className="table-td">{`0${idx + 1}`}</td>
                <td className="table-td">{item.name}</td>

                <td className="table-td">
                  {
                    <ProgressBar
                      color={table_color[idx]}
                      background={SELLER_PAGE_TEXT_COLOR}
                      value={item.Popularity}
                    />
                  }
                </td>
                <td className="table-td">
                  <spna
                    style={{
                      border: `solid ${table_color[idx]} 1px`,
                      width: "8rem",
                      borderRadius: "3px",
                      color: table_color[idx],
                    }}
                  >
                    {item.sales}
                  </spna>
                </td>
              </tr>
            ))}
          </tbody>
        </thead>
      </Table>
    </div>
  );
};

export default TopProducts;

import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "react-bootstrap/Image";

import {
  BACKGROUND_COLOR,
  DASHBOARD_PAGE_COMPONENT_BG,
  DASHBOARD_TEXT_COLOR,
} from "../../utils/assets";
import "./productTable.css";

// import ExportCsv from '@material-table/exporters/csv';
// import ExportPdf from '@material-table/exporters/pdf';

const Table = (props) => {
  const [selectedRow, setSelectedRow] = useState([]);

  const d = props.myProducts?.map((item) => {
    if (item?.image?.length > 0) {
      item.image = (
        <img
          style={{
            width: "2rem",
            height: "2.5rem",
            padding: "0",
            margin: "0",

            backgroundColor: DASHBOARD_TEXT_COLOR,
          }}
          src={item?.image}
        />
      );
    }
    return item;
  });

  const columns = Object.keys(props.myProducts[0])?.map((str) => {
    const title = str?.charAt(0).toUpperCase() + str?.slice(1);

    if (title === "Image" || title === "Description") {
      return { title: title, field: str, filtering: false };
    }
    if (title != "SellerId") {
      return { title: title, field: str };
    }
  });

  return (
    <div
      style={{
        backgroundColor: DASHBOARD_PAGE_COMPONENT_BG,
        color: "white",
        // borderRadius: "15px",
        width: "100%",
      }}
      className="table-container"
    >
      <MaterialTable
        title="My Produts"
        data={d}
        columns={columns}
        style={{
          background: DASHBOARD_PAGE_COMPONENT_BG,
          color: "white",
          width: "100%",
        }}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow?.tableData.id)
        }
        options={{
          headerStyle: {
            backgroundColor: DASHBOARD_PAGE_COMPONENT_BG,
            color: "white",
          },
          searchFieldStyle: {
            color: "white",
            text: "white",
            background: DASHBOARD_TEXT_COLOR,
          },
          filtering: true,
          filterCellStyle: {
            height: "1.5rem",
            color: "white",
            text: "white",
            background: "#ECE9E4",
          },
          rowStyle: {
            height: "20px", // Adjust the height value as per your requirement
          },
          paging: false,
          isLoading: true,
          doubleHorizontalScroll: true,
          exportButton: true,
        }}
      />
    </div>
  );
};

export default Table;

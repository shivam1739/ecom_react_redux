import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div style={{ width: "80%", margin: "auto", height: "100%" }}>
      <div
        style={{
          width: "12rem",

          height: "2rem",
          border: "none",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <input type="radio" id="whitnIn" name="fav_language" value="whitnIn" /> 
        <label for="whitnIn">WithIn City</label>
        <br />
        <input type="radio" id="Inter" name="fav_language" value="Inter" /> 
        <label for="Inter">Inter City</label>
        <br />
      </div>
      <div className="search">
        <div>
          <label>i ma shifting My</label>
          <select>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3+BHK">3+BHK</option>
          </select>
        </div>
        <div>
          <lable>select City</lable>
          <select>
            <option value="Delhi">Delhi</option>
            <option value="Inodre">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Banglore">Banglore</option>
          </select>
        </div>
        <div>
          <lable>from</lable>
          <input type="text" />
        </div>
        <div>
          <lable>from</lable>
          <input type="text" />
        </div>
        <div>
          <lable>on</lable>
          <input type="date" />
          <button> quote</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

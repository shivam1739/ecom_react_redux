import React from "react";
import "./categoryCard.css";

const CategoryCard = ({ props }) => {
  return (
    <div className="c-card">
      <h1 className="category-heading">{props.name}</h1>
      <img
        className="category-card-img"
        src={`http://localhost:8000/${props.image}`}
      />
    </div>
  );
};

export default CategoryCard;

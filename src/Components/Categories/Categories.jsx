import React from "react";
import "./Categories.css";
import camelart from "../../assets/camelart.png"
import flower from "../../assets/flower.png"
import elephant from "../../assets/elephant.png"
const Categories = () => {
  return (
    <div className="grid">
      <div className="img1">
        <img src={camelart} alt="camelart" />
      </div>
      <div className="img2">
        <img src={flower} alt="flower" />
      </div>
      <div className="img3">
        <img src={elephant} alt="elephant" />
      </div>
    </div>
  );
};

export default Categories;

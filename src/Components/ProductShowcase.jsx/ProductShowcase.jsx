import React from "react";
import "./ProductShowcase.css";
import { FaArrowRight } from "react-icons/fa";
import Card from "../Card/Card.jsx"
const ProductShowcase = ({ data }) => {
  return (
    <>
      <div className="heading">
        <h2>{data.tag}</h2>
        <hr />
      </div>
      {data.Desc ? (
        <>
          <p>{data.Desc}</p> <hr />
        </>
      ) : null}
      <div className="container">
        {data.cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      <div className="products-page">
        <h3>VIEW ALL</h3>
        <div className="arrow">
          <FaArrowRight />
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;

import React from 'react'
import { FaRegHeart } from 'react-icons/fa6';
import { BsCart2 } from "react-icons/bs";
import "./Card.css"
const Card = ({card}) => {
  return (
    <div className="showcaseCard">
      <div className="img">
        <img src={card.Img} alt="Card image" />
        <div className="wishlist">
          <FaRegHeart color="black" />
        </div>
        <div className="cart">
          <BsCart2 color="black" />
          <p>ADD TO CART</p>
        </div>
      </div>
      <div className="description">
        <h2>{card.Name}</h2>
        <h4>{card.Creator}</h4>
        <h3>₹{card.Price}/-</h3>
      </div>
    </div>
  );
}

export default Card

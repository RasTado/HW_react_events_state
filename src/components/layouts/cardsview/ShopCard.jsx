import React from "react";
import "./css/ShopCard.css";

export default function ShopCard(props) {
  const { item } = props;
  return (
    <div className="shopCard">
      <h3 className="shopCardName">{item.name}</h3>
      <p className="shopCardColor">{item.color}</p>
      <img className="shopCardImg" src={item.img}></img>
      <div className="shopCardPrB">
        <p className="shopCardPrice">${item.price}</p>
        <button className="shopCardButton">ADD TO CART</button>
      </div>
    </div>
  );
}

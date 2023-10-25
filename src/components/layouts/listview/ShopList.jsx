import React from "react";
import "./css/ShopList.css";

export default function ShopList(props) {
  const { item } = props;
  return (
    <div className="shopList">
      <img className="shopListImg" src={item.img}></img>
      <h3 className="shopListName">{item.name}</h3>
      <p className="shopLitsColor">{item.color}</p>
      <p className="shopListPrice">${item.price}</p>
      <button className="shopListButton">ADD TO CART</button>
    </div>
  );
}

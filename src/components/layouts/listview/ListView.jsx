import React from "react";
import ShopList from "./ShopList";
import "./css/ListView.css";

export default function ListView(props) {
  const { items } = props;
  return (
    <div className="listView">
      {items.map((item, i) => (
        <div className="ShopListC" key={i}>
          <ShopList item={item} />
        </div>
      ))}
    </div>
  );
}

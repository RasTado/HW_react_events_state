import React from "react";
import { useState } from "react";

import IconSwitch from "./IconSwitch";
import CardsView from "./cardsview/CardsView";
import ListView from "./listview/ListView";

const products = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  },
  {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  },
  {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  },
];

export default function Store() {
  const [view, setView] = useState("view_list");

  const switchView = (e) => {
    if (e.target.textContent === "view_list") {
      setView("view_module");
    } else {
      setView("view_list");
    }
  };

  return (
    <>
      <IconSwitch icon={view} onSwitch={switchView} />
      {view === "view_list" ? (
        <CardsView items={products} />
      ) : (
        <ListView items={products} />
      )}
    </>
  );
}

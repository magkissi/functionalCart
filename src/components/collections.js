import React from "react";
import Card from "./card";
import "./collections.css";
import { items } from "./items";
import { Link } from "react-router-dom";

function Collections({ addItem }) {
  const mappedCards = items.map((item) => (
    <Card
      currency={item.currency}
      addingToCart={addItem}
      id={item.id}
      key={item.id}
      image={item.image}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <div className="collection__container">
      <div className="collection__sideBar">
        <h5>
          <u>Collections</u>
        </h5>
        <Link to="/collections/cutlery">
          <p>Kitchen Collections</p>
        </Link>
        <Link to="/collections/womenFashion">
          <p>Women Collections</p>
        </Link>
        <Link to="/">
          <p>General Collection</p>
        </Link>
      </div>
      <div className="product__container">{mappedCards}</div>
    </div>
  );
}

export default Collections;

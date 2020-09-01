import React from "react";
import Card from "./card";
import "./CardCollection.css";
import { items } from "./items";
import { Link } from "react-router-dom";
import WomenCollection from "./WomenCollection";
import CutleryCollection from "./CutleryCollection";

function CardCollection({ addItem, image, name, price, description }) {
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
    <div className="cardCollection__container">
      <div className="generalCollection">
        <Link to="/">
          <p>General Collection</p>
        </Link>
      </div>
      <div className="product__container">{mappedCards}</div>
      <div className="womenCollection__container">
        <WomenCollection />
      </div>
      <div className="cutlery">
        <CutleryCollection />
      </div>
    </div>
  );
}

export default CardCollection;

import React from "react";
import Card from "./card";
import "./CardCollection.css";
import { items } from "./items";

function CardCollection({ addItem }) {
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
  return <div className="cardCollection__container">{mappedCards}</div>;
}

export default CardCollection;

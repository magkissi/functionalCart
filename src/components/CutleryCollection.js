import React from "react";

import "./cutleryCollection.css";
import { itemsCutlery } from "./itemsCutlery";
import Card from "./card";

function CutleryCollection({ addItem }) {
  const cutleryItems = itemsCutlery.map((item) => {
    return (
      <Card
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
        currency={item.currency}
        addingToCart={addItem}
      />
    );
  });

  return (
    <div className="container">
      <div>
        <p>Cutlery Collection</p>
      </div>
      <div className="product__container">{cutleryItems}</div>
    </div>
  );
}

export default CutleryCollection;

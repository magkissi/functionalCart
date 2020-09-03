import React from "react";

import "./womenCollection.css";
import { itemsWomen } from "./itemsWomen";
import Card from "./card";

function WomenCollection({ addItem }) {
  const womenItems = itemsWomen.map((item) => {
    return (
      <Card
        id={item.id}
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
        <p>Women Collection</p>
      </div>

      <div className="product__container">{womenItems}</div>
    </div>
  );
}

export default WomenCollection;

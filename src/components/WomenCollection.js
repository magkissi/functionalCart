import React from "react";
import { Link } from "react-router-dom";
import "./womenCollection.css";
import { itemsWomen } from "./itemsWomen";
import Card from "./card";

function WomenCollection() {
  const womenItems = itemsWomen.map((item) => {
    return (
      <Card
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    );
  });

  return (
    <div className="container">
      <div>
        <Link>
          <p>Women Collection</p>
        </Link>
      </div>

      <div className="product__container">{womenItems}</div>
    </div>
  );
}

export default WomenCollection;

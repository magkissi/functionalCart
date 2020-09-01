import React from "react";
import { Link } from "react-router-dom";
import "./cutleryCollection.css";
import { itemsCutlery } from "./itemsCutlery";
import Card from "./card";

function CutleryCollection() {
  const cutleryItems = itemsCutlery.map((item) => {
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
          <p>Cutlery Collection</p>
        </Link>
      </div>
      <div className="product__container">{cutleryItems}</div>
    </div>
  );
}

export default CutleryCollection;

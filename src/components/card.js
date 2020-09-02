import React from "react";
import "./card.css";

function Card({ id, image, name, price, description, currency, addingToCart }) {
  const handleClick = () => {
    const product = {
      id,
      image,
      name,
      price,
      currency,
    };
    addingToCart(product);
  };
  return (
    <div className="card__container">
      <div className="card__img">
        <img className="card__img" src={image} alt={description} />
      </div>
      <div className="card__details">
        <h1>{name}</h1>
        <h4>
          {currency}
          {price}
        </h4>
      </div>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default Card;

import React from "react";
import "./cartItems.css";

function CartItems({
  image,
  name,
  id,
  price,
  description,
  currency,
  counter,
  addItem,
  reduceItem,
  removeProduct,
}) {
  const increment = () => {
    addItem(id);
  };

  return (
    <div className="cartItems__product">
      <div className="cartItems__img">
        <img src={image} alt={description} />
      </div>
      <div className="cartItems__details">
        <p>{name}</p>
        <div className="cartItems__btn">
          <button onClick={() => reduceItem(id)}>-</button>
          <span id="counter">{counter}</span>
          <button onClick={increment}>+</button>
        </div>
        <p>
          {currency}
          {price}
        </p>
        <p>
          {currency}
          {price * counter}
        </p>
        <span onClick={() => removeProduct(id)} id="remove__btn">
          X
        </span>
      </div>
    </div>
  );
}

export default CartItems;

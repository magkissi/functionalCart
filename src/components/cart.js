import React from "react";
import "./cart.css";
import CartItems from "./cartItems";
import CartHeadings from "./cartHeadings";

function Cart({ cartProducts, increaseItem, decreaseItem, removeItem }) {
  return (
    <div className="cart_container">
      <div className="cart__header">
        <h1>Your Cart</h1>
      </div>
      {cartProducts.length > 0 ? (
        <CartHeadings />
      ) : (
        <h2>There are no items in your Cart</h2>
      )}
      <div>
        {cartProducts.map((item) => (
          <CartItems
            currency={item.currency}
            counter={item.count}
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            addItem={increaseItem}
            reduceItem={decreaseItem}
            removeProduct={removeItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;

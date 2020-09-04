import React from "react";
import "./cart.css";
import CartItems from "./cartItems";
import CartHeadings from "./cartHeadings";

function Cart({ cartProducts, increaseItem, decreaseItem, removeItem }) {
  const totalAmount = cartProducts.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.count * currentProduct.price;
  }, 0);
  return (
    <div className="cart_container">
      <div className="cart__header">
        <h1>Your Cart</h1>
      </div>
      {cartProducts.length > 0 ? (
        <div className="cart__heading">
          <CartHeadings />
        </div>
      ) : (
        <h2>There are no items in your Cart</h2>
      )}
      <div className="cart__product">
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
      <div className="cart__total">
        <h4>Total</h4>
        <h4>Total Amount : ${totalAmount}</h4>
      </div>
      <div className="cart__btn">
        <button>Check Out</button>
      </div>
    </div>
  );
}

export default Cart;

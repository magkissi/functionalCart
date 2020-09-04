import React from "react";
import "./cart.css";
import CartItems from "./cartItems";
import CartHeadings from "./cartHeadings";

function Cart({ cartProducts, increaseItem, decreaseItem, removeItem }) {
  const makePayment = (amount) => {
    window.FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-b4d88b61b7a5eb4ae123aec26df08768-X",
      tx_ref: "hooli-tx-1920bbtyt",
      amount: amount,
      currency: "USD",
      payment_options: "card, mobilemoneyghana, ussd",
      // specified redirect URL
      redirect_url: "https//:localhost:3000",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "user@gmail.com",
        phone_number: "08102909304",
        name: "yemi desola",
      },
      callback: function (data) {
        console.log(data);
      },
      onclose: function () {
        // close modal
      },
      customizations: {
        title: "My store",
        description: "Payment for items in cart",
        logo: "https://assets.piedpiper.com/logo.png",
      },
    });
  };
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
      {cartProducts.length > 0 ? (
        <div className="cart__total">
          <div className="text">
            <h4>Total</h4>
            <h4>Total Amount : ${totalAmount}</h4>
          </div>
          <div className="cart__btn">
            <button onClick={() => makePayment(totalAmount)}>Pay Now</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;

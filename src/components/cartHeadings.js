import React from "react";
import "./cartHeadings.css";

function CartHeadings() {
  return (
    <div className="cartHeadings">
      <h3>Item</h3>
      <h3>Quantity</h3>
      <h3>Unit Price</h3>
      <h3>Total Amount</h3>
      <h3>Remove Item</h3>
    </div>
  );
}

export default CartHeadings;

import React from "react";
import "./cartHeadings.css";

function CartHeadings() {
  return (
    <div className="cartHeadings">
      <div className="items">
        <h3>Item</h3>
      </div>
      <div className="items">
        <h3>Quantity</h3>
      </div>
      <div className="items">
        <h3>Unit Price</h3>
      </div>
      <div className="items">
        <h3>Total Amount</h3>
      </div>
      <div className="items">
        <h3>Remove Item</h3>
      </div>
    </div>
  );
}

export default CartHeadings;

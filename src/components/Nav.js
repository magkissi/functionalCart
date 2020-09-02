import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const totalCount = props.products.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.count;
  }, 0);

  return (
    <div id="nav__container">
      <div className="nav__container1">
        <h5>DoorStep Online Shop</h5>
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="nav__links">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>|</p>
        <Link to="/cart">
          <p>Cart-{totalCount}</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;

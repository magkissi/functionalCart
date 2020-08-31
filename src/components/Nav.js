import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const totalCount = props.products.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.count;
  }, 0);

  return (
    <div className="nav__container">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>|</p>
      <Link to="/cart">
        <p>Cart-{totalCount}</p>
      </Link>
    </div>
  );
}

export default Nav;

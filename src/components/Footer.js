import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__content1">
        <a href="#nav__container">
          <h5>Back to Top</h5>
        </a>
      </div>
      <div className="footer__content2">
        <div>
          <h4>Get to Know Us</h4>
          <p>Careers</p>
          <p>Blog</p>
          <p>Sustainability</p>
          <p>Investor Relations</p>
          <p>Contact</p>
        </div>
        <div className="footer__content">
          <h4>Make Money with Us</h4>
          <p>Sell on DoorStep</p>
          <p>Blog</p>
          <p>Sustainability</p>
          <p>Investor Relations</p>
        </div>
        <div>
          <h4>DoorStep Payment Products</h4>
          <p>DoorStep Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>DoorStep Currency Converter</p>
        </div>
      </div>
      <div className="footer__content3">
        <p></p>
      </div>
    </div>
  );
}

export default Footer;

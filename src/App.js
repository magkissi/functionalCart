import React, { useState } from "react";
import CardCollection from "./components/CardCollection";
import Nav from "./components/Nav";
import Cart from "./components/cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      product.count = 1;
      setCart((prevProduct) => {
        return [product, ...prevProduct];
      });
    } else {
      const updatedCart = cart;
      const foundProduct = cart[productIndex];

      foundProduct.count = foundProduct.count + 1;
      updatedCart.splice(productIndex, 1, foundProduct);
      setCart(() => [...updatedCart]);
    }
  };

  const handleIncrement = (id) => {
    const productIndex = cart.findIndex((item) => item.id === id);
    const updatedCart = cart;
    const foundProduct = cart[productIndex];

    foundProduct.count = foundProduct.count + 1;
    updatedCart.splice(productIndex, 1, foundProduct);
    setCart(() => [...updatedCart]);
  };

  const handleDecrement = (id) => {
    const productIndex = cart.findIndex((item) => item.id === id);
    const updatedCart = cart;
    const foundProduct = cart[productIndex];

    if (foundProduct.count > 1) {
      foundProduct.count = foundProduct.count - 1;
      updatedCart.splice(productIndex, 1, foundProduct);
      setCart(() => [...updatedCart]);
    } else {
      setCart(() => [...updatedCart]);
    }
  };

  const handleDelete = (id) => {
    const productIndex = cart.findIndex((item) => item.id === id);
    const updatedCart = cart;
    updatedCart.splice(productIndex, 1);
    setCart(() => [...updatedCart]);
  };
  return (
    <Router>
      <div>
        <Nav products={cart} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <CardCollection addItem={addToCart} />}
          />
          <Route
            path="/cart"
            component={() => (
              <Cart
                cartProducts={cart}
                removeItem={handleDelete}
                increaseItem={handleIncrement}
                decreaseItem={handleDecrement}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

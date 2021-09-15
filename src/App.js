import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  const [cartContent, setCartContent] = useState([]);

  const handleSetCartContent = (newContent) => setCartContent(newContent);

  const handleConfirmOrder = () => setCartContent([]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/checkout">
            <Checkout
              cartContent={cartContent}
              onOrderConfirmed={handleConfirmOrder}
            />
          </Route>
          <Route path="/cart">
            <Cart
              cartContent={cartContent}
              onSetCartContent={handleSetCartContent}
            />
          </Route>

          <Route path="/">
            <Products
              cartContent={cartContent}
              onSetCartContent={handleSetCartContent}
            />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

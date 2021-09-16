import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import { routes } from "./routes";

const App = () => {
  const [cartContent, setCartContent] = useState(
    sessionStorage.cartContent ? JSON.parse(sessionStorage.cartContent) : []
  );

  const handleSetCartContent = (newContent) => {
    setCartContent(newContent);
    sessionStorage.setItem("cartContent", JSON.stringify(newContent));
  };

  const handleConfirmOrder = () => setCartContent([]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={routes.checkout}>
            <Checkout
              cartContent={cartContent}
              onOrderConfirmed={handleConfirmOrder}
            />
          </Route>
          <Route path={routes.cart}>
            <Cart
              cartContent={cartContent}
              onSetCartContent={handleSetCartContent}
            />
          </Route>

          <Route path={routes.products}>
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

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  const [cartContent, setCartContent] = useState([]);

  const handleSetCartContent = (newContent) => setCartContent(newContent);

  return (
    <Router>
      <Layout>
        <Switch>
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

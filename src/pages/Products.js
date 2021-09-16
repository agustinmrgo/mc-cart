import React, { useEffect, useState } from "react";
import { array, func } from "prop-types";

import ProductList from "../components/products/productsList/ProductsList";
import { getProducts } from "../api";

const ProductsPage = ({ cartContent, onSetCartContent }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  const handleAddProduct = (newProduct) => {
    const productInCart = cartContent.find(
      (cartProduct) => cartProduct.id === newProduct.id
    );
    if (productInCart) {
      productInCart.quantity++;
      onSetCartContent([...cartContent]);
    } else {
      onSetCartContent([...cartContent, { ...newProduct, quantity: 1 }]);
    }
  };

  return (
    <>
      <h1>Products</h1>
      <ProductList products={products} onProductAdded={handleAddProduct} />
    </>
  );
};

ProductsPage.propTypes = {
  cartContent: array.isRequired,
  onSetCartContent: func.isRequired,
};

export default ProductsPage;

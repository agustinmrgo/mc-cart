import React, { useEffect, useState } from "react";

import ProductList from "../components/ProductsList";
import { getProducts } from "../api";

const ProductsPage = ({ cartContent, onSetCartContent }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  const handleAddProduct = (product) =>
    onSetCartContent([...cartContent, product]);

  return (
    <>
      <h1>Products</h1>
      <ProductList products={products} onProductAdded={handleAddProduct} />
    </>
  );
};

export default ProductsPage;

const ProductsList = ({ products, onProductAdded }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} onClick={() => onProductAdded(product)}>
          {product.name}
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;

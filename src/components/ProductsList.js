const ProductsList = ({ products, onProductAdded }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} style={{ marginBottom: 10 }}>
          {product.name}
          <button
            style={{ marginLeft: 10, cursor: "pointer" }}
            onClick={() => onProductAdded(product)}
          >
            ➕ Add to cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;

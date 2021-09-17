import { array, func } from "prop-types";

import "./productsList.css";

const ProductsList = ({ products, onProductAdded }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className="product-item">
          {product.name}
          <button
            className="add-to-cart"
            onClick={() => onProductAdded(product)}
          >
            ➕ Add to cart
          </button>
        </li>
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: array.isRequired,
  onProductAdded: func.isRequired,
};

export default ProductsList;

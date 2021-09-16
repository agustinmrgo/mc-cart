import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { array, func } from "prop-types";

import "./cart.css";

const Cart = ({ cartContent, onSetCartContent }) => {
  const handleAddSingleProduct = (newProduct) => {
    const productInCart = cartContent.find(
      (cartProduct) => cartProduct.id === newProduct.id
    );
    productInCart.quantity++;
    onSetCartContent([...cartContent]);
  };

  const handleRemoveSingleProduct = (newProduct) => {
    const productInCart = cartContent.find(
      (cartProduct) => cartProduct.id === newProduct.id
    );
    if (productInCart.quantity > 1) {
      productInCart.quantity--;
      onSetCartContent([...cartContent]);
    } else {
      onSetCartContent([
        ...cartContent.filter((cartItem) => cartItem.id !== productInCart.id),
      ]);
    }
  };

  return (
    <>
      <h1>Cart:</h1>
      <ul>
        {cartContent.map((cartItem, index) => (
          <li key={`${cartItem.id}_${index}`} className="cart-item">
            <span>{cartItem.name}</span>
            <span className="quantity-container">
              <span>Qty: {cartItem.quantity}</span>
              <button onClick={() => handleAddSingleProduct(cartItem)}>
                ➕
              </button>
              <button onClick={() => handleRemoveSingleProduct(cartItem)}>
                ➖
              </button>
            </span>
          </li>
        ))}
      </ul>
      {cartContent.length !== 0 && (
        <>
          <span>
            <button onClick={() => onSetCartContent([])}>❌ Clear cart</button>
          </span>
          <span className="checkout">
            <Link to={routes.checkout}>
              <button>✅ Proceed to checkout</button>
            </Link>
          </span>
        </>
      )}
      {cartContent.length === 0 && <p>🛒 Cart is empty! 🛒 </p>}
    </>
  );
};

Cart.propTypes = {
  cartContent: array.isRequired,
  onSetCartContent: func.isRequired,
};

export default Cart;

import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { array, func } from "prop-types";

import "./cart.css";

const Cart = ({ cartContent, onSetCartContent }) => {
  return (
    <>
      <h1>Cart:</h1>
      <ul>
        {cartContent.map((cartItem, index) => (
          <li key={`${cartItem.id}_${index}`} className="cart-item">
            <span>{cartItem.name}</span>
            {cartItem.quantity > 1 && <span> - Qty: {cartItem.quantity}</span>}
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

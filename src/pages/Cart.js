import { Link } from "react-router-dom";

const Cart = ({ cartContent, onSetCartContent }) => {
  return (
    <>
      <h1>Cart:</h1>
      <ul>
        {cartContent.map((cartItem, index) => (
          <li key={`${cartItem.id}_${index}`}>{cartItem.name}</li>
        ))}
      </ul>
      {cartContent.length !== 0 && (
        <>
          <div>
            <Link to="/checkout">
              <button>✅ Proceed to checkout</button>
            </Link>
          </div>

          <div>
            <button onClick={() => onSetCartContent([])}>❌ Clear cart</button>
          </div>
        </>
      )}
      {cartContent.length === 0 && <p>🛒 Cart is empty! 🛒 </p>}
    </>
  );
};

export default Cart;

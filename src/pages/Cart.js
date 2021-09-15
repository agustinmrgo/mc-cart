const Cart = ({ cartContent, onSetCartContent }) => {
  return (
    <>
      <h1>Cart:</h1>
      <ul>
        {cartContent.map((cartItem) => (
          <li>{cartItem}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => null}>✅ Proceed to checkout</button>
      </div>
      <div>
        <button onClick={() => onSetCartContent([])}>❌ Clear cart</button>
      </div>
    </>
  );
};

export default Cart;

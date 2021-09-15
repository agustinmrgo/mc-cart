const PaymentForm = ({ purchaseData: { name, card } }) => {
  return (
    <>
      <h3>Congrats {name}!</h3>
      <p>You've successfully purchased a MasterClass account.</p>
      <p>You paid with the following card: {card}</p>
    </>
  );
};

export default PaymentForm;

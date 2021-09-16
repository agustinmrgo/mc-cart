import { useState } from "react";
import { func } from "prop-types";

import { makePurchase } from "../api";

const PaymentForm = ({ onPrevStep, onPurchase }) => {
  const [paymentData, setPaymentData] = useState(
    sessionStorage.paymentData
      ? JSON.parse(sessionStorage.paymentData)
      : {
          cardName: "JANE M. DOE",
          card: "4242 4242 4242 4242",
        }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { cardName, card } = paymentData;
    makePurchase().then(() => {
      onPurchase(cardName, card);
    });
  };

  const handleFieldChange = ({ target: { name, value } }) => {
    const newPaymentData = { ...paymentData, [name]: value };
    setPaymentData(newPaymentData);
    sessionStorage.setItem("paymentData", JSON.stringify(newPaymentData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardName">Name</label>
        <br />
        <input
          type="text"
          name="cardName"
          value={paymentData.cardName}
          onChange={handleFieldChange}
        />
      </div>

      <div>
        <label htmlFor="card">Credit Card</label>
        <br />
        <input
          type="text"
          name="card"
          value={paymentData.card}
          onChange={handleFieldChange}
        />
      </div>

      <hr />

      <button onClick={() => onPrevStep()}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

PaymentForm.propTypes = {
  onPrevStep: func.isRequired,
  onPurchase: func.isRequired,
};

export default PaymentForm;

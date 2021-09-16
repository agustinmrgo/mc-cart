import React, { useState, useEffect } from "react";
import { func } from "prop-types";

import RegistrationForm from "../components/RegistrationForm";
import PaymentForm from "../components/PaymentForm";
import OrderConfirmation from "../components/OrderConfirmation";

const CheckoutPage = ({ onOrderConfirmed }) => {
  const [purchaseData, setPurchaseData] = useState({ name: "", card: "" });

  const handleNextStep = () => setActiveStep(activeStep + 1);
  const handlePrevStep = () =>
    activeStep > 0 ? setActiveStep(activeStep - 1) : "";

  const handlePurchase = (name, card) => {
    setPurchaseData({ name, card });
  };

  const steps = [
    {
      key: "registration",
      label: "Registration",
      component: (
        <RegistrationForm
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      ),
    },
    {
      key: "payment",
      label: "Payment",
      component: (
        <PaymentForm
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          onPurchase={handlePurchase}
        />
      ),
    },
    {
      key: "confirmation",
      label: "Confirmation",
      component: (
        <OrderConfirmation
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          purchaseData={purchaseData}
        />
      ),
    },
  ];

  const [activeStep, setActiveStep] = useState(
    sessionStorage.activeStep ? sessionStorage.activeStep : 0
  );

  useEffect(() => {
    if (purchaseData.name && purchaseData.card) {
      setActiveStep(2);
      onOrderConfirmed();
    }
  }, [purchaseData]);

  useEffect(() => {
    sessionStorage.setItem("activeStep", activeStep);
  }, [activeStep]);

  return (
    <>
      <h1>{steps[activeStep].label}</h1>
      {steps[activeStep].component}
    </>
  );
};

CheckoutPage.propTypes = {
  onOrderConfirmed: func.isRequired,
};

export default CheckoutPage;

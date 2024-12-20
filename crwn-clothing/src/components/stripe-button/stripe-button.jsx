import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // Convert to cents
  const publishableKey =
    "pk_test_51JJKabIyH19z9TwVx8HbxkOBxg8vbEMfDFnDQuIMX5Et6sxy8X6nCsqcz1bUSSikEuumEh8oXINui13sAiFQxTcO00d4TEIHKK";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Ltd."
      billAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

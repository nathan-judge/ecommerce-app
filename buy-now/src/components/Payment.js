import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkout-form";
import "./payment.scss";
import axios from "axios";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Payment(props) {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    
    axios.post("/create-payment-intent", { items: [{ id: "xl-tshirt" }] }, {
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => setClientSecret(res.data.clientSecret))
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="payment">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm options={options} address={props.address} />
        </Elements>
      )}
    </div>
  );
}
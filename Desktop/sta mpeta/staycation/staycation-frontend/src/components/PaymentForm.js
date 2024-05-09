const stripe = require('stripe')('sk_test_51PDtBREVUTS7HRziuXNdrNtNcakIQqrwzuHvGjyGS1nm0RtiFYHk63at8mXOTnUHXbaRY0y1meNY6Hn3Tx76UDsN00uiIMLK9R');

// client/src/components/PaymentForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentError(null);

    if (!stripe || !elements) {
      return;
    }

    const { data } = await axios.post('/api/payment/create-payment-intent', {
      amount: 1000, // Amount in cents (e.g., $10.00)
    });

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error('Payment failed:', result.error.message);
      setPaymentError(result.error.message);
    } else {
      console.log('Payment successful:', result.paymentIntent);
      // Handle successful payment
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {paymentError && <div>{paymentError}</div>}
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;

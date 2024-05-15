/* Popup.js */

import React, { useState } from 'react';

const Popup = ({ onClose }) => {
  const [paymentProcessed, setPaymentProcessed] = useState(false);

  const handlePayment = () => {
    setPaymentProcessed(true);
    // Here you can add any other logic for processing the payment
  };

  return (
    <div className="popup">
      <div className="popup-content">
        {!paymentProcessed ? (
          <>
            <h2>Almost there. Continue to payment!!!</h2>
            <button onClick={handlePayment}>Proceed to Payment</button>
            <button onClick={onClose}>Close</button>
          </>
        ) : (
          <h2>Booked!!!</h2>
        )}
      </div>
    </div>
  );
};

export default Popup;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Popup = ({ onClose }) => {
  const [paymentProcessed, setPaymentProcessed] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setPaymentProcessed(true);
    // Here you can add any other logic for processing the payment
  };

  useEffect(() => {
    if (paymentProcessed) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [paymentProcessed, navigate]);

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
          <h2>Booked!!! Check your emails for confirmation.</h2>
        )}
      </div>
    </div>
  );
};

export default Popup;

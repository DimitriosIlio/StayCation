/* Popus.js */

import React from 'react';

const Popup = ({ onClose, onPayment }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Almost there. Continue to payment!!!</h2>
        <button onClick={onPayment}>Proceed to Payment</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

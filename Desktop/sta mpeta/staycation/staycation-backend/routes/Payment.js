// server/routes/payment.js

const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51PDtBREVUTS7HRziuXNdrNtNcakIQqrwzuHvGjyGS1nm0RtiFYHk63at8mXOTnUHXbaRY0y1meNY6Hn3Tx76UDsN00uiIMLK9Ry');

router.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error.message);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

module.exports = router;

// Backend (Node.js)
const stripe = require('stripe')('YOUR_SECRET_KEY');

// Create payment intent
app.post('/api/payment/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
  });
  res.json({ clientSecret: paymentIntent.client_secret });
});
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require ("cors")
const bodyParser = require('body-parser')
const bcrypt = require ("bcrypt")
const app = express();



// Middleware and other setup code
app.use(cors())
app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

// Connect to MongoDB

main().then(()=>console.log("database is connected")).catch(err => console.log(err));
 
async function main() {
  await mongoose.connect(
    "mongodb+srv://dimitriosilio:ZlnBJfYB6kY3FtCv@cluster0.d2dlet6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Use user routes
app.use('/api/users', userRoutes);

// Use admin routes
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/* const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require("cors");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const stripe = require('stripe')('sk_test_51PDtBREVUTS7HRziuXNdrNtNcakIQqrwzuHvGjyGS1nm0RtiFYHk63at8mXOTnUHXbaRY0y1meNY6Hn3Tx76UDsN00uiIMLK9R');

const app = express();

// Middleware and other setup code
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
main().then(() => console.log("Database is connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://dimitriosilio:ZlnBJfYB6kY3FtCv@cluster0.d2dlet6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Use user routes
app.use('/api/users', userRoutes);

// Use admin routes
app.use('/api/admin', adminRoutes);

// Define YOUR_DOMAIN for Stripe
const YOUR_DOMAIN = 'http://localhost:4242';

// Create checkout session endpoint
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  */
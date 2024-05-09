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



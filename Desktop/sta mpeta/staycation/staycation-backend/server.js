const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware and other setup code...
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://dimitriosilio:Fs4qVPtn1I0NuHQc@cluster0.64tplbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Use user routes
app.use('/api/users', userRoutes);

// Use admin routes
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

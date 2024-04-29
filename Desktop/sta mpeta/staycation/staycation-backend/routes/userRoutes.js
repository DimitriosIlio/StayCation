// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', userController.register);

// Login user
router.post('/login', userController.login);

// Get user profile (protected route)
router.get('/profile', authMiddleware.verifyUser, userController.getProfile);

// Update user profile (protected route)
router.put('/profile', authMiddleware.verifyUser, userController.updateProfile);

// Add more routes as needed (e.g., logout, delete account, etc.)

module.exports = router;

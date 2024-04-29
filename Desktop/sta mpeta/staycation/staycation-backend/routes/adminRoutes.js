// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Login admin
router.post('/login', adminController.login);

// Protected dashboard route (example)
router.get('/dashboard', authMiddleware.verifyAdmin, adminController.getDashboard);

// Add more routes as needed

module.exports = router;

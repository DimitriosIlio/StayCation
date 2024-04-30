const Admin = require('../models/adminModel');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findOne({ username });

    // Check if admin exists
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check if password is correct
    const isPasswordValid = await admin.isValidPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = admin.generateAuthToken();

    // Return token and admin data
    res.json({ token, admin });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    // Logic to fetch admin dashboard data
    // For example, querying database for statistics, recent activities, etc.

    res.json({ message: 'Admin dashboard data retrieved successfully' });
  } catch (error) {
    console.error('Error fetching admin dashboard data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Add more controller methods as needed

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Admin = require('../models/adminModel');

// Middleware function to verify user authentication
const verifyUser = async (req, res, next) => {
  try {
    // Extract token from request headers
    const token = req.headers.authorization.split(' ')[1];
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID from token payload
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Attach user object to request for further use
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Middleware function to verify admin authentication
const verifyAdmin = async (req, res, next) => {
  try {
    // Extract token from request headers
    const token = req.headers.authorization.split(' ')[1];
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find admin by ID from token payload
    const admin = await Admin.findById(decoded.adminId);

    if (!admin) {
      throw new Error('Admin not found');
    }

    // Attach admin object to request for further use
    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Export the middleware functions
module.exports = {
  verifyUser,
  verifyAdmin
};



/* const jwt = require("jsonwebtoken");

require("dotenv").config();

const verifyToken = (req, res, next) => {
    const headers = req.headers.authorization;
    //console.log("headers", headers);
    if (!headers) {
        return res.status(403).send({msg: "Token not found, Unauthorized"});
    }
    let ClientToken = headers.split(" ") [1];
    let verifiedToken = jwt.verify(ClientToken, process.env.PASSWORD);
    //console.log(verifiedToken);
    if (!verifiedToken) {
        return res.status(401).send ({msg: "Invalid token, unauthorized"});
    } else {
        req.user = verifiedToken;
        next();
    }
};

module.exports = verifyToken */
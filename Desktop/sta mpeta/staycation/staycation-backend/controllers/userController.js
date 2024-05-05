// userController.js

const bcrypt = require('bcrypt');
const User = require('../models/userModel');

/* exports.register = async (req, res) => {
  try {
    console.log(req.body)
    // Extract username, email, and password from request body
    const { username, email, password } = req.body;
console.log(username,email,password)
    // Check if the username or email already exists
    const existingUser = await User.findOne({username:username})
    //console.log(existingUser)
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Create a new user instance
    //const newUser = new User({ username, email, password });

    // Save the user to the database
    //await newUser.save();

    // Return success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
 */

exports.login = async (req, res) => {
  // Logic for user login
  // This method should be similar to the login method in the adminController.js file
  // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Return a 200 OK message along with the token
  // res.status(200).json({ message: 'Login successful' });

  try {
    const { email, password, username } = req.body;

    // Find admin by username
    const user = await User.findOne({ username });

    // Check if admin exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if password is correct
    const isPasswordValid = await user.isValidPassword(password);
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

exports.getProfile = async (req, res) => {
  // Logic for getting user profile
  try {
    // Retrieve user profile from req.user (added by authMiddleware)
    const userProfile = req.user;

    // Return user profile
    res.json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateProfile = async (req, res) => {
  // Logic for updating user profile
  try {
    // Retrieve updated profile data from request body
    const updatedProfileData = req.body;

    // Update user profile in the database
    await User.findByIdAndUpdate(req.user._id, updatedProfileData);

    // Return success response
    res.json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // Find the user by ID and delete it from the database
    await User.findByIdAndDelete(req.user._id);

    // Return success response
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Add more controller methods as needed


exports.register = async (req, res) => {
  try {
    console.log("hi")
    console.log(req.body)
    let { username, email, password } = req.body;
    if (!email || !username || !password) {
      return res.send({ msg: "All data are  required" });
    }
    let oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({
        msg: "user already exist please login or register with a new email",
      });
    }

    let hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);
    await User.create({ username, email, password: hashPassword });
    return res.send({ msg: "Registered successfully" });
  } catch (error) {
    console.log(error);
    return res.send({ msg: "Internal server error , can not register......" });
  }
};

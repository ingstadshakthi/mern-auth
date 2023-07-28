const asyncHandler = require('express-async-handler');
const User = require('./../models/userModel');
const generateToken = require('./../utils/generateToken');
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
exports.authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid Email or password');
  }
});

// @desc Register a new User
// route POST /api/users
// @access Public
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

// @desc Logout User
// route POST /api/users/logout
// @access Public
exports.logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'User logged out' });
});

// @desc Get user profile
// route GET /api/users/profile
// @access private
exports.getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

// @desc update user profile
// route PUT /api/users/profile
// @access private
exports.updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update User Profile' });
});

const asyncHandler = require('express-async-handler');
const User = require("./../models/userModel");

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
exports.authUser = asyncHandler(async (req, res) => {

  res.status(200).json({ message: 'Auth User' });
});


// @desc Register a new User
// route POST /api/users
// @access Public
exports.registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;
  console.log(name, email, password)

  res.status(200).json({ message: 'Auth User' });
});

// @desc Logout User
// route POST /api/users/logout
// @access Public
exports.logoutUser = asyncHandler(async (req, res) => {

  res.status(200).json({ message: 'Auth User' });
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
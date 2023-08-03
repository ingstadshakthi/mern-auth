const { protect } = require('../middleware/authMiddleware');
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require('./../controllers/userController');

const express = require('express');
const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .get('/profile', protect, getUserProfile)
  .put('/profile', protect, updateUserProfile);

module.exports = router;

const User = require("../models/User");
const asyncHandler = require("../middleware/async");

// @desc    Get all users
// @route   GET /api/v1/admin/users/users
// @access  Private (admin)
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json();
});

// @desc    Create student
// @route   POST /api/v1/user
// @access  Private
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

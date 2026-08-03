const User = require("../models/User");
const Loan = require("../models/Loan");
const Transaction = require("../models/Transaction");
// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get All Loans
const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate("user", "fullName email");

    res.status(200).json({
      success: true,
      loans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Loan Status
const updateLoanStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const loan = await Loan.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Loan Status Updated Successfully",
      loan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const Account = require("../models/Account");


const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAccounts = await Account.countDocuments();
    const totalTransactions = await Transaction.countDocuments();
    const totalLoans = await Loan.countDocuments();
    const pendingLoans = await Loan.countDocuments({
      status: "Pending",
    });

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalAccounts,
        totalTransactions,
        totalLoans,
        pendingLoans,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const changeUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Role Updated Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("sender", "fullName email")
      .populate("receiver", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  getAllUsers,
  getAllLoans,
  updateLoanStatus,
  getDashboardStats,
  deleteUser,
  changeUserRole,
  getAllTransactions,
};
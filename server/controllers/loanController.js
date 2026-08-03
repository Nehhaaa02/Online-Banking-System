const Loan = require("../models/Loan");

const applyLoan = async (req, res) => {
  try {
    const { loanType, amount, duration } = req.body;

    const loan = await Loan.create({
      user: req.user._id,
      loanType,
      amount,
      duration,
    });

    res.status(201).json({
      success: true,
      message: "Loan Application Submitted Successfully",
      loan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ user: req.user._id });

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

module.exports = {
  applyLoan,
  getLoans,
};
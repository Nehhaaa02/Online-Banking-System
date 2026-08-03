const Loan = require("../models/Loan");

const applyLoan = async (data) => {
  return await Loan.create(data);
};

const getUserLoans = async (userId) => {
  return await Loan.find({ user: userId }).sort({
    createdAt: -1,
  });
};

module.exports = {
  applyLoan,
  getUserLoans,
};
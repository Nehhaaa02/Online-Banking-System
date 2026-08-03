const Transaction = require("../models/Transaction");

const createTransaction = async (data) => {
  return await Transaction.create(data);
};

const getUserTransactions = async (userId) => {
  return await Transaction.find({ sender: userId }).sort({
    createdAt: -1,
  });
};

module.exports = {
  createTransaction,
  getUserTransactions,
};
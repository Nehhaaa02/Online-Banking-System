const Account = require("../models/Account");

const createAccount = async (userId) => {
  return await Account.create({
    user: userId,
    accountNumber: Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString(),
    balance: 10000,
  });
};

const getAccountByUser = async (userId) => {
  return await Account.findOne({ user: userId });
};

module.exports = {
  createAccount,
  getAccountByUser,
};
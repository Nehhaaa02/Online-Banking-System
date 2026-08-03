const Account = require("../models/Account");
const getAccount = async (req, res) => {
  try {
    const account = await Account.findOne({
  user: req.user._id,
}).populate("user", "fullName email phone");
         console.log(account);

    if (!account) {
      return res.status(404).json({
        success: false,
        message: "Account not found",
      });
    }

    res.status(200).json({
      success: true,
      account,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAccount,
};
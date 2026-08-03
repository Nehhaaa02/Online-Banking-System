const Transaction = require("../models/Transaction");
const Account = require("../models/Account");


const transferMoney = async (req, res) => {
  try {
    const { receiver, amount } = req.body;

    
    const senderAccount = await Account.findOne({
      user: req.user._id,
    });

    if (!senderAccount) {
      return res.status(404).json({
        success: false,
        message: "Sender Account Not Found",
      });
    }

    
    const receiverAccount = await Account.findOne({
      accountNumber: receiver,
    });

    if (!receiverAccount) {
      return res.status(404).json({
        success: false,
        message: "Receiver Account Not Found",
      });
    }

    
    if (senderAccount.balance < amount) {
      return res.status(400).json({
        success: false,
        message: "Insufficient Balance",
      });
    }

    
    senderAccount.balance -= amount;
    receiverAccount.balance += amount;

    await senderAccount.save();
    await receiverAccount.save();

    
    const transaction = await Transaction.create({
  sender: req.user._id,
  receiver: receiverAccount.user,
  accountNumber: receiverAccount.accountNumber,
  amount,
  status: "Success",
});

    res.status(201).json({
      success: true,
      message: "Money Transferred Successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      sender: req.user._id,
    })
      .populate("receiver", "fullName")
      .sort({ createdAt: -1 });

       console.log(JSON.stringify(transactions, null, 2));
       
    const data = await Promise.all(
      transactions.map(async (t) => {
        const account = await Account.findOne({ user: t.receiver._id });

        return {
          _id: t._id,
          receiver: t.receiver.fullName,
          accountNumber: account.accountNumber,
          amount: t.amount,
          status: t.status,
          createdAt: t.createdAt,
        };
      })
    );

    res.status(200).json({
      success: true,
      transactions: data,
    });
  } catch (error) {
  console.log("Transaction Error:", error);

  res.status(500).json({
    success: false,
    message: error.message,
    error,
  });
}
};
module.exports = {
  transferMoney,
  getTransactions,
};
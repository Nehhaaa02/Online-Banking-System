const express = require("express");
const router = express.Router();

const {
  transferMoney,
  getTransactions,
} = require("../controllers/transactionController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/transfer", authMiddleware, transferMoney);
router.get("/", authMiddleware, getTransactions);

module.exports = router;
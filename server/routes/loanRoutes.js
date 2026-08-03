const express = require("express");
const router = express.Router();

const {
  applyLoan,
  getLoans,
} = require("../controllers/loanController");

const authMiddleware = require("../middleware/authMiddleware");

// Apply Loan
router.post("/apply", authMiddleware, applyLoan);

// Get My Loans
router.get("/", authMiddleware, getLoans);

module.exports = router;
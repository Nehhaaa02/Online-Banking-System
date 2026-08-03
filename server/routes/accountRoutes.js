const express = require("express");
const router = express.Router();

const { getAccount } = require("../controllers/accountController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getAccount);

module.exports = router;
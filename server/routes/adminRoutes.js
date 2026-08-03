const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {getAllLoans } = require("../controllers/adminController");
  
const {updateLoanStatus} = require("../controllers/adminController");
const{getDashboardStats} =require("../controllers/adminController");
const{deleteUser} =require("../controllers/adminController");
const {changeUserRole} =require("../controllers/adminController");
const{getAllTransactions}=require("../controllers/adminController");

router.get("/users", authMiddleware, adminMiddleware, getAllUsers);

router.get("/loans", authMiddleware, adminMiddleware, getAllLoans);


router.put("/loans/:id", authMiddleware, adminMiddleware, updateLoanStatus);
router.get("/dashboard",authMiddleware,adminMiddleware,getDashboardStats);
router.delete( "/users/:id",authMiddleware,adminMiddleware,deleteUser);
router.put("/users/:id/role",authMiddleware,adminMiddleware,changeUserRole);
router.get("/transactions",authMiddleware,adminMiddleware,getAllTransactions);
module.exports = router;
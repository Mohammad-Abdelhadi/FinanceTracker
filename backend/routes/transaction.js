const express = require("express");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

const {
   getTransactions,
   addTransaction,
} = require("../controllers/transactionController");

// middleware
router.use(requireAuth);

// Return all transactions
router.get("/", getTransactions);

// post income & expense
router.post("/add", addTransaction);

module.exports = router;

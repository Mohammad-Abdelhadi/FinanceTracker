const express = require("express");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

const {
   getWallet,
   addTransaction,
} = require("../controllers/walletController");

// middleware
router.use(requireAuth);

// Return all transactions
router.get("/", getWallet);

// post income & expense
router.post("/add", addTransaction);

module.exports = router;

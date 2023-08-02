const express = require("express");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

const {
   getWallet,
   addTransaction,
   tranferToInformation,
   confirmTrasferMoney,
} = require("../controllers/walletController");

// middleware
router.use(requireAuth);

// Return all transactions
router.get("/", getWallet);

// post income & expense
router.post("/add", addTransaction);

// tranfer to information
router.post("/tranfertoinformation", tranferToInformation);

// Confirm send
router.post("/tranfertoinformation", confirmTrasferMoney);
module.exports = router;

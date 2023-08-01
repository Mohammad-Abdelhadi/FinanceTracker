const User = require("../models/userModel");
const Wallet = require("../models/walletModel");

// get Wallet
const getWallet = async (req, res) => {
   const { _id } = req.user;

   try {
      const { balance, income, expense, transactions } = await Wallet.findOne({
         userId: _id.toString(),
      });

      res.status(200).json({ balance, income, expense, transactions });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// add Wallet
const addTransaction = async (req, res) => {
   const { _id } = req.user;
   const { type, category, value, date } = req.body;

   try {
      let { balance, income, expense, transactions } = await Wallet.findOne({
         userId: _id.toString(),
      });

      transactions.unshift({ type, category, value, date });

      if (type === "income") {
         income += parseInt(value);
      } else if (type === "expense") {
         expense += parseInt(value);
      }
      balance = income - expense;

      const wallet = await Wallet.findOneAndUpdate(
         {
            userId: _id.toString(),
         },
         { balance, income, expense, transactions }
      );

      res.status(200).json(wallet);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

module.exports = {
   getWallet,
   addTransaction,
};

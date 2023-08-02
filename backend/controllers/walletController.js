const User = require("../models/userModel");
const Wallet = require("../models/walletModel");

// dynamic functions
const pushTransaction = async (
   transactions,
   type,
   category,
   value,
   date,
   balance,
   income,
   expense,
   _id
) => {
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

   return wallet;
};

const getUserWallet = async (_id) => {
   return ({ balance, income, expense, transactions } = await Wallet.findOne({
      userId: _id.toString(),
   }));
};

// get Wallet
const getWallet = async (req, res) => {
   const { _id } = req.user;

   try {
      const { balance, income, expense, transactions } = await getUserWallet(
         _id
      );

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
      let { balance, income, expense, transactions } = await getUserWallet(_id);

      const wallet = await pushTransaction(
         transactions,
         type,
         category,
         value,
         date,
         balance,
         income,
         expense,
         _id
      );

      res.status(200).json(wallet);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// Tranfer To Information
const tranferToInformation = async (req, res) => {
   const { _id } = req.user;
   const { emailTo, value } = req.body;

   try {
      let { balance } = await getUserWallet(_id);

      if (balance < value) {
         throw Error("You don't have enough money");
      }

      const {
         _id: ToId,
         username,
         email,
      } = await User.findOne({ email: emailTo });

      res.status(200).json({ ToId, username, email, value });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// tranfer money
const confirmTrasferMoney = async (req, res) => {
   const { _id } = req.user;
   const { username, emailTo, value } = req.body;

   try {
      res.status(200).json({ username, email, value });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};
module.exports = {
   getWallet,
   addTransaction,
   tranferToInformation,
   confirmTrasferMoney,
};

const User = require("../models/userModel");
const Wallet = require("../models/walletModel");

// dynamic functions ////////////////////
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
/////////////////////////////////////////////

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
// add Transaction
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
   // to do
   try {
      let { balance } = await getUserWallet(_id);

      if (balance < value) {
         throw Error("You don't have enough money");
      }

      const toUser = await User.findOne({ email: emailTo });

      if (!toUser) {
         throw Error("Can't find this user");
      }

      const { _id: toId, username, email } = toUser;

      res.status(200).json({ toId, username, email, value });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// tranfer money
const confirmTrasferMoney = async (req, res) => {
   const { _id } = req.user;
   const { toId, username, email, value } = req.body;

   try {
      const {
         balance: fbalance,
         income: fincome,
         expense: fexpense,
         transactions: ftransactions,
      } = await getUserWallet(_id);
      const {
         balance: tbalance,
         income: tincome,
         expense: texpense,
         transactions: ttransactions,
      } = await getUserWallet(toId);

      if (fbalance < value) {
         throw Error("You don't have enough money");
      }

      const fromWallet = await pushTransaction(
         ftransactions,
         "expense",
         `send money to ${username}`,
         value,
         new Date().toLocaleString(),
         fbalance,
         fincome,
         fexpense,
         _id
      );

      const toWallet = await pushTransaction(
         ttransactions,
         "income",
         `receive money from ${req.user.username}`,
         value,
         new Date().toLocaleString(),
         tbalance,
         tincome,
         texpense,
         toId
      );

      res.status(200).json({ fromWallet, toWallet });
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

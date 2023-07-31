const User = require("../models/userModel");
const Transaction = require("../models/transactionModel");

// get transaction
const getTransactions = async (req, res) => {
   res.json({ mssg: "post transactions" });
};

// add Transactions
const addTransaction = async (req, res) => {
   const { _id } = req.user;
   const { type, category, value, date } = req.body;
   try {
      const { balance, income, expense } = await Transaction.findOne({
         userId: _id.toString(),
      });

      if (type == "income") {
         income.push({ type, category, value, date });
      } else if (type == "expense") {
         expense.push({ type, category, value, date });
      }

      let incomeBalance = 0;
      for (let i = 0; i < income.length; i++) {
         incomeBalance += +income[i].value;
      }
      let expenseBalance = 0;
      for (let i = 0; i < expense.length; i++) {
         expenseBalance += +expense[i].value;
      }

      const transaction = await Transaction.findOneAndUpdate(
         {
            userId: _id.toString(),
         },
         { balance: incomeBalance - expenseBalance, income, expense }
      );

      res.status(200).json(transaction);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

module.exports = {
   getTransactions,
   addTransaction,
};

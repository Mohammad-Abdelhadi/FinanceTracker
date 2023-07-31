const mongoose = require("mongoose");

const Scehma = mongoose.Schema;

const transactionScehma = new Scehma({
   userId: {
      type: String,
      required: true,
   },
   balance: {
      type: Number,
   },
   income: {
      type: Array,
   },
   expense: {
      type: Array,
   },
});
transactionScehma.statics.createDefaultTransaction = async function (id) {
   const transaction = await this.create({
      userId: id,
      balance: 0,
   });

   return transaction;
};

module.exports = mongoose.model("Transaction", transactionScehma);

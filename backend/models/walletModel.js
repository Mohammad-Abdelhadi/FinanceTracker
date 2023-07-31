const mongoose = require("mongoose");

const Scehma = mongoose.Schema;

const walletScehma = new Scehma({
   userId: {
      type: String,
      required: true,
      unique: true,
   },
   balance: {
      type: Number,
      default: 0,
   },
   income: {
      type: Number,
      default: 0,
   },
   expense: {
      type: Number,
      default: 0,
   },
   transactions: {
      type: Array,
      default: null,
   },
});
walletScehma.statics.createDefaultWallet = async function (id) {
   const wallet = await this.create({
      userId: id,
      balance: 0,
      income: 0,
      expense: 0,
      transactions: [],
   });

   return wallet;
};

module.exports = mongoose.model("Wallet", walletScehma);

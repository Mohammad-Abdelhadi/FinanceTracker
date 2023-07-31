const User = require("../models/userModel");
const Wallet = require("../models/walletModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
   return jwt.sign({ _id }, process.env.SECRET);
};

//login
const loginUser = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await User.login(email, password);

      // create token
      const token = createToken(user._id);

      res.status(200).json({ username: user.username, email, token });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};
//signup
const signupUser = async (req, res) => {
   const { username, email, password } = req.body;

   try {
      const user = await User.signup(username, email, password);

      // create token
      const token = createToken(user._id);

      const wallet = await Wallet.createDefaultWallet(user._id);

      res.status(200).json({ username, email, token, wallet });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

module.exports = {
   signupUser,
   loginUser,
};

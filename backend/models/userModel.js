const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

// static signup method
userSchema.statics.signup = async function (username, email, password) {
   //validation
   if (!username || !email || !password) {
      throw Error("All fields must be filled");
   }

   if (!validator.isEmail(email)) {
      throw Error("Email not valid");
   }

   if (!validator.isStrongPassword(password)) {
      throw Error("Password not Strong enough");
   }

   const exist = await this.findOne({ email });

   if (exist) {
      throw Error("Email Already in use");
   }

   const salt = await bcrypt.genSalt(10);
   const hash = await bcrypt.hash(password, salt);

   const user = await this.create({ username, email, password: hash });

   return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
   //validation
   if (!email || !password) {
      throw Error("All fields must be filled");
   }

   const user = await this.findOne({ email });

   if (!user) {
      throw Error("Incorrect email or password");
   }

   const match = await bcrypt.compare(password, user.password);
   if (!match) {
      throw Error("Incorrect email or password");
   }

   return user;
};

module.exports = mongoose.model("User", userSchema);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const walletRoutes = require("./routes/wallet");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
   console.log(req.path, req.url);
   next();
});

//Routes
app.use("/api/user", userRoutes);
app.use("/api/wallet", walletRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
   //listen for requests
   app.listen(process.env.PORT, () => {
      console.log("Connect to db & listen to port", process.env.PORT);
   });
});

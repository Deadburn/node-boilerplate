const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connection.once("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL);
}

async function mongoDisConnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisConnect,
};

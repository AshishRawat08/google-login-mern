const mongoose = require("mongoose");

const DB = process.env.DB_CONN;

mongoose
  .connect(DB)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log(error));

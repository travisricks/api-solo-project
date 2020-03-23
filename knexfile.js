require("dotenv").config();
module.exports = {
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  }
};

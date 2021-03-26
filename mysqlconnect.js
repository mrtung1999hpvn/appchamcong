/** @format */

let mysql = require("mysql");
let connection = mysql.createPool({
  // connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "appchamcong",
  port: 3306,
});

module.exports = connection;

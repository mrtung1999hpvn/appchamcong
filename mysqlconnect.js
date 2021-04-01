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

// let connection = mysql.createPool({
//   connectionLimit: 100,
//   host: "145.14.145.145",
//   user: "id16505587_admin",
//   password: "TUng0936563013*",
//   database: "id16505587_appchamcong",
//   port: 3306,
//   multipleStatements:true
// });

// let connection = mysql.createPool({
//   connectionLimit: 100,
//   host: "newocop.vn",
//   user: "newocop",
//   password: "newocop123",
//   database: "newocop_csdl",
//   port: 3306,
//   multipleStatements:true
// });
module.exports = connection;

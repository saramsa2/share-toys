const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const host = process.env.mysql_address;
const password = process.env.mysql_pwd;

const db = mysql.createConnection({
  host: {host},
  user: "root",
  password: {password},
  database: "share_toy"
})


module.exports = {
  db
}
const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const server = express();
const PORT = process.env.PORT || 5555;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const mysql = require('./config/database');
mysql.db.connect((err) => {
  if(err) 
  {
    throw err;
  }
  console.log(db);  
})
  
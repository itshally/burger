//require dotenv package to import the MySQL password from the .env file
require('dotenv').config();

//importing required package for this file
var mysql = require('mysql');

var connection;

//connecting..
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    port: '3306',
    password : process.env.MYSQL_USER_PASSWORD,
    database: 'burgers_db'
  });
}

//connecting...
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


//exporting the connection from this file
module.exports = connection;
//importing the created MySQL connection from the connection.js file
var connection = require('../config/connection');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
  
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
  
//creating methods that will be executed for the controllers
var orm = {
    //a function to select all the columns to the burger's table
    selectAll: (tableName, showBurgers) => {
      connection.query("SELECT * FROM " + tableName + ";", (error, result) => {
        showBurgers(result);
      });
    },
    //a function to insert a new row of data to the burger's table
    insertOne: (tableName, fieldName, newBurger, showBurgers) => {
      connection.query("INSERT INTO " + tableName + " (" + fieldName.toString() + ") VALUES (" +
        printQuestionMarks(newBurger.length) + ");", newBurger, (err, result) => {
        showBurgers(result);
      });
    },
    updateOne: (tableName, columnValue, condition, showBurgers) => {
      connection.query("UPDATE " + tableName + " SET " + objToSql(columnValue) + " WHERE " + condition, (error, result) => {
        showBurgers(result);
      })
    }
};

//exporting the ORM objects
module.exports = orm;
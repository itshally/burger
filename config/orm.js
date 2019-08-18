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
    selectAll: (tableName, showBurgers) => {
        connection.query('SELECT * FROM ??', [tableName], function(error, result){
            showBurgers(result);
        });
    },
    insertOne: (tableName, fieldName, newBurger, showBurgers) => {

        var query = "INSERT INTO " + tableName;
            query += " (";
            query += fieldName.toString();
            query += ") ";
            query += "VALUES (";
            query += printQuestionMarks(newBurger.length);
            query += ") ";
        console.log(query);
        // var query = connection.query('INSERT INTO burgers (burger_name) VALUES ("'+ printQuestionMarks(newBurger.length) +'")', [tableName, newBurger], function(error, result){
        //     showBurgers(result);
        // });

        connection.query(query, newBurger, function(error, result){
            showBurgers(result);
        });
        // console.log(query.sql);
    },
    updateOne: (tableName, fieldName, condition, showBurgers) => {

      var query = "UPDATE " + tableName;
          query += " SET ";
          query += objToSql(fieldName);
          query += " WHERE ";
          query += condition;

          console.log(query);

      connection.query(query, function(error, result){
        showBurgers(result);
      });
    }
};

//exporting the ORM objects
module.exports = orm;
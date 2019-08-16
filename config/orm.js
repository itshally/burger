//importing the created MySQL connection from the connection.js file
var connection = require('../config/connection');

//creating methods that will be executed for the controllers
var orm = {
    selectAll: (tableName, showBurgers) => {
        connection.query('SELECT * FROM ??', [tableName], function(error, result){
            showBurgers(result);
        });
    },
    insertOne: {},
    updateOne: {}
};

//exporting the ORM objects
module.exports = orm;
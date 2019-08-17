//importing the orm.js file to this current file
var orm = require('../config/orm');


// orm.selectAll('burger_name');

// orm.insertOne('burger_name')

var burger = {
    selectAll: (showBurgers) => {
        orm.selectAll("burgers", function(result){
            showBurgers(result);
        });
    },
    insertOne: (fieldName, newBurger, showBurgers) => {
        orm.insertOne("burgers", fieldName, newBurger, function(result){
            showBurgers(result);
        });
    } 
}

// exporting the data
module.exports = burger;
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
    insertOne: (burgerName) => {
        orm.insertNewBurger('burgers', burgerName, function(result){
            console.log(result);
        });
    } 
}

// exporting the data
module.exports = burger;
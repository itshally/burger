//importing the orm.js file to this current file
var orm = require('../config/orm');

var burger = {
    selectAll: (showBurgers) => {
        orm.selectAll("burgers", (result) => {
            showBurgers(result);
        });
    },
    insertOne: (fieldName, newBurger, showBurgers) => {
        orm.insertOne("burgers", fieldName, newBurger, (result) => {
            showBurgers(result);
        });
    },
    updateOne: (columnValue, condition, showBurgers) => {
        orm.updateOne("burgers", columnValue, condition, (result) => {
            showBurgers(result);
        });
    }
}

// exporting the data
module.exports = burger;
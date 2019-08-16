//importing the express package for this file
var express = require('express');

//creating an express router
var router = express.Router();

var burger = require('../models/burger');

router.get("/", function(request, response){
    burger.selectAll(function(data){
        var burgersData = {
            burgers : data
        };
        response.render("index", burgersData);
        console.log('showing all burgers');
    });
});

module.exports = router;
//importing the express package for this file
var express = require('express');

//creating an express router
var router = express.Router();

var burger = require('../models/burger');

//getting all the burger data to show on the "/" url
router.get("/", function(request, response){
    burger.selectAll(function(data){
        var burgersData = {
            burgers : data
        };
        response.render("index", burgersData);
        console.log('showing all burgers');
    });
});

router.post("/api/burgers", function(request, response){
    burger.insertOne(["burger_name"], [request.body.burger], function(result){
        response.redirect("/");
    });
});

router.get("/api/burgers", function(request, response){
    burger.selectAll(function(result){
        response.json(result);
    });
});

//exporting the routers
module.exports = router;    
//importing the express package for this file
var express = require('express');

//creating an express router
var router = express.Router();

//importing the burger file from the model folder
var burger = require('../models/burger');

//getting all the burger data to show on the "/" url
router.get("/", (request, response) => {
  burger.selectAll((data) => {
    var burgerData = { burgers: data };
    response.render("index", burgerData);
  });
});
  
router.post("/api/burgers", (request, response) => {
    burger.insertOne(["burger_name"], [request.body.burger], (result) => {
      response.redirect("/");
    });
});

router.get("/api/burgers", (request, response) => {
    burger.selectAll(function(result){
        response.json(result);
    });
});

router.put("/api/burgers/:id", (request, response) => {
  var condition = "id=" + request.params.id;
  burger.updateOne({devoured: request.body.devoured }, condition, (result) => {
    (result.changedRows == 0) ? response.status(404).end() : response.status(200).end();
  });
});

router.delete("/api/burgers/:id", (request, response) => {
  var condition = "id=" + request.params.id;
  burger.deleteOne(condition, (result) => {
    (result.affectedRows == 0) ? response.status(404).end() : response.status(200).end();
  });
});

//exporting the routers
module.exports = router;    
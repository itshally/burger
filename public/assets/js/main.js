$(() => {
  //funtion to change the eat button to yummy
  $('.change-state').on("click", function (event) {

    //get's the data-id value of the button
    var id = $(this).data("id");
    
    //get's the data-newstate value of the button
    var newState = $(this).data("newstate");
      
    var newBurgerState = {
      devoured: newState
    }; 

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
    }).then(() => { location.reload() });
  });//end of change-state function

  //function to create a new burger
  $('#create-burger-form').on('submit', (event) => {
    event.preventDefault();

    var newBurger = {
      burger_name : $('#burger').val()
    };

    // Send the POST request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => { location.reload() });
  });//end of submit function

});
  

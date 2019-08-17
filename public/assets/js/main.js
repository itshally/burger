$('#create-burger-form').on('submit', function(event){
    event.preventDefault();

    var newBurger = {
        burger_name : $('#burger').val().trim()
    }

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
    );
});
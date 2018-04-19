$( function(){
   // When the proper location has been selected
   $("#placeSearch").submit(function(){
      var input = $('#pac-input').val();
      var place = $('#placeObject').val();
      // If the submit button exists(it only appears with a proper location)
      if(/* input == "" && */$("#submitButton").length == 0 ){
         alert("You have selected nothing, ya prick");
      } else {
         $("#placeSearch").attr("action", "package.html");
         alert(input);
         alert( JSON.stringify(place) );
      }
   })
});

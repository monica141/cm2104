/**
 * Created by john on 10/03/2016.
 */
/*
var cat = document.querySelector("img");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 200) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
*/

// Cat image
var cat = document.querySelector("img");

// Position
var position = 0;
var positionX = 0;

/*
Last time:
If we used the time as it is, the animation would
start at frame 0. With the last time variable,
we are letting it start at frame 01
*/
var lastTime = null;

var flag = false;
var flagX = false;

// Animation function definition
function animate(time) {

   // Start on frame one
   if (lastTime != null){
      // Increment the position value
      if( flag==false){
         position += 5;
      } else {
         position -= 5;
      }
      if( flagX==false){
         positionX += 5;
      } else {
         positionX -= 5;
      }
   }
   // Update the time
   lastTime = time;

   // Change the cats Y position
   cat.style.top = position + "px";
   // Change the cats X position
   cat.style.left = positionX + "px";

   if( position > screen.height-100 ){
      flag = true;
   }
   if(  position < 0 ){
      flag = false;
   }
   if( positionX > screen.width ){
      flagX = true;
   }
   if(  positionX < 0 ){
      flagX = false;
   }

   // Recursive call to the animation function
   requestAnimationFrame(animate);
}

// Calling the animation function
requestAnimationFrame(animate);

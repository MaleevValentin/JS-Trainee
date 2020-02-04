// var timeUp = function() {
//   alert("Time is over");
// };
// setTimeout(timeUp, 3000);

// var doHomework = function() {
//   alert("Time to do homework");
// };
// var timeoutId = setTimeout(doHomework, 5000);
// clearTimeout(timeoutId);

var counter = 5;
var printMessage = function() {
  console.log("You watch on console: " + counter + " seconds");
  counter += 5;
};
var intervalId = setInterval(printMessage, 5000);
clearInterval(intervalId);

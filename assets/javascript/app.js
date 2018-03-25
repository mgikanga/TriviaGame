console.log("im inn");
// my variables
var time = 30;
var intervalId;
var timerRunning = false;
// function to set up timer
function timer(){
    time --;
    intervalId = setInterval(timer,1000);
    console.log(time);
}
timer();

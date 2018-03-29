//my global variables
$(document).ready( function() {
var time = 31;
var intervalId;
var answer;
var userPick;
var wins=0;
var losses = 0;
// object for questions
var questions = [
    {
        text: "What is the capital of Norway?",
        answer: "Oslo",
        options: ["Helsinki", "Oslo", "Copenhagen"],
        image: "assets/images/oslo.jpg",
    },
    {
        text: "What is the capital of New York",
        answer: "Albany",
        options: ["New York City", "Albany", "Manhantan", "Brooklyn"],
        image: "assets/images/albany.jpg",
    },
    {
        text: "What is the capital of New Mexico?",
        answer: "Santa Fe",
        options: ["Helsinki", "Santa Fe", "Copenhagen"],
        image: "assets/images/santa-fe.jpg",
    },
    {
        text: "What is the capital of Arizona?",
        answer: "Phoenix",
        options: ["Helsinki", "Oslo", "Phoenix"],
        image: "assets/images/phoenix.jpg",
    },

];

var questionNumber = 0;
var currentQuestion = questions[questionNumber];
var answer =currentQuestion.answer;
var text = currentQuestion.text;
var optionArr = currentQuestion.options;
for (var i = 0; i < questions.length; i++) {
   
    console.log(questions[i].text);
};
//timer function
$("#buton").on("click", function () {
    $(this).hide();
    intervalId = setInterval(countDown, 1000)
    display();

})
//countdown function
function countDown() {
    time--;
    $("#clock").html("<h3>Time remaining: " + time + " seconds</h3>")
    if (time === 0) {
        clearInterval(countDown);
        $("#clock").html("You run out of time!!");
    }
}
//funtion to display text on webpage
function display() {
    countDown();
    $("#quiz").html("<h3>" + text + "</h3>");

      $(function() {
       optionArr;
        var myButtons = $("#custom_buttons");
        $.each(optionArr, function(index, value) {
            myButtons.append("<button class=std_buttons value=" + value + ">" + value + "</button>");
        });
    
        $("button.std_buttons").click(function () {
            var userPick = $(this).val();
            if(userPick===answer){
                questionNumber++;
                 winAdd();
               
            }
            else{
                lossAdd();
            }
         console.log(userPick);
        });
    
    });    
}


function resultDisplay(){
    screenTime--;
}

// function for all questions

/*
for (var i = 0; i < questions.length; i++) {
    console.log("This is the text");
    console.log(questions[i].text);
}
*/
//function move on
function moveOn() {
    if(questionNumber<questions.length){
        $("#clock").remove();
  $(".clock").remove();
  $("#quiz").remove();
  $("#custom_buttons").remove();
  $("#quiz").remove();
  $("#win").remove();
  (display,2000);
}

}
//function winnig
function winAdd(){
    $("#win").html("<h3>" + "CORRECT!!" + "</h3>");
    wins++;
    console.log(wins);
                $("#custom_buttons").hide();
                clearInterval(countDown); 
$("#clock").hide();
    $(".clock").html("<h3>Time remaining: " + time + " seconds</h3>");
    setTimeout(moveOn, 2000);
}

//function losing
function lossAdd(){
    $("#win").html("<h3>" + "WRONG!! " + "It's " + answer+   "</h3>");
    losses++;
    console.log(losses);
                $("#custom_buttons").hide();
                clearInterval(countDown); 
$("#clock").hide();
    $(".clock").html("<h3>Time remaining: " + time + " seconds</h3>")
           
}

//button to reset
$("#reset").on("click", function () {
  
})
})
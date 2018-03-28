//my global variables
var time = 31;
var intervalId;
var answer;
var userPick;

//timer function
$("#buton").on("click", function () {
    $(this).hide();
    intervalId = setInterval(countDown, 1000)
    display();

})
//funtion to display text on webpage
function display(questionNumber) {
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
                $("#win").html("<h3>" + "CORRECT!!" + "</h3>");
                $("#custom_buttons").hide();
                moveOn();
                console.log("win");
            }
         console.log(userPick);
        });
    
    });    
}

//countdown function
function countDown() {
    time--;
    $("#clock").html("<h3>Time remaining: " + time + " seconds</h3>")
    if (time <= 0) {
        $("#clock").html("You run out of time!!");
        return;

    }
}

// object for questions
var questions = [
    {
        text: "What is the capital of Norway?",
        answer: "Oslo",
        options: ["Helsinki", "Oslo", "Copenhagen"],
    },
    {
        text: "What is the capital of New York",
        answer: "Albany",
        options: ["New York City", "Albany", "Manhantan", "Brooklyn"],
    },
    {
        text: "What is the capital of New Mexico?",
        answer: "Santa Fe",
        options: ["Helsinki", "Santa Fe", "Copenhagen"],
    },
    {
        text: "What is the capital of Arizona?",
        answer: "Phoenix",
        options: ["Helsinki", "Oslo", "Phoenix"],
    },

];

/* For the Norway question
var selected;
var text = questions[0].text;
var answer = questions[0].answer;
var optionArr=questions[0].options;
var optionA = questions[0].options[0]
var optionB = questions[0].options[1]
var optionC = questions[0].options[2]
var optionD = questions[0].options[3]
console.log(text);*/



//For The Hobbit related questoin
var questionNumber = 0;
var text = questions[questionNumber].text;
var answer = questions[questionNumber].answer;
var optionArr=questions[questionNumber].options;

for (var i = 0; i < questions.length; i++) {
    console.log("This is the text");
    console.log(questions[i].text);
}

//function move on
function moveOn() {
    questionNumber++;
    display(questions[questionNumber]);
}
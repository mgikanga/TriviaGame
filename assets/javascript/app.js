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
function display() {
    countDown();
    $("#quiz").html("<h3>" + text + "</h3>");
    for(var i=0; i<optionArr.length;i++){
        $("#quiz").append("<button id = 'pick'>" + optionArr[i] + "</button>");
        $("#pick").on("click", function () {
   
            
        })
        
      console.log(optionArr[i]);
      }      
}

//countdown function
function countDown() {
    time--;
    $("#clock").html("<h3>Time remaining: " + time + " seconds</h3>")
    if (time <= 0) {
        $("#clock").html("You run out of time");
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

// For the Norway question
var selected;
var text = questions[0].text;
var answer = questions[0].answer;
var optionArr=questions[0].options;
var optionA = questions[0].options[0]
var optionB = questions[0].options[1]
var optionC = questions[0].options[2]
var optionD = questions[0].options[3]
console.log(text);
//compare the user pick and answer


/* For The Hobbit related questoin
var questionNumber = 1;
var text = questions[questionNumber].text;
var answer = questions[questionNumber].answer;

for (var i = 0; i < questions.length; i++) {
   
    console.log(questions[i].text);
}
//function move on*/

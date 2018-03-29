//my global variables
$(document).ready(function () {
    var time = 30;
    var intervalId;
    var answer;
    var userPick;
    var wins = 0;
    var losses = 0;
    var none = 0;
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
    var answer = questions[questionNumber].answer;
    var text = questions[questionNumber].text;
    var optionArr = questions[questionNumber].options;
    
    //timer function
    $("#buton").on("click", function () {
        $(this).hide();
        //intervalId = setInterval(countDown, 1000)
        display();

    })

    //funtion to display text on webpage
    //create container to hold the questions and answers


    function display() {
        $("#content").empty();
        //create container to hold the questions and answers
        var questionArea = $("<div>");
        questionArea.attr("id", "question-area")
        var timer = $("<h2>")
        var question = $("<h2>")
        // Append elements to the content area, so they display properly
        questionArea.appendTo("#content")
        timer.appendTo(questionArea)
        question.appendTo(questionArea)
        // $("#quiz").html("<h3>" + text + "</h3>");
        var time = 30;
        timer.html("<h2>" + time + " seconds remaining</h2>")

        // Countdown function that will stop when the time hits 0
        var countDown = setInterval(function () {
            time--;
            timer.html("<h2>" + time + " seconds remaining</h2>")

            // If time reaches 0, the question times out, none increases in value, and the timedOut function is called
            if (time === 0) {
                clearInterval(countDown)
                questionArea.fadeToggle("slow", timedOut)
                none++;
            }
        }, 1000);

        // Display the question, i'm using question to number to access every question


        question.html(text)
        $(function () {
            optionArr;
            var myButtons = $(questionArea);
            $.each(optionArr, function (index, value) {
                myButtons.append("<button class=std_buttons value=" + value + ">" + value + "</button>");
            });

            $("button.std_buttons").click(function () {
                var userPick = $(this).val();
                //if the pick is correct
                if (userPick === answer) {
                    questionArea.fadeToggle("slow", displayCorrect)
                    clearInterval(countDown);
                    wins++;
                }
                else {
                    questionArea.fadeToggle("slow", displayWrong);
                    clearInterval(countDown);
                    losses++;
                }
                console.log(userPick);
            });

        });
    }



    //function to display the corect info
    function displayCorrect() {
        var cycle = setTimeout(display, 7000)
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        // Declare content that will go into the messageArea
        var winMessage = $("<h2>");
        var answer = $("<h2>")
        var image = $("<img>")
        // Append it all to the content container and add text and images
        messageArea.appendTo($("#content"));
        winMessage.appendTo($(messageArea));
        image.appendTo($(messageArea))
        winMessage.text("You Got It Right!!");
        answer.text(questions[questionNumber].answer)
        image.attr("src", questions[questionNumber].image)

        //if no questios are left
        if (questionNumber === questions.length - 1) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 7000)
        }
        questionNumber++;
    };

    //function the user gets the answer wrong
    function displayWrong() {
        var cycle = setTimeout(display, 7000)
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        var lossMessage = $("<h2>");
        var detail = $("<h2>")
        var image = $("<img>")
        // Append it all to the content container and add text and images
        messageArea.appendTo($("#content"));
        lossMessage.appendTo(messageArea)
        detail.appendTo($(messageArea))
        image.appendTo($(messageArea))
        lossMessage.html("Wrong! The right answer is " + questions[questionNumber].answer);
        image.attr("src", questions[questionNumber].image);

        // If there are no questions left, then run this function to display gameOver
        if (questionNumber === (questions.length - 1)) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 7000)
        }
        questionNumber++;
        console.log(questionNumber);
    };

    //timeout screen
    function timedOut() {
        var cycle = setTimeout(display, 7000);
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        var lossMessage = $("<h2>");
        var detail = $("<h2>")
        var image = $("<img>")
        // Append it all to the content container and add text and images
        messageArea.appendTo($("#content"));
        lossMessage.appendTo(messageArea)
        detail.appendTo($(messageArea))
        image.appendTo($(messageArea))
        lossMessage.html("You have run out of time! The right answer was: " + questions[questionNumber].answer);
        image.attr("src", questions[questionNumber].image);

        // If there are no questions left, then run this function to display gameOver
        if (questionNumber === (questions.length - 1)) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 7000)
        }
        questionNumber++;
    };
    function gameOver() {
        // Clear out the post-question message
        $(".message-content").remove();
        var totalCorrect = $("<h3>")
        var totalIncorrect = $("<h3>")
        var totalNone = $("<h3>")
        var restart = $("<button>")
        totalCorrect.appendTo($("#content"))
        totalCorrect.html("You got " + wins + " correct!")
        totalIncorrect.appendTo("#content")
        totalIncorrect.html("You got " + losses + " wrong.")
        totalNone.appendTo("#content")

        // If block to determine if question or questions should be used
        if (none === 1) {
            totalNone.html("You didn't answer " + none + " question.")
        }
        if (none > 1 || none === 0) {
            totalNone.html("You didn't answer " + none + " questions.")
        }
        // Restart button
        restart.addClass("restart")
        restart.text("Restart")
        restart.appendTo($("#content"))

        //Reset button onclick function
        $(".restart").on("click", function () {
            totalCorrect.remove();
            totalIncorrect.remove();
            totalNone.remove();
            restart.remove();
            currentQuestion = 0;
            correct = 0; //records number of correct answers
            wrong = 0; //records number of wrong answers
            none = 0;
            display();
        })
    }
})



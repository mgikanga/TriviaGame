//my global variables
$(document).ready(function () {
    var time = 30;
    var intervalId;
    var answer;
    var userPick;
    var wins = 0;
    var losses = 0;
    var none = 0;
    // object for questions array
    var questions = [
        {
            text: "What is the capital of Norway?",
            answer: "Oslo",
            options: ["Helsinki", "Oslo", "Phoenix", "Copenhagen"],
            image: "assets/images/oslo.jpg",
            detail: "The Nobel Peace Prize award ceremony is held every year in Oslo City Hall",
        },
        {
            text: "What is the capital of New York?",
            answer: "Albany",
            options: ["New York City", "Albany", "Manhantan", "Brooklyn"],
            image: "assets/images/albany.jpg",
            detail: " The very first passenger railroad in America, the Mohawk and Hudson River Railroad, was invented here.",
        },
        {
            text: "What is the capital of New Mexico?",
            answer: "Santa-Fe",
            options: ["Helsinki", "Santa-Fe", "Phoenix", "Copenhagen"],
            image: "assets/images/santa-fe.jpg",
            detail: "Santa Fe's full name is La Villa Real de la Santa Fé de San Francisco de Asís­–the Royal Town of the Holy Faith of Saint Francis of Assisi.",
        },
        {
            text: "What is the capital of Arizona?",
            answer: "Phoenix",
            options: ["Helsinki", "Oslo", "Phoenix", "Copenhagen"],
            image: "assets/images/phoenix.jpg",
            detail: "Forget “falling forward” and “springing back”. There is NO daylight savings time in Phoenix."
        },

        {
            text: "What is the capital of Alabama?",
            answer: "Montgomery",
            options: ["Helsinki", "Oslo", "Phoenix", "Montgomery"],
            image: "assets/images/Montgommery.jpg",
            detail: "is named after Richard Montgomery, he fought in the American Revolution and died during the Benedict Arnold’s expedition against Quebec.",
        },
        {
            text: "What is the capital of Alaska?",
            answer: "Juneau",
            options: ["Juneau", "Albany", "Manhantan", "Brooklyn"],
            image: "assets/images/juneau.jpg",
            detail: " In 1916, the Alaska-Juneau gold mine was built on the mainland and became the largest operation of its kind in the world.",
        },
        {
            text: "What is the capital of Arkansas?",
            answer: "Little-Rock",
            options: ["Helsinki", "Santa-Fe", "Little-Rock", "Copenhagen"],
            image: "assets/images/little-rock.jpg",
            detail: " The Esse Purse Museum,the only brick-and-mortar purse museum in the country is in Little Rock",
        },
        {
            text: "What is the capital of California?",
            answer: "Sacramento",
            options: ["San Francisco", "Sacramento", "San Jose", "Vallejo"],
            image: "assets/images/sacramento.jpg",
            detail: "Sacramento is actually two cities in one; a large network of tunnels remain beneath the foundation of the city."
        },
    ];

    var questionNumber = 0;

    //start function
    $("#buton").on("click", function () {
        $(this).hide();
        display();

    })

    //funtion to display text on webpage
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
        // set up the timer
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

        // Display the question, i'm using questionnumber to access every question


        question.append(questions[questionNumber].text)
        $(function () {
            var myButtons = $(questionArea);
            $.each(questions[questionNumber].options, function (index, value) {
                myButtons.append("<button class=std_buttons value=" + value + ">" + value + "</button>");
            });

            $("button.std_buttons").click(function () {
                var userPick = $(this).val();
                //if the pick is correct then display the win screen 
                //if wrong the lossing screen
                if (userPick === questions[questionNumber].answer) {
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



    //function to display when aswer is corect 
    function displayCorrect() {
        var cycle = setTimeout(display, 7000)
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        // Declare content that will go into the messageArea
        var winMessage = $("<h2>");
        var answer = $("<h2>")
        var detail = $("<h4>")
        var image = $("<img>")
        // Append it all to the content container and add text and images
        messageArea.appendTo($("#content"));
        winMessage.appendTo($(messageArea));
        detail.appendTo($(messageArea));
        image.appendTo($(messageArea))
        winMessage.text("You Got It Right!!");
        detail.html(questions[questionNumber].detail)
        image.attr("src", questions[questionNumber].image)


        //if no questios are left then the game is over
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
        var lossMessage = $("<h3>");
        var detail = $("<h4>")
        var image = $("<img>")
        // Append it all to the content container and add text and images
        messageArea.appendTo($("#content"));
        lossMessage.appendTo($(messageArea))
        detail.appendTo($(messageArea))
        image.appendTo($(messageArea))
        lossMessage.html("Wrong! The right answer is " + questions[questionNumber].answer);
        detail.html(questions[questionNumber].detail)
        image.attr("src", questions[questionNumber].image);

        // If there are no questions left, then run this function to display gameOver else incerement questionnumber
        if (questionNumber === (questions.length - 1)) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 7000)
        }
        questionNumber++;
        console.log(questionNumber);
    };

    //timeout screen for when user run out of time
    function timedOut() {
        var cycle = setTimeout(display, 7000);
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        var lossMessage = $("<h3>");
        var detail = $("<h4>")
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
        var totalCorrect = $("<h2>")
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
            questionNumber = 0;
            var wins = 0;
            var losses = 0;
            none = 0;
            display();
        })
    }
})



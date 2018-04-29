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
        {
            text: "What is the capital of Connecticut?",
            answer: "Hartford",
            options: ["Stamford", "New-Haven", "Hartford", "Bridgeport"],
            image: "assets/images/oslo.jpg",
            detail: "Bridgeport is the state's largest city, Hartford, however, is the state's largest Metro area",
        },
        {
            text: "What is the capital of Delaware?",
            answer: "Dover",
            options: ["Wilmington", "Dover", "Newark", "lewes"],
            image: "assets/images/dover.jpg",
            detail: " Longest-serving capital in terms of statehood. Wilmington is the state's largest city.",
        },
        {
            text: "What is the capital of Florida?",
            answer: "Tallahassee",
            options: ["Miami", "Tallahassee", "Orlando", "Tampa"],
            image: "assets/images/tallahassee.jpg",
            detail: "Jacksonville is the largest city. Miami is the largest metropolitan area.",
        },
        {
            text: "What is the capital of Georgia?",
            answer: "Atlanta",
            options: ["Atlanta", "Athens", "Augusta", "Macon"],
            image: "assets/images/atlanta.jpg",
            detail: "Atlanta is home to two Nobel Peace Prize winners, Martin Luther King Jr. and President Jimmy Carter"
        },

        {
            text: "What is the capital of Hawaii?",
            answer: "Honolulu",
            options: ["Kailua", "Kapolei", "Kaneohe", "Honolulu"],
            image: "assets/images/honolulu.jpg",
            detail: "Within the city limits of Honolulu, it is illegal to annoy a bird. What constitutes “annoying” is still up for debate.",
        },
        {
            text: "What is the capital of Idaho?",
            answer: "Boise",
            options: ["Boise", "Nampa", "Meridian", "Idaho-falls"],
            image: "assets/images/boise.jpg",
            detail: "Boise has been named the #1 Adventure City in America by National Geographic.",
        },
        {
            text: "What is the capital of Illinois?",
            answer: "Springfield",
            options: ["Springfield", "Chicago", "Rockford", "Joilet"],
            image: "assets/images/illinois.jpg",
            detail: "Chicago is the state's largest city.",
        },
        {
            text: "What is the capital of Indiana?",
            answer: "Indianapolis",
            options: ["- Evansville ", "Indianapolis", "Gary", "Carmel "],
            image: "assets/images/indianapolis.jpg",
            detail: "The Indianapolis Motor Speedway is the largest sporting facility in the world."
        },
        
        {
            text: "What is the capital of Iowa?",
            answer: "Des-Moines",
            options: ["Cear Rapids", "Des-Moines", "Davenport", "Lowa City"],
            image: "assets/images/des.jpg",
            detail: "Between the years of 1942 and 2009, a city ordinance made dancing illegal between the hours of 2 and 6 a.m.",
        },
        {
            text: "What is the capital of Kansas?",
            answer: "Topeka",
            options: ["Kansa City", "Olathe", "Topeka", "Manhattan"],
            image: "assets/images/topeka.jpg",
            detail: " according to various sources, its name, as translated from the local Native American dialect, means, A good place to dig potatoes. It's also possible that it means smoky hill instead.",
        },
        {
            text: "What is the capital of New Kentucky?",
            answer: "Frankfort",
            options: ["Frankfort", "Owensboro", "Bowling Green", "Louisville"],
            image: "assets/images/frankfort.jpg",
            detail: "Frankfort is known for having a pair of the most beautiful state capitol buildings in America. The third state capitol building, completed in 1830, is now open for tours so visitors can see its unique self-supporting staircase, the only one like it in the world. The fourth and current capitol building, completed in 1910, features a 190-foot high dome and was built with marble and granite from all over the world. Behind the building is a garden with a unique floral clock in a large pond.",
        },
        {
            text: "What is the capital of Louisiana?",
            answer: "Baton-Rouge",
            options: ["New Orleans", "Baton-Rouge", "Lafayette", "Shreveport"],
            image: "assets/images/baton.jpg",
            detail: "When wandering around Louisiana more than 300 years ago, French explorer Sieur d’Iberville spotted a cypress stick stained with blood of fish and animals on a Mississippi River bluff. The red stick served as the dividing line between the Bayougoula and Houma tribes’ hunting grounds hence the name."
        },

        {
            text: "What is the capital of Maine?",
            answer: "Augusta",
            options: ["Augusta", "Portland", "Bangor", "lewiston"],
            image: "assets/images/augusta.jpg",
            detail: "Maine is the only state that shares its border with only one other state.Augusta is notable for the National Historic Landmark named Fort Western, a former British colonial outpost on the Kennebec River that today is the oldest wooden fort in the United States. Augusta is also America’s easternmost state capital.",
        },
        {
            text: "What is the capital of Maryland?",
            answer: "Annapolis",
            options: ["Baltimore", "Frederick", "Rockville", "	Annapolis"],
            image: "assets/images/annapolis.jpg",
            detail: " Annapolis is the home to the U.S. Naval Academy, which opened in 1845. The Naval Academy offers guided tours and even has its own maritime library.",
        },
        {
            text: "What is the capital of Massachusetts?",
            answer: "Boston",
            options: ["Cambridge", "Salem", "Boston", "Worcester"],
            image: "assets/images/boston.jpg",
            detail: " Boston built America’s first subway, the Tremont Street Subway, back in 1897.",
        },
        {
            text: "What is the capital of Michigan?",
            answer: "Lansing",
            options: ["Lansing", "Detroit", "Grand Rapids", "Flint"],
            image: "assets/images/lansing.jpg",
            detail: "Lansing got its start founded by two brothers from New York back in 1835. At the time they settled the area just south of present-day Lansing, they called it 'Biddle City'. Most of the area was actually flooded for most of the year. Ironically, those two brothers were from Lansing, New York."
        },
        {
            text: "What is the capital of Minnesota?",
            answer: "Saint-Paul",
            options: ["	Saint-Paul", "Minneapolis", "Duluth", "St. Cloud"],
            image: "assets/images/stpaul.jpg",
            detail: "Saint Paul’s five-mile long skyway is the second longest continuous skyway system in the world.",
        },
        {
            text: "What is the capital of Mississippi?",
            answer: "Jackson",
            options: ["Biloxi", "Hattiesburg", "Tupelo", "Jackson"],
            image: "assets/images/jackson.jpg",
            detail: " The settlement on the Pearl River that gave birth to Jackson was first called LeFleur’s Bluff, named for French-Canadian trader Louis LeFleur.",
        },
        {
            text: "What is the capital of Missouri?",
            answer: "Jefferson-City",
            options: ["St. Charles", "Columbia", "Branson", "Jefferson-City"],
            image: "assets/images/jefferson.jpeg",
            detail: "Jefferson City was developed specifically as the state capital of Missouri. It was incorporated as a city in 1839. While it was declared the intended capital in 1821, St. Charles served as the capital.",
        },
        {
            text: "What is the capital of Montana?",
            answer: "Helena",
            options: ["Helena", "Billings", "Missoula", "Bozeman"],
            image: "assets/images/helena.jpg",
            detail: "Helena was founded by accident by four Georgia men who decided to take one last chance in their search for gold.They found gold (and named the place Last Chance Gulch). Other miners heard about it, and Helena was soon a boomtown "
        },

        {
            text: "What is the capital of Nebraska?",
            answer: "Lincoln",
            options: ["Omaha", "Kearney", "Lincoln", "Papillion"],
            image: "assets/images/lincoln.jpg",
            detail: "It was originally named Lancaster, after the salt mine owner's hometown in Pennsylvania.",
        },
        {
            text: "What is the capital of Nevada?",
            answer: "Carson-City",
            options: ["	Carson-City", "Reno", "Las Vegas", "sparks"],
            image: "assets/images/carson.jpg",
            detail: "Carson City started its history as a waystation for white settlers seeking to make it rich at the Gold Rush. However, in 1859, gold prospectors hit silver in the hills east of the city.The Comstock Lode, as it was called, was the largest silver find in world history.",
        },
        {
            text: "What is the capital of New Hampshire?",
            answer: "Concord",
            options: ["Manchester", "Concord", "Nashua", "Keene"],
            image: "assets/images/concord.jpg",
            detail: "The often hated device of schoolday mornings, the alarm clock, was invented in Concord in 1787 by Levi Hutchins.",
        },
        {
            text: "What is the capital of New Jersey?",
            answer: "Trenton",
            options: ["Trenton", "Newark", "Jersey City", "Princeton"],
            image: "assets/images/trenton.jpeg",
            detail: "According to Destination Trenton, Trenton was the location of the first public reading of the Declaration of Independence, even before Philadelphia. Mercer County also reports that Trenton was the location where the very first professional basketball was ever played in 1896."
        },
       
        {
            text: "What is the capital of North Carolina?",
            answer: "Raleigh",
            options: ["Charlotte", "Asheville", "Wilmington", "Raleigh"],
            image: "assets/images/raleigh.jpg",
            detail: "Raleigh has a diverse performing arts and music scene, consisting of theaters, operas, and symphonies.It is considered a national historic landmark.",
        },
        {
            text: "What is the capital of North Dakota",
            answer: "Bismarck",
            options: ["Bismarck", "Fargo", "Minot", "Dickinson"],
            image: "assets/images/bismarck.jpg",
            detail: " The city was originally named 'Edwinton' after a man named Edwin L. Johnson, a supporter of the transcontinental railroad. But after only a year, the name was changed to Bismarck in honor of Otto von Bismarck, the German chancellor.",
        },
        {
            text: "What is the capital of Ohio?",
            answer: "Columbus",
            options: ["Cleveland", "Columbus", "Cincinnati", "Chillicothe"],
            image: "assets/images/columbus.jpg",
            detail: "When Ohio obtained its statehood in 1803, Columbus hadn’t been built yet. Chillicothe, a modest city on the Scioto River, was the original state capital.",
        },
        {
            text: "What is the capital of Oklahoma?",
            answer: "Oklahoma City",
            options: ["Oklahoma City", "Tulsa", "Norman", "Edmond"],
            image: "assets/images/oklahoma.jpg",
            detail: "The state capitol building at 23rd and Lincoln is the only capitol in the nation with a working oil well on its grounds.Oklahoma means 'Land of the Red People' in the Choctaw Language."
        },

        {
            text: "What is the capital of Oregon?",
            answer: "Salem",
            options: ["Portland", "Eugene", "Bend", "Salem"],
            image: "assets/images/salem.jpg",
            detail: "Oregon's state birthday is on February 14, Valentine's Day.Salem sits in the fertile Willamette Valley, which is known for its wineries. For those who prefer a less potent drink, there is always water: Salem's water has been recognized as one of the best tasting in the Pacific Northwest.",
        },
         
        {
            text: "What is the capital of Pennsylvania?",
            answer: "Harrisburg",
            options: ["Philadelphia", "Pittsburgh", "Lancaster", "Harrisburg"],
            image: "assets/images/harrisburg.jpg",
            detail: " The National Civil War Museum®, Harrisburg, is the nation's largest museum portraying the entire Civil War, from beginning to end, without bias to Union or Confederate causes.",
        },
        {
            text: "What is the capital of Rhode Island?",
            answer: "Providence",
            options: ["Newport", "Providence", "Warwick", "Cranston"],
            image: "assets/images/providence.jpg",
            detail: " Residents of Providence were the first to take military action against England at the start of the American Revolution by grounding and burning one of her ships. ",
        },
        {
            text: "What is the capital of South Carolina?",
            answer: "Columbia",
            options: ["Charleston", "Greenville", "Columbia", "Myrtle Beach"],
            image: "assets/images/columbia.jpg",
            detail: "It was the first city in America, as well as the first capital named for Christopher Columbus. Founded on March 26, 1786, Columbia serves as the state's center of government, education and commerce with over 200 years of history."
        },
        {
            text: "What is the capital of South Dakota?",
            answer: "Pierre",
            options: ["Sioux Falls", "Brookings", "Watertown", "Pierre"],
            image: "assets/images/oslo.jpeg",
            detail: "Pierre was chosen as the state capital in the late 1800s after a battle with the city of Mitchell, which was near the majority of the state's population. Ultimately it was voter referendum that decided on the capital and Pierre prevailed.",
        },
        {
            text: "What is the capital of Tennessee?",
            answer: "Nashville",
            options: ["Memphis", "Knoxville", "Murfreesboro", "Nashville"],
            image: "assets/images/nashville.jpg",
            detail: " Nashville was founded on Christmas Eve 1779.",
        },
        {
            text: "What is the capital of Texas?",
            answer: "Austin",
            options: ["Houston", "Dallas", "Austin", "San Antonio"],
            image: "assets/images/austin.jpg",
            detail: " It was originally called Waterloo. That was the name given by the commission that surveyed the strip of land along the Colorado River back in 1838, on orders from Republic of Texas president Mirabeau B. Lamar. The Republic’s congress quickly changed the new capital’s name to honor one of its founding fathers, Stephen F. Austin.",
        },
        {
            text: "What is the capital of Utah?",
            answer: "Salt-Lake-City",
            options: ["Ogden", "Salt-Lake-City", "St. George", "Logan"],
            image: "assets/images/salt.jpg",
            detail: "Due to its short distance to the Great Salt Lake, the city was originally named 'Great Salt Lake City'. The word 'great' was dropped from the official name in 1868. "
        },

        {
            text: "What is the capital of Vermont?",
            answer: "Montpelier",
            options: ["Montpelier", "Burlington", "Stowe", "Brattleboro"],
            image: "assets/images/montpelier.jpg",
            detail: "Shockingly, Montpelier is the only state capital without a McDonald's, so for those who need that Big Mac, they would have to drive almost five miles away.",
        },
        {
            text: "What is the capital of Virginia?",
            answer: "Richmond",
            options: ["Virginia Beach", "Norfolk", "Alexandria", "Richmond"],
            image: "assets/images/richmond.jpg",
            detail: "Patrick Henry's famous 'Give me liberty or give me death' speech was made in Richmond's St. John's Church.",
        },
        {
            text: "What is the capital of Washington?",
            answer: "Olympia",
            options: ["Seattle", "Tacoma", "Vancouver", "Olympia"],
            image: "assets/images/olympia.jpg",
            detail: "The 1949 Olympia earthquake damaged many historic buildings beyond repair, and they were demolished. Parts of the city also suffered damage from earthquakes in 1965 and 2001.",
        },
        {
            text: "What is the capital of West Virginia?",
            answer: "Charleston",
            options: ["Charleston", "Morgantown", "Huntington", "Beckley"],
            image: "assets/images/charleston.png",
            detail: "A Charleston First: According to Awesome America, Charleston is the location of the first brick street that was laid in the entire world. Known as Summers Street, it was built on October 23, 1870."
        },
        {
            text: "What is the capital of Wisconsin?",
            answer: "Madison",
            options: ["Green Bay", "Madison", "Milwaukee", "Appleton"],
            image: "assets/images/madison.jpg",
            detail: "Named after James Madison, the fourth U.S. President, Madison was incorporated as a city in 1856.",
        },
        {
            text: "What is the capital of West Wyoming?",
            answer: "Cheyenne",
            options: ["Casper", "Jackson", "Laramie", "Gillette"],
            image: "assets/images/cheyenne.png",
            detail: "The city was established on the Fourth of July, 1867. Civic leaders put together the first Cheyenne Frontier Days in less than three weeks. Wyoming petitioned for statehood seven times before it was finally named the 44th state in 1890."
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
        var cycle = setTimeout(display, 5000)
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
            var gameEnd = setTimeout(gameOver, 5000)
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



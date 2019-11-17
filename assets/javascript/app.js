
var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions = 0;
var correctAnswerIndex = 0;
var currentQuestionIndex = -1; //need to start at -1 so that we can transition to first question (index 0)

// Start Screen
var startMessage = document.getElementById("startMessage");
var startButton = document.getElementById("startGame");

// Question Screen
var questionDisplayText = document.getElementById("questionDisplay");
var answerOneText = document.getElementById("answer1");
var answerTwoText = document.getElementById("answer2");
var answerThreeText = document.getElementById("answer3");
var answerFourText = document.getElementById("answer4");
var questionTimerText = document.getElementById("questionTimer");
var questionTimer;

// Answer Screen
var wrongOrRightText = document.getElementById("wrongOrRight");
var answerTimerText = document.getElementById("answerTimer");

// Final Screen (end game)
var correctAnswersText = document.getElementById("rightAnswerCount");
var wrongAnswersText = document.getElementById("wrongAnswerCount");
var unansweredQuestionsText = document.getElementById("unansweredCount");

var questions = [{
    questionText: "Where is the heart of a shrimp located?",
    answerOptions: ["Head", "Stomach", "Leg", "Butt"],
    correctAnswerIndex: 0,
    imageURL: "https://media.giphy.com/media/8lGW4VVGOtvZpgiffD/giphy.gif"
}, {
    questionText: "How long can a snail sleep?",
    answerOptions: ["2 weeks", "12 hours", "6 months", "3 years"],
    correctAnswerIndex: 3,
    imageURL: "https://media.giphy.com/media/RCBQSWiMPTQly/giphy.gif"
}, {
    questionText: "How many noses do slugs have?",
    answerOptions: [1, 4, 7, 2],
    correctAnswerIndex: 1,
    imageURL: "https://media.giphy.com/media/X7jjWeC03QDT2/giphy.gif"
}, {
    questionText: "'Dazzle' is the term used for a group of which animal?",
    answerOptions: ["Giraffe", "Zebra", "Pigeon", "Lizard"],
    correctAnswerIndex: 1,
    imageURL: "https://media.giphy.com/media/bHoFqabfGJLpu/giphy.gif"
}, {
    questionText: "Which flightless bird is featured on New Zealand's one dollar coin?",
    answerOptions: ["Penguin", "Chicken", "Kiwi", "Emu"],
    correctAnswerIndex: 2,
    imageURL: "https://media.giphy.com/media/QmM2VFfudLjoc/giphy.gif"
}, {
    questionText: "The aardvark is native to which continent?",
    answerOptions: ["Australia", "Africa", "North America", "South America"],
    correctAnswerIndex: 1,
    imageURL: "https://media.giphy.com/media/10tytwcRXOipWw/giphy.gif"
}, {
    questionText: "What chemical element gives lobsters their bluish tint?",
    answerOptions: ["Copper", "Iron", "Nitrogen", "Hydrogen"],
    correctAnswerIndex: 0,
    imageURL: "https://media.giphy.com/media/ffLw03fTFqg2A/giphy.gif"
}, {
    questionText: "'Pandemonium' is the term used for a group of which animal?",
    answerOptions: ["Pandas", "Pigs", "Gerbils", "Parrots"],
    correctAnswerIndex: 3,
    imageURL: "https://media.giphy.com/media/xUPGcI2rB2MVNX2qMU/giphy.gif"
}, {
    questionText: "Cynophobia is the fear of what type of animal?",
    answerOptions: ["Cats", "Dogs", "Birds", "Cows"],
    correctAnswerIndex: 1,
    imageURL: "https://media.giphy.com/media/mokQK7oyiR8Sk/giphy.gif"
}, {
    questionText: "The llama is a domesticated camelid that is native to which continent?",
    answerOptions: ["Africa", "Australia", "South America", "Antarctica"],
    correctAnswerIndex: 2,
    imageURL: "https://media.giphy.com/media/b6Jt4ckHVgoRq/giphy.gif"
}];

$(document).ready(function () {

var transitionToScreen = function (screen) {
    // Hide everything
    $("#startScreen").hide();
    $("#questionScreen").hide();
    $("#answerScreen").hide();
    $("#endOfGameScreen").hide();
    // Then show just the one we want (building the identifier with string concatenation)
    $("#" + screen + "Screen").show();
}

var showNextQuestion = function () {
    currentQuestionIndex++;
    questionDisplayText.textContent = questions[currentQuestionIndex].questionText;
    answerOneText.textContent = questions[currentQuestionIndex].answerOptions[0];
    answerTwoText.textContent = questions[currentQuestionIndex].answerOptions[1];
    answerThreeText.textContent = questions[currentQuestionIndex].answerOptions[2];
    answerFourText.textContent = questions[currentQuestionIndex].answerOptions[3];
    $("#answerGIF").attr("src", questions[currentQuestionIndex].imageURL);

    var questionTimeCountdown = 15;
    var countdown = function () {
        if (questionTimeCountdown === 0) {
            clearInterval(questionTimer);
            wrongOrRightText.textContent = "You did not answer. The correct answer was " + questions[currentQuestionIndex].answerOptions[questions[currentQuestionIndex].correctAnswerIndex] + ".";
            unansweredQuestions++;
            showAnswerCountdown();
            transitionToScreen("answer");
        };
        questionTimerText.textContent = "You have " + questionTimeCountdown + " seconds left...";
        questionTimeCountdown--;
    };
    questionTimer = setInterval(countdown, 1000);
    countdown();
};

var startUp = function () {
    correctAnswers = 0;
    wrongAnswers = 0;
    unansweredQuestions = 0;
    correctAnswerIndex = 0;
    currentQuestionIndex = -1;
    transitionToScreen("question");
    showNextQuestion();
    wrongOrRight.textContent = "";
    startMessage.textContent = "";
};


// When the user selects an answer: 
$(".answerButton").click(function () {
    clearInterval(questionTimer);
    questionTimerText.textContent = "";
    var selectedAnswerIndex = parseInt(this.value);

    // If the question is correct:
    if (selectedAnswerIndex === questions[currentQuestionIndex].correctAnswerIndex) {
        correctAnswers++;
        wrongOrRight.textContent = "That's correct! The answer was " + questions[currentQuestionIndex].answerOptions[questions[currentQuestionIndex].correctAnswerIndex] + ".";
    }

    // If the question is incorrect:
    else {
        wrongAnswers++;
        wrongOrRight.textContent = "That was incorrect! The correct answer was " + questions[currentQuestionIndex].answerOptions[questions[currentQuestionIndex].correctAnswerIndex] + ".";
    }

    transitionToScreen("answer");
    showAnswerCountdown();

})

// Timer until next question is displayed
var showAnswerCountdown = function () {
    var answerTimeCountdown = 4;
    var countdown = function () {
        var isEndOfGame = currentQuestionIndex === (questions.length - 1);
        if (answerTimeCountdown === 0) {
            clearInterval(timer);
            // if the game is over
            if (isEndOfGame) {
                transitionToScreen("endOfGame");
                correctAnswersText.textContent = "You got " + correctAnswers + " right.";
                wrongAnswersText.textContent = "You got " + wrongAnswers + " wrong.";
                unansweredQuestionsText.textContent = "You left " + unansweredQuestions + " unanswered.";
            }
            else {
                showNextQuestion();
                transitionToScreen("question");
            }
        }
        if (isEndOfGame) {
            answerTimerText.textContent = "";
        } else {
            answerTimerText.textContent = "Next question in... " + answerTimeCountdown;
        }
        answerTimeCountdown--;
    };
    var timer = setInterval(countdown, 1000);
    countdown();
}

$("#startGame").on("click", function () {
    startUp();
})

$("#restartGame").on("click", function () {
    startUp();
})

transitionToScreen("start");

});

var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions = 0;
var correctAnswerIndex = 0;
var currentQuestionIndex = 0;

var timeLeft = 0;
var timer = document.getElementById("timer");

var correctAnswersText = document.getElementById("rightAnswerCount");
var wrongAnswersText = document.getElementById("wrongAnswerCount");
var unansweredQuestionsText = document.getElementById("unansweredCount");

var questionsText = document.getElementById("questionInput");
var wrongOrRight = document.getElementById("wrongOrRight");
var answerOneText = document.getElementById("answer1");
var answerTwoText = document.getElementById("answer2");
var answerThreeText = document.getElementById("answer3");
var answerFourText = document.getElementById("answer4");

var questions = [{
    questionText: "Where is the heart of a shrimp located?",
    answerOptions: ["Head", "Stomach", "Leg", "Butt"],
    correctAnswerIndex: 0
}, {
    questionText: "How long can a snail sleep?",
    answerOptions: ["2 weeks", "12 hours", "6 months", "3 years"],
    correctAnswerIndex: 3
}, {
    questionText: "How many noses do slugs have?",
    answerOptions: [1, 4, 7, 2],
    correctAnswerIndex: 1
}, {
    questionText: "'Dazzle' is the term used for a group of which animal?",
    answerOptions: ["giraffe", "zebra", "pigeon", "lizard"],
    correctAnswerIndex: 1
}, {
    questionText: "Which flightless bird is featured on New Zealand's one dollar coin?",
    answerOptions: ["penguin", "chicken", "kiwi", "emu"],
    correctAnswerIndex: 2
}, {
    questionText: "The aardvark is native to which continent?",
    answerOptions: ["Australia", "Africa", "North America", "South America"],
    correctAnswerIndex: 1
}
]


var startUp = function() {

}

var countDown = function() {

}
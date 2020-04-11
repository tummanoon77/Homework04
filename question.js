// create Element  in question 

var choice1El = document.createElement("1");
var choice2El = document.createElement("2");
var choice3El = document.createElement("3");
var choice4El = document.createElement("4");
var questionEl = document.createElement("Question");
var counter = document.createElement("counter");
var timeGauge =document.createElement("timeGauge");
var qImg =document.createElement("questionImagr");

// create arr question
var question = [
{
question: " What ",
choice1 : "",
choice2 : "",
choice3 : "",
choice4 : "",
correct : "1"
},
{
    question: " What ",
    choice1 : "",
    choice2 : "",
    choice3 : "",
    choice4 : "",
    correct : "3"
},
{
    question: " What ",
    choice1 : "",
    choice2 : "",
    choice3 : "",
    choice4 : "",
    correct : "4"
},
{
    question: " What ",
    choice1 : "",
    choice2 : "",
    choice3 : "",
    choice4 : "",
    correct : "3"
},
{
    question: " What ",
    choice1 : "",
    choice2 : "",
    choice3 : "",
    choice4 : "",
    correct : "2"
}
]
// add var
var lastQuestionIndex = question.length-1;
var runningQuestionIndex = 0;
// creat a function
function renderQuestion(){
    var q = questions[runningQuestionIndex];
    question.innerHTML = "<p>"+q.question+"</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
}


renderQuestion();
console.log( renderQuestion);
runningQuestionIndex++
renderQuestion();

// create function
function renderProgress(){
    for (var qIndex=0; qIndex<= lastquestionindex; qIndex++){
        renderProgress.innerHTML += "<div class='prog' id="+ qindex +"></div>";
    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}
function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor= "Red";
}

var questionTime = 10;
var gaugeWidth =150;
var count = 0;
var gaugeUnit = gaugeWidth/questionTime;

function counterRender(){
    if( count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = qaugeUnit*count+"px";
        count++;
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestionIndex<lastQuestionIndex){
            runningQuestionIndex++;
            questionRender();
        }else{ clearInterval(TIMER);
                scoreRender();
       }
       }
    }
var TIMER =setInterval(counterRender,1000);
stopRunning:setInterval();
clearInterval(TIMER);

function checkAnswer(answer){
    if(question[runningQuestionIndex].correct == answer){
            score++;
            answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if (runningQuestionIndex<lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        questionRender();

    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}
    
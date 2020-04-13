


// create all elements

var container = document.querySelector("#container");
var start = document.querySelector ("#start");
var mainEl = document.querySelector("#mainScreen");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var question = document.querySelector("#question");
var counter = document.querySelector("#counter");
var timeGauge =document.querySelector("#timeGauge");
var quiz = document.querySelector("#quiz");
var progress =document.querySelector("#progress");
var scoreDiv = document.querySelector ("#scoreContainer");






// create arr question
var questions = [
    {
    question: " What is official name of corona virus? ",
    choiceA : "covid-19",
    choiceB : "covid-20",
    choiceC : "corona",
    choiceD : "corona-19",
    correct : "A"
    },
    {
        question: " Have there been cases of COVID-19 in the U.S.?  ",
        choiceA : "no",
        choiceB : "Yes, reported on January 20, 2020",
        choiceC : "Yes, reported on January 21, 2020",
        choiceD : "Yes, reported on December 26, 2019",
        correct : "C"
    },
    {
        question: "How can I help protect myself? ",
        choiceA : "Avoid close contact with people who are sick",
        choiceB : "Avoid touching your eyes, nose, and mouth with unwashed hands.",
        choiceC : "Wash your hands often with soap and water for at least 20 seconds. Use an alcohol-based hand sanitizer that contains at least 60% alcohol if soap and water are not available",
        choiceD : "all of above",
        correct : "D"
    },
    {
        question: " What are not the symptoms of COVID-19? ",
        choiceA : "fever",
        choiceB : "cough",
        choiceC : "hungry",
        choiceD : "shortness of breath",
        correct : "C"
    },
    {
        question: " How does COVID-19 spread?  ",
        choiceA : "eat bat",
        choiceB : "mainly between people who are in close contact with one another (within about 6 feet) ",
        choiceC : "go outside",
        choiceD : "have a party",
        correct : "B"
    }
    ]
    // add var
    var lastQuestion = questions.length-1;
    var runningQuestion = 0;
    var count =0;
    var questionTime = 10; // 10s
    var gaugeWidth =150; //150px
    var gaugeUnit = gaugeWidth/questionTime;
    var TIMER;
    var score = 0;
    // create a render function
    function renderQuestion(){
        let q = questions[runningQuestion];
        question.innerHTML = "<p>"+q.question+"</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }
// event game start

start.addEventListener("click", startQuiz);
function startQuiz(){
    mainEl.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(var q = 0; q <= questions.length+1; q++){
        progress.innerHTML += "<div class='prog' id="+ q +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count = questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    var scorePerCent = Math.round(100 * score/questions.length);
    
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}




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
    submitInitials();
}

// render progress
function renderProgress(){
    for(var q = 0; q <= questions.length-1; q++){
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
function submitInitials()
{
    //Get the initals before changing the screen
    var initals = initalField.value;
    if(initals === "")
    {
        alert("Please enter your name");
        return;
    }

    //Display 
    quiz.style.display = "none";

    //Retrieve the locally stored high score list
    var highScoreList = JSON.parse(localStorage.getItem("highScoreList"));
    if(highScoreList === null)
    {
        highScoreList = [];
    }
    
    //This creates a new object with the player's initals and score, adds it to the highScoreList array, and then sorts the array by score, with the highest score being first.
    console.log(score);
    var initalWithScore = {name: initals, highScore: score};
    highScoreList.push(initalWithScore);
    if(highScoreList.length > 1)
    {
        highScoreList = highScoreList.sort(function(a,b){
            return b.highScore-a.highScore;
        });
    }

    //Creates HTML elements and appends them as children to the score display
    for(var i=0; i<highScoreList.length; i++)
    {
        var newElement = document.createElement("li");
        console.log(highScoreList[i].highScore);
        newElement.textContent = highScoreList[i].name + ": " + highScoreList[i].highScore;
        highScoreListDisplay.appendChild(newElement);
    }

    //Saves the new high score list to local storage
    localStorage.setItem("highScoreList",JSON.stringify(highScoreList));
}
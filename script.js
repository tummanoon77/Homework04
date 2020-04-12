// Set the body to a variable
var body = document.body;


// create all elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var div = document.createElement("div");
var startEl = document.createElement ("button")




// Set the text content of relevant elements
h1El.textContent = "Welcome to Quiz Game";
h2El.textContent = "This Game is all fact about Corona Virus. choose the correct answer";
startEl.innerHTML = "Game Start"

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(div);
infoEl.appendChild(startEl)



// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "./assets/coronavirus.jpg");
imgEl.setAttribute("height", 300);
imgEl.setAttribute("width", 350);
startEl.setAttribute("style"," font-size: 28px;text-align:center;background-color:blue; color: white; size:50px;");

// event game start

startEl.addEventListener("click", startQuiz);

// create Element  in question 
var choiceAEl = document.createElement("A");
var choiceBEl = document.createElement("B");
var choiceCEl = document.createElement("C");
var choiceDEl = document.createElement("D");
var questionEl = document.createElement("Question");
var counter = document.createElement("counter");
var timeGauge =document.createElement("timeGauge");
var quizEl = document.createElement("Quiz");
var progressRender =document.createElement ("progress");
var scoreDiv = document.createElement ("score");

// create arr question
var question = [
    {
    question: " What ",
    choiceA : "",
    choiceB : "",
    choiceC : "",
    choiceD : "",
    correct : "A"
    },
    {
        question: " What ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "C"
    },
    {
        question: " What ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "D"
    },
    {
        question: " What ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "C"
    },
    {
        question: " What ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "B"
    }
    ]
    // add var
    var lastQuestionIndex = question.length-1;
    var runningQuestionIndex = 0;
    // creat a function
    function renderQuestion(){
        var q = questions[runningQuestionIndex];
        question.innerHTML = "<p>"+q.question+"</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }
    

function startQuiz(){
        startEl.style.display ="none";
        counterRender();
        TIMER =setInterval(counterRender,1000);
        progressRender();
        questionRender();
        quizEl.style.display = "block";
}
        function scoreRender(){
            ScoreContainer.style.display ="block";
            var scorePercent = Math.round(100-score/question.length)

}

function counterRender(){
    if( counter <= questionTime){
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

clearInterval(TIMER);
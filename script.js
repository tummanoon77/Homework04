// Set the body to a variable
var body = document.body;


// create all elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var div = document.createElement("div");
var meButton = document.createElement("button");

var quizEl = document.createElement("Quiz");
var timeEl = document.createElement("time");


// Set the text content of relevant elements
h1El.textContent = "Welcome to Quiz Game";
h2El.textContent = "This Game is all fact about Corona Virus. choose the correct answer";
meButton.innerHTML ="Game Start";

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(div);
div.appendChild(meButton);


// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "./assets/coronavirus.jpg");
imgEl.setAttribute("height", 300);
imgEl.setAttribute("width", 350);
meButton.setAttribute("style"," font-size: 28px;text-align:center;background-color:blue; color: white; size:50px;");

// event game start

meButton.addEventListener("click", startQuiz);


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
stop running:setInterval();
clearInterval(TIMER);

function startQuiz(){
        meButton.style.display ="none";
        counterRender();
        TIMER =setInterval(counterRender,1000);
        progressRender();
        questionRender();
        quizEl,style.display = "block";
}
        function scoreRender(){
            ScoreContainer.style.display ="block";
            var scorePercent = Math.round(100-score/question.length)

}


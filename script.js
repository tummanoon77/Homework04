// Set the body to a variable
var body = document.body;

// create all elements

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var meButton = document.createElement("Button");


// Set the text content of relevant elements
h1El.textContent = "Welcome to Quiz Game";
h2El.textContent = "This Game is all fact about Covid-19 Virus. choose the correct answer";
meButton.innerHTML = "Game Start";

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
document.body.appendChild(meButton);


// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
meButton.setAttribute("style" , " font-size:28px; background-color : blue; color: white; padding: 15px 32px;text-align:center;display: flex; justify-content: center; ");

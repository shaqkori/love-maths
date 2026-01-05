//selects all the availible gamemodes
const modes = document.querySelectorAll(".mode");

//initialises the number elements
let num1 = document.getElementById("first-number");
let num2 = document.getElementById("second-number");

//initialises input
input = document.getElementById("input");

form = document.getElementById("solution");
submit = document.getElementById("enter");

//sets default mode on reload and handles the active gamemode
let currentGameMode = null;

// initialised the awnser
let answer = 0;

let correct = 1;
let incorrect = 1;
//loops through each mode and when clicked updates current gamemode
modes.forEach((mode) => {
  mode.addEventListener("click", () => {
    currentGameMode = mode.id;
    //sets number to random between 1 and 50
    first = Math.floor(Math.random() * 50) + 1;
    second = Math.floor(Math.random() * 50) + 1;

    //sets num element eual to the the first and second element as inner html stores as string
    num1.innerHTML = first;
    num2.innerHTML = second;

    // if statement handles game state and performs operations
    if (currentGameMode == "add") {
      document.getElementById("operator").innerHTML = "+";
      answer = first + second;
    } else if (currentGameMode == "subtract") {
      document.getElementById("operator").innerHTML = "-";
      answer = first - second;
    } else if (currentGameMode == "divide") {
      document.getElementById("operator").innerHTML = "/";
      answer = first / second;
    } else if (currentGameMode == "multiply") {
      document.getElementById("operator").innerHTML = "x";
      answer = first * second;
    }

    //submit event

    //logging
    console.log("selected mode:", currentGameMode);

    console.log(answer);
  });
});

//handles the submit method
onsubmit = (event) => {
  //stops it from reloading the page so the values do not reset
  event.preventDefault();
  // sets user value = to the value in the input form
  const userAnwser = Number(input.value);

  //comparison for input
  if (userAnwser == answer) {
    document.getElementById("correct").innerHTML =
      "Correct Anwsers:" + correct++; //increments when right
  } else {
    document.getElementById("incorrect").innerHTML =
      "Incorrect Anwsers:" + incorrect++;
  }

  console.log(userAnwser);
  console.log(answer);
};

submit.addEventListener("click", onsubmit); // runs function when button is clicked

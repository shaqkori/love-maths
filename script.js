//selects all the availible gamemodes
const modes = document.querySelectorAll(".mode");

//initialises the number elements
let num1 = document.getElementById("first-number");
let num2 = document.getElementById("second-number");

//sets default mode on reload and handles the active gamemode
let currentGameMode = null;

// initialised the awnser
let answer = 0;
//loops through each mode and when clicked updates current gamemode
modes.forEach((mode) => {
  mode.addEventListener("click", () => {
    currentGameMode = mode.id;
    //sets number to random between 1 and 50
    num1 = Math.floor(Math.random() * 50) + 1;
    num2 = Math.floor(Math.random() * 50) + 1;
    if (currentGameMode == "add") {
      document.getElementById("operator").innerHTML = "+";
      answer = num1 + num2;
    } else if (currentGameMode == "subtract") {
      document.getElementById("operator").innerHTML = "-";
      answer = num1 - num2;
    } else if (currentGameMode == "divide") {
      document.getElementById("operator").innerHTML = "/";
      answer = num1 / num2;
    } else if (currentGameMode == "multiply") {
      document.getElementById("operator").innerHTML = "x";
      answer = num1 * num2;
    }

    console.log("selected mode:", currentGameMode);

    console.log(answer);
  });
});

//handles the game mode state

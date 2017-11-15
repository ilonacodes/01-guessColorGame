var colors = ["red", "blue", "pink", "green", "black", "white", "yellow"];
var buttonElem = document.querySelector("a");

function randomColor() {
    return Math.floor(Math.random() * colors.length);
};

function game() {
    var targetColor;
    var userInput;
    var count = 0;

    colors.sort();

    var newColorsArr = colors.join(', ');

    targetColor = randomColor();

    do {
        userInput = prompt("I am thinking of one of colors\n\n" + newColorsArr + "\n\nWhat color am I thinking of?");
        count++;
    } while (checkUserGuess(userInput, targetColor, count));
}

function query(tag) {
    return document.getElementsByTagName(tag)[0];
}

function checkUserGuess(userInput, targetColor, count) {
    var index = colors.indexOf(userInput);

    if (index < 0) {
        alert("I do not recognize that color!");
    } else if (index > targetColor) {
        alert("Your input alphabetically higher than mine!");
    } else if (index < targetColor) {
        alert ("Your input alphabetically lower than mine!");
    } else {
        var inputElement = query("body");
        inputElement.style.background = colors[targetColor];
        alert("You are right! You took " + count + " guesses");
        return false;
    }

    return true;
}

buttonElem.addEventListener('click', function (e) {
    game();
});
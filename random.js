let numberOfDiceInput = document.getElementById("number_of_dice"),
    rollButton = document.getElementById("roll_button"),
    numberOfSidesInput = document.getElementById("number_of_sides"),
    displayNumbers = document.getElementById("display_numbers"),
    clearButton = document.getElementById("clear_button"),
    numberOfRolls = 0;

//Generates a random number
let getRandomNumber = function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randy = Math.random();

    return Math.floor(randy * (max - min + 1) + min)
};

//Rolls the number of dice for the number of sides. 
rollButton.addEventListener("click", function () {
    let numDice = numberOfDiceInput.value;
    let dieSides = numberOfSidesInput.value;
    for (let i = 0; i < numDice; i++) {
        if (i < numDice) {
            displayNumbers.innerHTML += `The #${i + 1} die is ${getRandomNumber(1, dieSides)} <br>`;
        }
    }
});

clearButton.addEventListener("click", function(){
    displayNumbers.innerHTML = " ";
})


//Next steps:
//Track number of rolls.
//Record number of rolls above each result.
//Re-roll button which rolls the specified dice and replaces the last result. 
//CSS work.
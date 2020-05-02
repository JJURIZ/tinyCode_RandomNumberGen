let firstNumberInput = document.getElementById("first_number_input"),
    firstNumberButton = document.getElementById("first_number_button"),
    secondNumberInput = document.getElementById("second_number_input"),
    secondNumberButton = document.getElementById("second_number_button"),
    displayNumbers = document.getElementById("display_numbers");

firstNumberButton.addEventListener("click", function () {
    let number = firstNumberInput.value; 
    displayNumbers.innerHTML += getRandomNumber(1, number) + "<br>";
});

let getRandomNumber = function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    randy = Math.random();

    return Math.floor(randy * (max - min + 1) + min)
};


//Enter number of dice
//Enter number of sides of dice

//Roll the dice

//When rolled generate a random number no less than 1 and no higher than the # of sides of the dice.
//Generate a total based on the number of dice rolled. 

//Display the individual dice rolls and their total. 

//Loop through the random number generator equal to the number of dice rolled. 
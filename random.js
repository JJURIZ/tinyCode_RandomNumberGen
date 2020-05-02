let firstNumberInput = document.getElementById("first_number_input"),
    firstNumberButton = document.getElementById("first_number_button"),
    displayNumbers = document.getElementById("display_numbers");

firstNumberButton.addEventListener("click", function (){
    let randy = Math.random(firstNumberInput);
    displayNumbers.innerText = randy;
});
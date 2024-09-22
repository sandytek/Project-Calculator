function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let numDisplay = '';
let operator = '';
let firstNum = '';
let secondNum = '';
let result = '';

function operate(operation, first, second) {
    switch(operation) {
        case "+": 
            return add(first, second);
        case "-":
            return subtract(first, second);
        case "*":
            return multiply(first, second);
            
        case "/":
            return divide(first, second);
        }
    }

const mainDisplay = document.querySelector(".display");
const numButtons = document.querySelectorAll(".button");
const opsButtons = document.querySelectorAll(".opsButton");
const equal = document.querySelector(".equalButton");
const clear = document.querySelector(".clearButton");


numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        numDisplay += button.textContent;
        mainDisplay.textContent = `${numDisplay}`;
    });
});

opsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        opsButtonEventCallback();
    })
})

function opsButtonEventCallback(ops) {
    if (firstNum == '' && secondNum == '') {
        firstNum = numDisplay;
        numDisplay = '';
    } else if (firstNum !== '' && secondNum == '' && numDisplay !== '') {
        secondNum = numDisplay;
        result = operate(operator, parseInt(firstNum), parseInt(secondNum));
        mainDisplay.textContent = `${result}`;
        firstNum = result;
        secondNum = '';
        numDisplay = '';
    } 
}

equal.addEventListener("click", () => {
    equalButtonEventCallback();
})

function equalButtonEventCallback() {
    if (firstNum !== '' && numDisplay !== '') {
        secondNum = numDisplay;
        result = operate(operator, parseInt(firstNum), parseInt(secondNum));
        mainDisplay.textContent = `${result}`;
        firstNum = '';
        secondNum = '';
        numDisplay = result;
    }
}

clear.addEventListener("click", () => {
    mainDisplay.textContent = '';
    numDisplay = '';
    firstNum = '';
    secondNum = '';
    result = '';
    operator = '';
});

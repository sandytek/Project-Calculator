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
let decimalLog = 0;

function operate(operation, first, second) {
    switch(operation) {
        case "+": 
            return add(first, second);
        case "-":
            return subtract(first, second);
        case "*":
            return multiply(first, second);
            
        case "/":
            if (second == 0) {
                alert("Hey! Don't do this!");
                return '';
            } else {
            return divide(first, second);
            }
        }
    }

const mainDisplay = document.querySelector(".display");
const numButtons = document.querySelectorAll(".button");
const opsButtons = document.querySelectorAll(".opsButton");
const equal = document.querySelector(".equalButton");
const clear = document.querySelector(".clearButton");
const decimal = document.querySelector(".decimalButton")

// get the decimal button specially to control it
// const decimalButton = Array.from(numButtons).find(button => button.textContent === '.');


numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        numDisplay += button.textContent;
        mainDisplay.textContent = `${numDisplay}`;
    });
});

decimal.addEventListener("click", () => {
    if (numDisplay.length == 0) {
        numDisplay = "0";
        mainDisplay.textContent = `${numDisplay}`;
        disableDecimalBtn();
    }
    numDisplay += decimal.textContent;
    mainDisplay.textContent = `${numDisplay}`;
    disableDecimalBtn();
    
});

// add a second event listener specially for the decimal button.
// if decimal button is enabled, it is clickable,
// i.e. it can add '.' to the number
// so it should disable itself when clicked
/*
decimalButton.addEventListener("click", () => {
    disableDecimalBtn();
});
*/

opsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        opsButtonEventCallback();
    })
})

function opsButtonEventCallback() {
    // when pressing ops button,
    // calculator will be processing input for the next number.
    // next number starts empty i.e. no decimal
    // so enable decimal button
    if (firstNum == '' && secondNum == '') {
        firstNum = numDisplay;
        enableDecimalBtn();
        numDisplay = '';
        // enableDecimalBtn();
    } else if (firstNum !== '' && secondNum == '' && numDisplay !== '') {
        secondNum = numDisplay;
        enableDecimalBtn();
        result = operate(operator, Number(firstNum), Number(secondNum));
        mainDisplay.textContent = `${result}`;
        firstNum = result;
        secondNum = '';
        numDisplay = '';
        // enableDecimalBtn();
    } 
}

equal.addEventListener("click", () => {
    equalButtonEventCallback()
})

function equalButtonEventCallback() {
    if (firstNum !== '' && numDisplay !== '') {
        secondNum = numDisplay;
        result = operate(operator, Number(firstNum), Number(secondNum));
        mainDisplay.textContent = `${result}`;
        firstNum = '';
        secondNum = '';
        numDisplay = result;
        enableDecimalBtn();
    }
}

clear.addEventListener("click", () => {
    mainDisplay.textContent = '';
    numDisplay = '';
    firstNum = '';
    secondNum = '';
    result = '';
    operator = '';
    enableDecimalBtn();
    // since the entire number is cleared, decimal (if added) also disappears
    // so enable decimal button
    // enableDecimalBtn();
});



document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "1":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "2":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "3":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "4":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "5":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "6":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "7":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "8":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "9":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "0":
            numDisplay += event.key;
            mainDisplay.textContent = `${numDisplay}`;
            break;
        case "=":
            equalButtonEventCallback();
            break;
        case "+":
            operator = event.key;
            opsButtonEventCallback();
            break;
        case "-":
            operator = event.key;
            opsButtonEventCallback();
            break;
        case "/":
            operator = event.key;
            opsButtonEventCallback();
            break;
        case "*":
            operator = event.key;
            opsButtonEventCallback();
            break;
        case ".":
            if (numDisplay.length == 0) {
                    numDisplay = "0";
                    numDisplay += event.key;
                    mainDisplay.textContent = `${numDisplay}`;
                    disableDecimalBtn();
            }
            if (decimalLog == 0) {
                numDisplay += event.key;
                mainDisplay.textContent = `${numDisplay}`;
                disableDecimalBtn();
            }
                break;
        case "Backspace":
            if(numDisplay !== '') {
                // slice numDisplay, but didnt assign the slice back to numDisplay
                // i.e. did not change numDisplay
                let sliced = numDisplay.slice(0,-1);
                let prev = numDisplay.slice(-1);
                if(prev == ".") {
                    enableDecimalBtn();
                }
                numDisplay = sliced;
                mainDisplay.textContent = `${numDisplay}`;
            }
            break;
    }
        
});

function enableDecimalBtn() {
    decimal.disabled = false;
    decimalLog = 0;
}

function disableDecimalBtn() {
    decimal.disabled = true;
    decimalLog = 1;
}

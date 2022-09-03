const numPad = document.querySelector('.numPad');
const numButton = document.querySelectorAll('.numButton');
const clearButton = document.querySelector('.clear');
const backButton = document.querySelector('.back');
const screenContent = document.querySelector('.screenContent');
const operatorButton = document.querySelectorAll('.operator');

let currentNum = null;
let previousNum = null;
let operator = '';
let nextOperand = false;

// Buttons input
numButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (nextOperand) {
            screenContent.textContent = '';
            nextOperand = false;
        }
        if (screenContent.textContent.length < 9) {
            screenContent.textContent += button.textContent;
        };
        currentNum = parseFloat(screenContent.textContent);
    })
});

// Clear screen and delete last number function
clearButton.addEventListener('click', () => {
    screenContent.textContent = '';
    previousNum = null;
    currentNum = null;
    operator = '';
    nextOperand = false;
});

backButton.addEventListener('click', () => {
    screenContent.textContent = screenContent.textContent.slice(0, screenContent.textContent.length - 1);
    currentNum = Math.floor(currentNum / 10);
});

// Operator buttons
operatorButton.forEach((button) => {
    button.addEventListener('click', operate);
});

// Enter a number, hit an operator -> \ number becomes previous number, operator variable gets the operator's value
//Enter new number (screen gets cleared after hitting the first number), hit equal or another operator -> calculation is made with previous number, current number(text content of screen) and operator hit the time before) - the result is shown on the screen and it becomes previous number

// Do the operation
function operate() {
    // If there are two operands and an operator is input
    if (previousNum) {
        currentNum = +screenContent.textContent;
        switch (true) {
            case operator === 'x':
                screenContent.textContent = (previousNum * currentNum);
                break;
            case operator === '-':
                screenContent.textContent = (previousNum - currentNum);
                break;
            case operator === '+':
                screenContent.textContent = (previousNum + currentNum);
                break;
            case operator === '%':
                screenContent.textContent = (previousNum / currentNum).toFixed(3);
                break;
        };
        previousNum = +screenContent.textContent;

        // If there is only one operand and an operator is input
    } else {
        previousNum = +screenContent.textContent;
    }

    operator = this.textContent;
    nextOperand = true;
};
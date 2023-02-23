const numPad = document.querySelector(".numPad");
const numButton = document.querySelectorAll(".numButton");
const clearButton = document.querySelector(".clear");
const backButton = document.querySelector(".back");
const screenContent = document.querySelector(".screenContent");
const operatorButton = document.querySelectorAll(".operator");

let secondOperand = null;
let firstOperand = null;
let secondOperator = "";
let firstOperator = "";

// If there are no operators and no operands
//-> hitting a number button input the button and makes the current number equal to screen content

// If there is a previous operand, no operators
//-> hitting an operator button makes that operator the previous operator

// If there is a previous operand and a previous operator
//-> hitting a number button makes the screen number the previous number, clears the screen and add the current number on the screen

// If there is a previous and a current number, and a previous operator
//-> hitting an operator button makes the operation, the result becomes the previous number and is output on the screen, the current operator becomes the previous operator

// Clear screen function
clearButton.addEventListener("click", clearScreen);

function clearScreen() {
  screenContent.textContent = "";
  firstOperand = null;
  secondOperand = null;
  firstOperator = "";
  secondOperator = "";
}

// Delete last number function
backButton.addEventListener("click", () => {
  screenContent.textContent = screenContent.textContent.slice(
    0,
    screenContent.textContent.length - 1
  );
  secondOperand = Math.floor(secondOperand / 10);
});

// Number input
numButton.forEach((button) => {
  button.addEventListener("click", numInput);
});

function numInput() {
  if (screenContent.textContent == "ERROR") clearScreen();
  if (firstOperand && secondOperator && !secondOperand) {
    screenContent.textContent = "";
    if (screenContent.textContent.length < 9) {
      screenContent.textContent += this.textContent;
    }
    firstOperator = secondOperator;
    secondOperator = "";
  } else {
    if (screenContent.textContent.length < 9) {
      screenContent.textContent += this.textContent;
    }
  }
  secondOperand = parseFloat(screenContent.textContent);
}

// Operator input
operatorButton.forEach((button) => {
  button.addEventListener("click", operate);
});

function operate() {
  secondOperator = this.textContent;
  if (secondOperand === 0 && firstOperator === "%") {
    clearScreen();
    screenContent.textContent = "ERROR";
  }

  if (firstOperand && firstOperator && secondOperand) {
    switch (true) {
      case firstOperator === "x":
        screenContent.textContent = firstOperand * secondOperand;
        break;
      case firstOperator === "-":
        screenContent.textContent = firstOperand - secondOperand;
        break;
      case firstOperator === "+":
        screenContent.textContent = firstOperand + secondOperand;
        break;
      case firstOperator === "%":
        screenContent.textContent = firstOperand / secondOperand;
        break;
    }
    firstOperand = +screenContent.textContent;
    secondOperand = "";
    firstOperator = secondOperator;
  } else if (secondOperand) {
    firstOperand = secondOperand;
    secondOperand = "";
    secondOperator = this.textContent;
  }
}

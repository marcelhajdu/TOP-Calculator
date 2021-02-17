let num1;
let num2;
let func;

const bOne = document.querySelector(".one");
const bTwo = document.querySelector(".two");
const bThree = document.querySelector(".three");
const bFour = document.querySelector(".four");
const bFive = document.querySelector(".five");
const bSix = document.querySelector(".six");
const bSeven = document.querySelector(".seven");
const bEight = document.querySelector(".eight");
const bNine = document.querySelector(".nine");
const bAdd = document.querySelector(".add");
const bSubtract = document.querySelector(".subtract");
const bMultiply = document.querySelector(".multiply");
const bDivide = document.querySelector(".divide");
const bClear = document.querySelector(".clear");
const bEquals = document.querySelector(".equals");

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

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    console.log(
      `Operator is undefined. Please repeat the process and choose an operator this time.`
    );
  }
}

bOne.addEventListener("click", () => {
  if (num1 === undefined) {
    num1 = 1;
  } else {
    num2 = 1;
    num1 = operate(num1, num2, func);
    console.log(num1);
    //here comes the logic, that calculates the sum of the two numbers with the help of the operate function
    //we save the sum to the num1 variable
    //or we can make a separate function for this
  }
});

bTwo.addEventListener("click", () => {
  if (num1 === undefined) {
    num1 = 2;
  } else {
    num2 = 2;
    num1 = operate(num1, num2, func);
    //here comes the logic, that calculates the sum of the two numbers with the help of the operate function
    //we save the sum to the num1 variable
    //or we can make a separate function for this
  }
});

bAdd.addEventListener("click", () => {
  func = "+";
});

bSubtract.addEventListener("click", () => {
  func = "-";
});

bMultiply.addEventListener("click", () => {
  func = "*";
});

bDivide.addEventListener("click", () => {
  func = "/";
});

bClear.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  func = "";
  display.innerHTML = "Please write in your numbers";
});

bEquals.addEventListener("click", () => {
  display.innerHTML = num1;
});

const display = document.querySelector(".display");
if (num1 === undefined) {
  display.innerHTML = "Please write in your numbers";
}

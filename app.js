let num1 = "";
let num2 = "";
let result = 0;
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
  num1 += "1";
  console.log(num1);
});

bTwo.addEventListener("click", () => {
  num1 += "2";
  console.log(num1);
});

bThree.addEventListener("click", () => {
  if (num1 === undefined || num1 === 0) {
    num1 = 3;
  } else {
    num2 = 3;
    num1 = operate(num1, num2, func);
  }
});

bFour.addEventListener("click", () => {
  if (num1 === undefined || num1 === 0) {
    num1 = 4;
  } else {
    num2 = 4;
    num1 = operate(num1, num2, func);
  }
});

bFive.addEventListener("click", () => {
  if (num1 === undefined || num1 === 0) {
    num1 = 5;
  } else {
    num2 = 5;
    num1 = operate(num1, num2, func);
  }
});

bSix.addEventListener("click", () => {
  if (num1 === undefined || num1 === 0) {
    num1 = 6;
  } else {
    num2 = 6;
    num1 = operate(num1, num2, func);
  }
});

bSeven.addEventListener("click", () => {
  if (num1 === undefined || num1 === 0) {
    num1 = 7;
  } else {
    num2 = 7;
    num1 = operate(num1, num2, func);
  }
});

bEight.addEventListener("click", () => {
  if (num1 === undefined || num1 === 0) {
    num1 = 8;
  } else {
    num2 = 8;
    num1 = operate(num1, num2, func);
  }
});

bNine.addEventListener("click", () => {
  if (num1 === undefined || num1 === 0) {
    num1 = 9;
  } else {
    num2 = 9;
    num1 = operate(num1, num2, func);
  }
});

bAdd.addEventListener("click", () => {
  result = num1;
  num1 = "";
  func = "+";
});

bSubtract.addEventListener("click", () => {
  result = num1;
  num1 = "";
  func = "-";
});

bMultiply.addEventListener("click", () => {
  result = num1;
  num1 = "";
  func = "*";
});

bDivide.addEventListener("click", () => {
  result = num1;
  num1 = "";
  func = "/";
});

bClear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  func = "";
  result = 0;
  display.innerHTML = "Please write in your numbers";
});

bEquals.addEventListener("click", () => {
  result = parseInt(result);
  num1 = parseInt(num1);
  let equal = operate(result, num1, func);
  display.innerHTML = equal;
});

const display = document.querySelector(".display");
display.innerHTML = "Please write in your numbers";

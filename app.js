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
  if (num1 === undefined || num1 === 0) {
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
  if (num1 === undefined || num1 === 0) {
    num1 = 2;
  } else {
    num2 = 2;
    num1 = operate(num1, num2, func);
  }
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
  console.log(num1);
  console.log(num2);
  console.log(func);
});

bEquals.addEventListener("click", () => {
  display.innerHTML = num1;
});

const display = document.querySelector(".display");
if (num1 === undefined) {
  display.innerHTML = "Please write in your numbers";
}

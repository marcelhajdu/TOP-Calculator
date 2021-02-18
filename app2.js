let num = "";
let result = 0;
let func;

const bZero = document.querySelector(".zero");
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

bZero.addEventListener("click", () => {
  num1 += "0";
});

bOne.addEventListener("click", () => {
  num1 += "1";
});

bTwo.addEventListener("click", () => {
  num1 += "2";
});

bThree.addEventListener("click", () => {
  num1 += "3";
});

bFour.addEventListener("click", () => {
  num1 += "4";
});

bFive.addEventListener("click", () => {
  num1 += "5";
});

bSix.addEventListener("click", () => {
  num1 += "6";
});

bSeven.addEventListener("click", () => {
  num1 += "7";
});

bEight.addEventListener("click", () => {
  num1 += "8";
});

bNine.addEventListener("click", () => {
  num1 += "9";
});

bAdd.addEventListener("click", () => {
  func = "+";
  if (num1 !== "" && result !== 0) {
    let equal = operate(result, num1, func);
    display.innerHTML = equal;
    result = equal;
    num1 = "";
  } else {
    if (result === 0) {
      result = parseInt(num1);
      num1 = "";
    } else {
      num1 = parseInt(num1);
      console.log(`result is ${result} num1 is ${num1} and func is ${func}`);
      let equal = operate(result, num1, func);
      display.innerHTML = equal;
      result = equal;
      num1 = "";
      //func = "";
    }
  }
});

bSubtract.addEventListener("click", () => {
  func = "-";
  if (num1 !== "" && result !== 0) {
    let equal = operate(result, num1, func);
    display.innerHTML = equal;
    result = equal;
    num1 = "";
  } else {
    if (result === 0) {
      result = parseInt(num1);
      num1 = "";
    } else {
      num1 = parseInt(num1);
      console.log(`result is ${result} num1 is ${num1} and func is ${func}`);
      let equal = operate(result, num1, func);
      display.innerHTML = equal;
      result = equal;
      num1 = "";
      //func = "";
    }
  }
});

bMultiply.addEventListener("click", () => {
  func = "*";
  if (num1 !== "" && result !== 0) {
    let equal = operate(result, num1, func);
    display.innerHTML = equal;
    result = equal;
    num1 = "";
  } else {
    if (result === 0) {
      result = parseInt(num1);
      num1 = "";
    } else {
      num1 = parseInt(num1);
      console.log(`result is ${result} num1 is ${num1} and func is ${func}`);
      let equal = operate(result, num1, func);
      display.innerHTML = equal;
      result = equal;
      num1 = "";
      //func = "";
    }
  }
});

bDivide.addEventListener("click", () => {
  func = "/";
  if (num1 !== "" && result !== 0) {
    let equal = operate(result, num1, func);
    display.innerHTML = equal;
    result = equal;
    num1 = "";
  } else {
    if (result === 0) {
      result = parseInt(num1);
      num1 = "";
    } else {
      num1 = parseInt(num1);
      console.log(`result is ${result} num1 is ${num1} and func is ${func}`);
      let equal = operate(result, num1, func);
      display.innerHTML = equal;
      result = equal;
      num1 = "";
      //func = "";
    }
  }
});

bClear.addEventListener("click", () => {
  num1 = "";
  func = "";
  result = 0;
  display.innerHTML = "Please write in your numbers";
});

bEquals.addEventListener("click", () => {
  result = parseInt(result);
  num1 = parseInt(num1);
  let equal = operate(result, num1, func);
  display.innerHTML = equal;
  result = equal;
  func = "";
  //if I want to do an another calculation after pressing the equal key, the num1-s value causing problems
  num1 = "";
});

const display = document.querySelector(".display");
display.innerHTML = "Please write in your numbers";

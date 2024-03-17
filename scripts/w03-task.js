/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  function addNumbers() {
    let add1Value = Number(document.querySelector('#add1').value);
    let add2Value = Number(document.querySelector('#add2').value);
  
    let sum = add(add1Value, add2Value);
  
    document.querySelector('#sum').value = sum;
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function() {
    let subtract1Value = Number(document.querySelector('#subtract1').value);
    let subtract2Value = Number(document.querySelector('#subtract2').value);
  
    let difference = subtract(subtract1Value, subtract2Value);
  
    document.querySelector('#difference').value = difference;
  };
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let factor1Value = Number(document.querySelector('#factor1').value);
  let factor2Value = Number(document.querySelector('#factor2').value);

  let product = multiply(factor1Value, factor2Value);

  document.querySelector('#product').value = product;
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
  }

  function divideNumbers() {
    const dividendValue = Number(document.querySelector('#dividend').value);
    const divisorValue = Number(document.querySelector('#divisor').value);
  
    const quotient = divide(dividendValue, divisorValue);
  
    document.querySelector('#quotient').value = quotient;
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    const subtotal = Number(document.querySelector('#subtotal').value);
  
    const membershipCheckbox = document.querySelector('#member');
    const isMember = membershipCheckbox.checked;
  
    const discount = isMember ? 0.2 * subtotal : 0;
  
    const totalDue = subtotal - discount;
  
    document.querySelector('#total').textContent = ` $${totalDue.toFixed(2)}`;
  });

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrayString = numbersArray.join(', ');
document.querySelector('#array').textContent = arrayString;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
let oddNumbersString = oddNumbers.join(', ');
document.querySelector('#odds').textContent = oddNumbersString;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
let evenNumbersString = evenNumbers.join(', ');
document.querySelector('#evens').textContent = evenNumbersString;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
let multipliedString = multipliedArray.join(', ');
document.getElementById("multiplied").textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
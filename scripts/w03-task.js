/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) 
{
    // Function body
    return number1 + number2;
}

function addNumbers() 
{
    // Get the values of the input fields
    var number1 = parseFloat(document.getElementById("add1").value);
    var number2 = parseFloat(document.getElementById("add2").value);

    // Call the add function with the retrieved values
    var sum = add(number1, number2);

    // Assign the result to the HTML form element with ID 'sum'
    document.getElementById("sum").value = sum;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
var subtract = function(number1, number2) 
{
    return number1 - number2;
};

var subtractNumbers = function() 
{
    var number1 = parseFloat(document.getElementById("subtract1").value);
    var number2 = parseFloat(document.getElementById("subtract2").value);
    var difference = subtract(number1, number2);
    document.getElementById("difference").value = difference;
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => 
{
    return number1 * number2;
};

const multiplyNumbers = () => 
{
    const number1 = parseFloat(document.getElementById("factor1").value);
    const number2 = parseFloat(document.getElementById("factor2").value);
    const product = multiply(number1, number2);
    document.getElementById("product").value = product;
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Function declaration
function divide(dividend, divisor) {
    return dividend / divisor;
}

// Function expression
var divideNumbers = function() {
    var dividend = parseFloat(document.getElementById("dividend").value);
    var divisor = parseFloat(document.getElementById("divisor").value);
    var quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.getElementById("getTotalDue").addEventListener("click", function() {
    // Get the subtotal entered by the user
    var subtotal = parseFloat(document.getElementById("subtotal").value);

    // Check if the membership checkbox is checked
    var membershipCheckbox = document.getElementById("membership");
    var isMembershipChecked = membershipCheckbox.checked;

    // Apply discount if membership checkbox is checked
    var total;
    if (isMembershipChecked) {
        total = subtotal * 0.8; // Apply 20% discount
    } else {
        total = subtotal;
    }

    // Output the total to the total span
    document.getElementById("total").textContent = `Total Due: $${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = "Array: " + numbers.join(", ");

/* Output Odds Only Array */
let odds = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = "Odds: " + odds.join(", ");

/* Output Evens Only Array */
let evens = numbersArray.filter(number => number % 2 == 0);
document.getElementById("evens").textContent = "Evens: " + evens.join(", ");

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").textContent = "Sum of Array: " + sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = "Multiplied: " + multipliedBy2.join(", ");

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
document.getElementById("sumOfMultiplied").textContent = "Sum of Multiplied: " + sumOfMultiplied;
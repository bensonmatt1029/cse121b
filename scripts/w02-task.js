/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// Declare and instantiate a variable to hold your name.
const fullName = 'Matthew Benson';

// Declare and instantiate a variable to hold the current year.
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path and file name of the image.
const profilePicture = 'images/profile_pic.png';

/* Step 3 - Element Variables */

// Use the document.getElementById() method to get the HTML element with the id of "name" and store it in a const variable named "nameElement".
const nameElement = document.getElementById('name');

// Use the document.getElementById() method to get the HTML element with the id of "food" and store it in a const variable named "foodElement".
const foodElement = document.getElementById('food');

// Use the document.querySelector() method to get the element with the id of "year" and store it in a variable named "yearElement".
const yearElement = document.querySelector('#year');

// Use any viable method to get the profile image element stored in a variable named "imageElement".
const imageElement = document.getElementById('profileImage');


/* Step 4 - Adding Content */

// Assign the nameElement's innerHTML property the fullName variable value.
// Surround the fullName value with <strong> tags using a template literal.
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2.
imageElement.setAttribute('src', profilePicture);

// Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]' where the name variable comes from Step 2.
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

// Declare an array variable to hold your favorite foods.
let favFoods = ['Pizza', 'Chocolate', 'Hamburgers'];

// Modify the HTML element with the id of food to display your favorite foods array.
foodElement.innerHTML = favFoods.join('<br>');

// Declare and instantiate a variable to hold another single favorite food item.
let newFavoriteFood = 'Ice Cream';

// Add the value stored in this new variable to your favorite food array using the push() method.
favFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food using a line break.
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the first element in the favorite food array.
favFoods.shift();

// Append the array output showing the modified array, using a line break.
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the last element in the favorite food array.
favFoods.pop();

// Append the array output with this final modified favorite foods array, using a line break.
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
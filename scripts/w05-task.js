/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples-div');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    const templesElement = document.getElementById("temples");
    templesElement.innerHTML = ""; // Clear previous content
    temples.forEach(temple => {
        const article = document.createElement('article');
        const templeNameHeading = document.createElement('h3');
        templeNameHeading.textContent = temple.templeName;
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.location;
        article.appendChild(templeNameHeading);
        article.appendChild(templeImage);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const templeData = await response.json();
        templeList = templeData;
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* reset Function */
const reset = () => {
    const articles = templesElement.querySelectorAll('article');

    articles.forEach(article => {
        article.remove();
    });
};

/* filterTemples Function */
const filterTemples = () => {
    const filter = document.getElementById('filtered').value;
    let filteredTemples = [];
    switch (filter) {
        case "utah":
            filteredTemples = templeList.filter(temple => temple.location.includes("Utah"));
            break;
        case "notutah":
            filteredTemples = templeList.filter(temple => !temple.location.includes("Utah"));
            break;
        case "older":
            filteredTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case "all":
            filteredTemples = templeList;
            break;
        default:
            console.error("Invalid filter value");
    }
    displayTemples(filteredTemples);
};



/* Event Listener */
document.getElementById('filtered').addEventListener('change', filterTemples);
document.addEventListener('DOMContentLoaded', getTemples);

getTemples();
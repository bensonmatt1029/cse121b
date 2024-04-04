const recipeList = document.getElementById('recipeList');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Function to fetch recipes
function fetchRecipes(query) {
    const apiKey = 'd3b70f149a474d24adbfc5f053dac6bd';
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            return response.json();
        })
        .then(data => {
            // Process the fetched data
            displayRecipes(data.results);
        })
        .catch(error => {
            console.error(error);
            recipeList.innerHTML = '<p>Failed to fetch recipes. Please try again later.</p>';
        });
}

// Function to display recipes
function displayRecipes(recipes) {
    recipeList.innerHTML = ''; // Clear previous results

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');
        recipeCard.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
        `;
        recipeList.appendChild(recipeCard);
    });
}

// Event listener for search button
searchButton.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query.length > 0) {
        fetchRecipes(query);
    } else {
        recipeList.innerHTML = '<p>Please enter a search query.</p>';
    }
});

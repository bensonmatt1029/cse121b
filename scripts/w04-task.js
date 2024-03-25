/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Matt Benson",
    photo: "images/profile_pic.png",
    favoriteFoods: ["Pizza", "Ice Cream", "Chocolate", "Pasta"],
    hobbies: ["Video Games", "Hiking", "Movies"],
    placesLived: []
};

const places = [
    {
        place: "Virginia",
        length: "6 years"
    },
    {
        place: "Mississippi",
        length: "4 years"
    },
    {
        place: "California",
        length: "6 years"
    },
    {   
        place: "Spain",
        length: "2 years"
    }
];

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(...places);

/* Name */
const nameElement = document.getElementById('name');
nameElement.textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.getElementById('photo');

/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
});

/* Hobbies List */
const hobbiesList = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobby => {
    const listItem = document.createElement('li');
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
const placesLivedList = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    const dlElement = document.createElement('dl');

    const dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    const ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);

    placesLivedList.appendChild(dlElement);
});

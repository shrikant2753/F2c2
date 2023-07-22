
const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

// Function to display recipe cards
function displayRecipes(recipesArray) {
    const mainContainer = document.getElementById('recipeContainer');
    mainContainer.className = "card-container"

    // Clear existing cards (if any)
    mainContainer.innerHTML = '';

    recipesArray.forEach((recipe) => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        
        card.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <p class="type"> ${recipe.type}</p>
            
            
            <div class="upper">
                <h2 class="title"> ${recipe.name}</h2>
                <div class="star-rating">
                    <img src="./images/Star.png" alt="star" style="width: 16px;
                    height: 16px;">
                    <p class="rating"> ${recipe.rating}</p>
                </div>
            </div>
            <div class="lower">
                <h3 class="duration"> ${recipe.time}</h3>
                <div class="like-comment">
                    <button class="like-btn ${recipe.isLiked ? 'liked' : ''}" data-recipe="${recipe.name}">
                        <div class="heart-icon"></div>
                    </button>
                    <img src="./images/comments.png" alt="comment" style="width: 22px; height: 22px;">
                </div>
            </div>
            

        `;
        mainContainer.appendChild(card);
    });
}

// Initial display of all recipes
displayRecipes(recipes);

// Function to handle the "like" feature
function handleLikeButton(recipeName) {
    const recipe = recipes.find((r) => r.name === recipeName);
    if (recipe) {
        recipe.isLiked = !recipe.isLiked;
        const likeBtn = document.querySelector(`.like-btn[data-recipe="${recipe.name}"]`);
        likeBtn.classList.toggle('liked', recipe.isLiked);
    }
}

// Function to implement search functionality
function searchRecipes(query) {
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    displayRecipes(filteredRecipes);
}

// Function to implement toggle recipe type functionality
function toggleRecipeType(type) {
    let filteredRecipes;
    if (type === 'all') {
        filteredRecipes = recipes;
    } else {
        filteredRecipes = recipes.filter((recipe) => recipe.type === type);
    }
    displayRecipes(filteredRecipes);
}

// Function to display all recipes
function showAllRecipes() {
    displayRecipes(recipes);
}

// Function to display only veg recipes
function showVegRecipes() {
    const filteredRecipes = recipes.filter((recipe) => recipe.type === 'veg');
    displayRecipes(filteredRecipes);
}

// Function to display only non-veg recipes
function showNonVegRecipes() {
    const filteredRecipes = recipes.filter((recipe) => recipe.type === 'non-veg');
    displayRecipes(filteredRecipes);
}

// Function to implement filter by rating functionality
function filterByRating(minRating, maxRating) {
    const filteredRecipes = recipes.filter(
        (recipe) => recipe.rating >= minRating && recipe.rating <= maxRating
    );
    displayRecipes(filteredRecipes);
}

// Event Listeners
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (event) => {
    const query = event.target.value;
    searchRecipes(query);
});

// // Event Listeners for the buttons
// const showAllBtn = document.getElementById('showAllBtn');
// const showVegBtn = document.getElementById('showVegBtn');
// const showNonVegBtn = document.getElementById('showNonVegBtn');

// showAllBtn.addEventListener('click', showAllRecipes);
// showVegBtn.addEventListener('click', showVegRecipes);
// showNonVegBtn.addEventListener('click', showNonVegRecipes);

const ratingFilter = document.getElementsByName('rating');
ratingFilter.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.value === 'above4.5') {
            filterByRating(4.5, 5.0);
        } else if (radio.value === 'below4.0') {
            filterByRating(0.0, 4.0);
        }
    });
});

const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const recipeName = btn.getAttribute('data-recipe');
        handleLikeButton(recipeName);
    });
});

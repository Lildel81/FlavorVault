import fetch from "node-fetch";

const apiKey = 'f2a6fcb7e8634c4aa40dd201b6f33958';
const searchQuery = 'pasta';

fetch ('https://api.spoonacular.com/recipes/search?apiKey="${apiKey}&query=${searchQuery}"')
.then((response) => response.json())
.then((data) => {
    // Handle the data (e.g., display the resipes in json format)
    console.log(data.results);
})
.catch((error) => {
    console.error('Error fetching the data:', error);
});

'use strict';

const API_KEY = "331ed312029343caafcc8358da63f59b"

// a function that gets the info from the API
async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json()
    
    return data.recipes
}

// a function that fetches new data from the API on page load
async function int(){
    const recipes = await getRecipes()
    console.log(recipes);
}
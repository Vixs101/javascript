'use strict';

const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //open 24hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address }) {
        console.log(
            `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
    },
};

// using the spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...resturant.mainMenu, 'Yam'];
console.log(newMenu);

// copy array 
const mainMenuCopy = [...resturant.mainMenu];
console.log(mainMenuCopy);

// merging two arrays 
const menu = [...resturant.starterMenu, ...resturant.mainMenu];
console.log(menu);

// trying the spread operator on strings
const str = 'Elijah'
// an arr that contains all the individual letters and expand the string
const letters = [...str, ' ', 'S.'];
console.log(letters);


// real world example
// const ingredients = [
//     prompt("Let's make pasta!ingredient 1?"),
//     prompt('ingredient 2?'),
//     prompt('ingredient 3'),
// ];
// console.log(ingredients);

// since es2018 the spread operator works on objects even tho it's not an iterable
const newResturant = {
    foundedin: 1999,
    ...resturant,
    founder: 'James'
};
console.log(newResturant);


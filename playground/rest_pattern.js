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
    // rest parameters in a function
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// 1) DESTRUCTURING
// spread, because on the right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on the left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [...resturant.mainMenu, ...resturant.starterMenu];

console.log(pizza, risotto, otherfood)

// For objects
const { sat, ...weekdays } = resturant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    console.log(numbers)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(2, 3, 4, 4,);
add(2, 3, 9, 7, 5, 5, 9);

const x = [23, 5, 7];
add(...x);

// using the order pizza function
resturant.orderPizza('mushrooms', 'Onion', 'Olives', 'Spinach');
resturant.orderPizza('mushrooms')
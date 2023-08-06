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

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

// calling the function and passing in an object as args
resturant.orderDelivery({
    time: '22:30',
    address: 'Via del sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

resturant.orderDelivery({
    address: 'Via del sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

const {
    name: resturantName,
    openingHours: hours,
    categories: tags,
} = resturant;

console.log(resturantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = resturant;

console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const { fri: { open, close }, } = openingHours;
console.log(open, close);

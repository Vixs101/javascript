//looping through an array called fruits and displaying it's content as an unordered list
const fruits = ["Banana", "Orange", "Mango", "Pawpaw"];
let fLen = fruits.length;

let text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
/**
 * Looping using the Array.foreach() function This function is a built- in JS method that allows
 * You to iterate over each element in an array and perform  a specific action or operation on
 * each element.
 * myFunction: a function that appends an HTML list item (<li>)  * containing a specific value to
 * an existing string variable  called 'text'.
 * @value: the value we want to include in the list item
 */ 
const myFruits = ["grapes", "Orange", "Mango", "Pawpaw"];

let txt = "<ul>";
myFruits.forEach(myFunction);
txt += "</ul>";

document.getElementById("demo1").innerHTML = txt;

function myFunction(value) {
    txt += "<li>" + value + "</li>";
}

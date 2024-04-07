// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [tesla , honda] = cars;
const {speedStats : {topSpeed : hondaTopSpeed}} = honda;
const {speedStats : {topSpeed : teslaTopSpeed}} = tesla;
const { coloursByPopularity: [, secondColour] } = honda;
const {coloursByPopularity : [teslaTopColour] } = tesla;

// Destructuring Notes:
// const { coloursByPopularity: [teslaTopColour] } = tesla;
// const { coloursByPopularity: [, secondColour] } = honda;
// const { coloursByPopularity: [, , thirdColour] } = honda;
// const { coloursByPopularity } = honda;
// const lastColour = coloursByPopularity[coloursByPopularity.length - 1];
// In object destructuring, you use curly braces {} around the variables that you want to extract.
//  You also use the colon : to alias the variable name if needed.

// Example:

// const person = { name: 'John', age: 30 };
// const { name, age: personAge } = person;

// In array destructuring, you use square brackets [] around the variables that you want to extract from the array.

// example:
// const fruits = ['apple', 'banana', 'orange'];
// const [firstFruit, secondFruit] = fruits;






ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{secondColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

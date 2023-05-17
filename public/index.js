"use strict";
let character = 'Dubem';
let age = 25;
let isBlackbelt = true;
// character =78 
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
let nums = [10, 20, 30, 40];
// nums.push("dubem")
let mixed = ['ken', 3, 'pen'];
// mixed.push(true)
let ninja = {
    name: 'Dubem',
    age: 25,
    strength: 'strong'
};
// ninja.name = 30
// ninja = {
//     name: 'Obi',
//     age: 26,
//     // skill: ['pro']
// }
/*
// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3);
// names[1] = 3;

let numbers = [10, 20, 12, 15];

numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
  // skills: ['running'],
};
*/
// let character: string = 'mario';
// let age: number;
// let isLoggedIn: boolean;
// // age = 'luigi';
// age = 30;
// // isLoggedIn = 25;
// isLoggedIn = true;
// // arrays
// let ninjas: string[] = [];
// ninjas.push('ryu');
// ninjas.push('chun-li');
// console.log(ninjas);
// // union types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(false);
// mixed.push(20);
// console.log(mixed);
// let uid: string|number;
// // objects
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 30 };
// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColour: string
// };
// ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
// let greet: Function
// greet = ()=>{
//   console.log("Hello again")
// }
// const add = (a: number , b: number, c: number | string = 10)=>{
//   console.log(a+b)
//   console.log(c)
// }
// add( 5, 10)
// const minus =(a: number, b: number)=>{
//   return a + b //automatically infers the type of thec function
// }
// let result = minus(10, 7)
//TYPE ALIASES
// Type aliases helps to reduce code duplication
// type StringOrNum = string | number
// type objWithName = {name: string, uid: StringOrNum  }
// const logDetails = (uid: StringOrNum, item: string)=>{
//   console.log(`${item} has a uid of ${uid}`)
// }
// const greet =(user: objWithName) =>{
//   console.log(`${user.name} says hello`)
// }
// const greetAgain =(user: objWithName) =>{
//   console.log(`${user.name} says hello`)
// }
//FUNCTION SIGNATURES
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};

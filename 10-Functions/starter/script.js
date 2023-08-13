'use strict';
//!Defaults Parameters
// const stats = function (height, weight = 60, CPI = weight / height) {
//   console.log(height, weight, CPI);
// };

// stats(100);
// stats(160, 80);
///////////////////////////////////////////
//!How Passing Arguments Works: Value VS Reference
// const newPassport = function (person) {
//   person.passport = 960296;
// };

// const Marat = {
//   name: 'Marat',
//   passport: 111777,
// };

// console.log(Marat.passport);
// newPassport(Marat); //?При передачи объекта в качестве аргумента, не создается его копия, а все опреации происходят на исходном лбъекте
// console.log(Marat.passport);
///////////////////////////////////////////
//!Functions Accepting Callback Functions
// const upperAll = function (str) {
//   return str.toUpperCase();
// };
// const transformer = function (str, fn) {
//   console.log(str);
//   console.log(fn(str));
//   console.log(fn.name);
// };

// transformer('erica kakashka', upperAll);
///////////////////////////////////////////
//!Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(greeting, name);
//   };
// };
// const greetingHey = greet('Hey');
// greetingHey('Erica');

// greet('Hi')('Alisa 🚩');

// const greetAll = greeting => name => console.log(name); //Не делать так
///////////////////////////////////////////
//!The call and apply Methods
// const airplane = {
//   name: 'A302',
//   fly(airpline) {
//     console.log(airpline, this.name);
//   },
// };

// const airplane2 = {
//   name: 'B405',
// };

// const fly = airplane.fly;
// // fly('Pobeda'); //!ERROR

// fly.call(airplane2, 'Pobeda');
// fly.apply(airplane2, ['Utair']); //Но лучше использовать .call
///////////////////////////////////////////
//!The bind Method
// const test = function (num1) {
//   return function (num2) {
//     console.log(num1, num2);
//   };
// };

// const test2 = test(10);
// test2(100);

// const airplane = {
//   name: 'A302',
//   fly(airpline) {
//     console.log(airpline, this.name);
//   },
// };
// const newAirplane = airplane.fly.bind(airplane);
// newAirplane('Mahachkala');

// const newestAirplane = airplane.fly.bind(airplane, 'Moscow');
// newestAirplane();
// newestAirplane('Sdsadas'); //?Ничего не меняется если вставлять аргументы

// //With Event Listener
// document
//   .querySelector('.buy')
//   .addEventListener('click', airplane.fly.bind(airplane, 'Kazan'));

// //Particial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.6, 100));

// const addNDS = addTax.bind(null, 0.2);
// console.log(addNDS(100));
///////////////////////////////////////////
//! Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',

//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

//   answerNumber: [0, 0, 0, 0],

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question} \n${this.options.join(',\n')}\n(Write option number)`
//       )
//     );
//     if (answer > 3 || Number.isNaN(answer)) {
//       alert('Wrong input ❌');
//       this.registerNewAnswer();
//     } else {
//       this.answerNumber[answer] += 1;
//       this.displayResult('string');
//       this.displayResult();
//     }
//   },

//   displayResult(type = 'array') {
//     if (type === 'string') {
//       console.log(`Poll results are ${this.answerNumber.join(', ')}`);
//     } else {
//       console.log(this.answerNumber);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

///////////////////////////////////////////
//!Immediately Invoked Function Expressions (IIFE)
// (function () {
//   console.log("I'm work!");
// })(); //?Используется если ф-ию надо запустить всего один раз

// (() => console.log(`I'm word TOO!!!`))(); //То же самое
///////////////////////////////////////////
//!Closures
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () { //? ТУТ!!!
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const booker = secureBooking(); //?Scope новой ф-ии это место, где она создалась 👆

// booker();
// booker();
// console.dir(booker);
///////////////////////////////////////////
//!More Closures Examples
//Example 1
// let f;
// const d = function () {
//   const a = 20;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 333;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// d();
// f();
// //Re-assign
// h();
// f();

// //Example 2
// const timer = function (n, wait) {
//   setTimeout(function () {
//     //Closure!!!
//     console.log(n);
//   }, wait * 1000);
// };

// timer(228, 5);
///////////////////////////////////////////
//!Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
///////////////////////////////////////////

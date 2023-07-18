'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (start, main) {
    return [this.starterMenu[start], this.mainMenu[main]];
  },
  orderDelivery: function ({
    startIndex = 0,
    mainIndex = 1,
    time = '18:00',
    address,
  }) {
    return `${this.starterMenu[startIndex]} , ${this.mainMenu[mainIndex]} , ${time} , ${address}`;
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
  orderPizza: function (mainIngridient, ...otherIngridient) {
    console.log(mainIngridient);
    console.log(otherIngridient);
  },
};
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
const text = document.querySelector('.text');

const removeUpperInStart = function (word) {
  if (
    [...word][0] !== undefined &&
    [...word][0] === [...word][0].toUpperCase()
  ) {
    word = word.replace([...word][0], [...word][0].toLowerCase());
    return word;
  } else {
    return word;
  }
};

const removeUnderscoreAndMakeUpper = function (word) {
  let indexUnderscore = [...word].indexOf('_');
  if (indexUnderscore === -1) return word;

  word = word.toLowerCase();

  let subWord = word.slice(indexUnderscore + 1, word.length);
  subWord = subWord.replace([...subWord][0], [...subWord][0].toUpperCase());
  word = word.slice(0, indexUnderscore);

  return word + subWord;
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    let words = text.value.split('\n');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].trim();
      words[i] = removeUpperInStart(words[i]);
      words[i] = removeUnderscoreAndMakeUpper(words[i]);
      console.log(words[i]);
    }
    for (let j = 0; j < words.length; j++) {
      j === 0 ? (text.value = words[j]) : (text.value += '\n' + words[j]);
    }
    text.value = text.value.trim();
  }
});
///////////////////////////////////////////
//!Destructuring arrays
// const arr = [2, 5, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// //Destructuring values from object
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Exchange values
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainMenu] = restaurant.order(0, 2);
// console.log(starter, mainMenu);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [o, , j] = nested;
// const [r, , [h, g]] = nested;
// console.log(o, j);
// console.log(r, h, g);

// //Default values
// const [p = 1, f = 2, b = 3] = [0, 6];
// console.log(p, f, b);
///////////////////////////////////////////
//!Destucturing Objects
// const { name, starterMenu, mainMenu } = restaurant;
// console.log(name, starterMenu, mainMenu);

// //Rename values
// const { name: restaurantName } = restaurant;
// console.log(restaurantName);

// //Default values
// const {
//   menu = [],
//   temp = 'Erica the best❤',
//   starterMenu: starters = [],
// } = restaurant;
// console.log(menu, temp, starters);

// //Mutating variables
// let a = 777;
// let b = 333;
// const obj = { a: 2, b: 4, c: 5 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   sat: { open: o = '9:00', close: c = '23:00' },
// } = restaurant.openingHours;
// console.log(o, c);

// //Object like an argument
// console.log(
//   restaurant.orderDelivery({
//     startIndex: 1,
//     mainIndex: 2,
//     address: 'Sovetskaya',
//   })
// );
///////////////////////////////////////////
//!The Spread Operator (...)
// const arr = [7, 8, 9];
// const newArr = [...arr, 2, 4]; // [arr[0], arr[1], arr[2], 2, 4]
// console.log(newArr);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //... in Strings
// const name = 'Marat';
// const fullName = [...name, ' ', 'the', ' ', 'best'];
// console.log(fullName);

// //... in arguments
// const ings = ['tomato', 'macaroni', 'cheese'];
// restaurant.orderPasta(...ings);
// restaurant.orderPasta(ings); //!Wrong

// //... in Objects
// const newRestaurant = { foundedIn: 1989, ...restaurant };
// console.log(newRestaurant);
// newRestaurant.categories.push('Noga');
// console.log(newRestaurant);
// console.log(restaurant);
///////////////////////////////////////////
//!Rest Pattern and Parameters
// //1) With Destructive

// //SPREAD это когда выражение стоит после =
// const arr = [1, 2, ...[2, 3]];
// console.log(arr);
// //REST это когда выражение стоит до =
// const [a, b, ...other] = arr;
// console.log(a, b, other);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) With functions
// const add = function (...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) sum += args[i];
//   console.log(sum);
// };

// add(2, 3);
// add(1, 2, 3, 4, 5);

// const x = [1, 2, 3];
// add(...x);

// restaurant.orderPizza('mushroms', 'onion', 'ham', 'cheese');
// restaurant.orderPizza('mushroms');
///////////////////////////////////////////
//!Short Circuting (&& and ||)
// console.log('----OR----');
// console.log(3 || 'Marat');
// console.log('' || 'Marat');
// console.log(undefined || null);

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Оператор && (AND)
// console.log('----AND----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 'Jonas' && 23 && null && 7);

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
///////////////////////////////////////////
//!The Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
///////////////////////////////////////////
//!Logical Assigment Operators
// restaurant.numGuests ||= 10; //если значение falsy, то присвоится 10
// console.log(restaurant.numGuests);
// restaurant.numGuests &&= 20; //если значение не falsy, то присвоится 20, иначе ничего
// console.log(restaurant.numGuests);
// restaurant.numGuests ??= 30; //если значение 0, "" или какое то значение, то не меняет
// console.log(restaurant.numGuests);
///////////////////////////////////////////

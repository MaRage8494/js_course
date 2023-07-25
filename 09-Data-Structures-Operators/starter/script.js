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
///////////////////////////////////////////
//!Sets
// const realSet = new Set([
//   'Pizza',
//   'Rissoto',
//   'Pizza',
//   'Sushi',
//   'Shaurma',
//   'Rissoto',
// ]);
// console.log(realSet);

// console.log(realSet.size);

// console.log(realSet.has('Pizza'));
// console.log(realSet.has('Erica Loh'));

// realSet.add('Erica Loh');
// realSet.add('Erica Loh');
// console.log(realSet);

// realSet.delete('Pizza');
// console.log(realSet);

// // realSet.clear();
// // console.log(realSet);

// for (const food of realSet) console.log(food);

// const arraySet = [...realSet];
// console.log(arraySet);
///////////////////////////////////////////
//!Map: Fundamentals
// const realMap = new Map();

// realMap.set('Erica', 'Loh');
// console.log(realMap.set('Erica', 'Lapochka').set('Diashka', 'Cheburashka'));

// console.log(realMap.get('Erica'));

// realMap.delete('Diashka');
// console.log(realMap);

// console.log(realMap.has('Erica'));

// console.log(realMap.size);

// realMap.clear();
// console.log(realMap);
///////////////////////////////////////////
//!Maps: Iteration
// const question = new Map([
//   ['question', 'Who is better?'],
//   [1, 'Erica'],
//   [2, 'Alisa'],
//   [3, 'Katya'],
//   ['answer', 1],
//   [true, 'Ну конечно же, а как иначе???❤❤❤'],
//   [false, 'Ты еблан? Ебанный тюбик, обнови страницу и не позорься'],
// ]);

// const answer = prompt(`${question.get('question')}
// 1 - ${question.get(1)}
// 2 - ${question.get(2)}
// 3 - ${question.get(3)}`);

// alert(question.get(Number(answer) === question.get('answer')));

// //Convert Object to Map
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) console.log(key, value);

// //Convert Map to Array
// console.log(...question);
// console.log(...question.keys());
// console.log(...question.values());
//!Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //* 1 пункт
// const events = new Set(gameEvents.values());
// console.log(events);

// //* 2 пункт
// gameEvents.delete(64);
// console.log(gameEvents);

// //* 3 пункт
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// //* 4 пункт
// for (const [minute, event] of gameEvents.entries()) {
//   console.log(
//     minute > 45
//       ? `[SECOND HALF] ${minute}: ${event}`
//       : `[FIRST HALF] ${minute}: ${event}`
//   );
// }
///////////////////////////////////////////
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
//!Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //* 1 пункт
// let [players1, players2] = [...game.players]; //можно просто game.players
// console.log(players1, players2);
// //* 2 пункт
// let [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// //* 3 пункт
// let allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //* 4 пункт
// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// //* 5 пункт
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// //* 6 пунки
// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     if (game.scored.includes(players[i])) {
//       let goals = 0;
//       for (let j = 0; j < game.scored.length; j++) {
//         if (game.scored[j] === players[i]) goals++;
//       }
//       console.log(`${players[i]} score ${goals} goals`);
//     } else console.log(players[i]);
//   }
// };
// printGoals(...allPlayers);
// //* 7 пункт
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
///////////////////////////////////////////
//!Coding Challenge #4

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
// const text = document.querySelector('.text');

// const removeUpperInStart = function (word) {
//   if (
//     [...word][0] !== undefined &&
//     [...word][0] === [...word][0].toUpperCase()
//   ) {
//     word = word.replace([...word][0], [...word][0].toLowerCase());
//     return word;
//   } else {
//     return word;
//   }
// };

// const removeUnderscoreAndMakeUpper = function (word) {
//   let indexUnderscore = [...word].indexOf('_');
//   if (indexUnderscore === -1) return word;

//   word = word.toLowerCase();

//   let subWord = word.slice(indexUnderscore + 1, word.length);
//   subWord = subWord.replace([...subWord][0], [...subWord][0].toUpperCase());
//   word = word.slice(0, indexUnderscore);

//   return word + subWord;
// };

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Enter') {
//     let words = text.value.split('\n');
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].trim();
//       words[i] = removeUpperInStart(words[i]);
//       words[i] = removeUnderscoreAndMakeUpper(words[i]);
//       console.log(words[i]);
//     }
//     for (let j = 0; j < words.length; j++) {
//       j === 0 ? (text.value = words[j]) : (text.value += '\n' + words[j]);
//     }
//     text.value = text.value.trim();
//   }
// });
///////////////////////////////////////////
//!Looping Arrays: The For-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (let item of menu) {
//   console.log(item);
// }

// //Better Way
// for (let [i, el] of menu.entries()) { //Метод entries разделяет каждый элемент массива на два элемента: индекс и значение. С помощью деконструкции массива, первый элемент массива (индекс) присваивается переменной i, а второй (значение) переменной el
//   console.log(`${i + 1}: ${el}`);
// }
///////////////////////////////////////////
//!Enhanced Object Literals
// const weekdays = ['mon', 'tue', 'wed'];
// const openingHours = {
//   [weekdays[0]]: {
//     //!Теперь можно присваивать имя с помощью  других переменных или с помощью выражений
//     open: 12,
//     close: 22,
//   },
//   [weekdays[1]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${1 + 3}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant2 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (start, main) {
//     return [this.starterMenu[start], this.mainMenu[main]];
//   },

//   openingHours, //! Чтобы вставить объект в объект достаточно просто написать его имя

//   // orderDelivery: function ({
//   //   startIndex = 0,
//   //   mainIndex = 1,
//   //   time = '18:00',
//   //   address,
//   // }) {
//   //   return `${this.starterMenu[startIndex]} , ${this.mainMenu[mainIndex]} , ${time} , ${address}`;
//   // },
//   // orderPasta: function (ing1, ing2, ing3) {
//   //   console.log(ing1, ing2, ing3);
//   // },
//   // orderPizza: function (mainIngridient, ...otherIngridient) {
//   //   console.log(mainIngridient);
//   //   console.log(otherIngridient);
//   // },
//   //! Теперь функции в объекте можно записывать без слова function
//   orderDelivery({ startIndex = 0, mainIndex = 1, time = '18:00', address }) {
//     return `${this.starterMenu[startIndex]} , ${this.mainMenu[mainIndex]} , ${time} , ${address}`;
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(ing1, ing2, ing3);
//   },
//   orderPizza(mainIngridient, ...otherIngridient) {
//     console.log(mainIngridient);
//     console.log(otherIngridient);
//   },
// };
///////////////////////////////////////////
//!Optional Chaining (.?)
// console.log(restaurant.openingHours.thu?.open);
// console.log(restaurant.openingHours.mon?.open); //doesnt exist

// //Multi
// console.log(restaurant.openingHours?.mon?.open);

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
// console.log(restaurant.orderShaurma?.(0, 1) ?? 'Method doesnt exist');

// //Arrays
// const arr = [{ name: 'Erica', age: 19 }];
// console.log(arr[0]?.name ?? 'Value doesnt exist');
// console.log(arr[0]?.sex ?? 'Value doesnt exist');
///////////////////////////////////////////
//!Looping Objects: Objects Keys, Values and Entries
// //Object Keys
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// //Object Values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// //Entires object
// const entries = Object.entries(restaurant.openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(key, open, close);
// }
///////////////////////////////////////////
//!Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //* 1 пункт
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// //* 2 пункт
// let sum = 0;
// let count = 0;
// console.log(Object.entries(game.odds));
// for (const [key, value] of Object.entries(game.odds)) {
//   sum += value;
//   count += 1;
// }
// const average = sum / count;
// console.log(average);

// //* 3 пункт
// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(
//     key === 'x'
//       ? `Odd of draw: ${value}`
//       : `Odd of victory ${game[key]}: ${value}`
//   );
// }

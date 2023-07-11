// let js = "fun";
// if (js === "fun") alert("Right");

// 40 + 8 + 23 - 10
// console.log(40 + 8 + 23 - 10)



const country = "Russia";
const continent = "Eurasia";
let population = 143000000;
// console.log(country, continent, population)



// const isIsIsland = false;
const language = 'Russian';
// console.log(typeof isIsIsland, typeof language)




// population = 130000000
// console.log(population)




// let half = population / 2;
// population++;
// let populationFinland = 6000000;
// console.log(half, population, populationFinland < population);
// console.log(33000000 > population);
// let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
// console.log(description)




//Coding challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀

// let massMark = 78;
// let massJohn = 92;

// let heightMark = 1.69;
// let heightJohn = 1.95;

// let bmiMark = massMark / heightMark ** 2;
// let bmiJohn = massJohn / heightJohn ** 2;

// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// massMark = 95;
// massJohn = 85;

// heightMark = 1.88;
// heightJohn = 1.76;

// bmiMark = massMark / heightMark ** 2;
// bmiJohn = massJohn / heightJohn ** 2;

// markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);




let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description)



// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// let massMark = 78;
// let massJohn = 92;

// let heightMark = 1.69;
// let heightJohn = 1.95;

// let bmiMark = massMark / heightMark ** 2;
// let bmiJohn = massJohn / heightJohn ** 2;

// let markHigherBMI = bmiMark > bmiJohn;
// if (markHigherBMI) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
// }

// massMark = 95;
// massJohn = 85;

// heightMark = 1.88;
// heightJohn = 1.76;

// bmiMark = massMark / heightMark ** 2;
// bmiJohn = massJohn / heightJohn ** 2;

// markHigherBMI = bmiMark > bmiJohn;
// if (markHigherBMI) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
// }

// const money = -100
// if (money) {
//     console.log("123")
// }

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// if (dolphins === koalas) {
//     console.log(`Draw`)
// } else if (dolphins > koalas) {
//     console.log(`Team Dolphins WIN (${dolphins}, ${koalas})`)
// } else {
//     console.log(`Team Koalas WIN`)
// }

// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 106) / 3;

// if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
//     console.log(`Draw (${dolphins}, ${koalas})`)
// } else if (dolphins > koalas && dolphins >= 100) {
//     console.log(`Team Dolphins WIN (${dolphins}, ${koalas})`)
// } else if (dolphins < koalas && koalas >= 100) {
//     console.log(`Team Koalas WIN (${dolphins}, ${koalas})`)
// } else {
//     console.log(`Nobody WIN (${dolphins}, ${koalas}`)
// }




// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const billValue = 430;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${tip + billValue}`);
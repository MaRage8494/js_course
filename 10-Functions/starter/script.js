'use strict';
//!Defaults Parameters
const stats = function (height, weight = 60, CPI = weight / height) {
  console.log(height, weight, CPI);
};

stats(100);
stats(160, 80);

//!How Passing Arguments Works: Value VS Reference
const newPassport = function (person) {
  person.passport = 960296;
};

const Marat = {
  name: 'Marat',
  passport: 111777,
};

console.log(Marat.passport);
newPassport(Marat); //?При передачи объекта в качестве аргумента, не создается его копия, а все опреации происходят на исходном лбъекте
console.log(Marat.passport);

//!Functions Accepting Callback Functions
const upperAll = function (str) {
  return str.toUpperCase();
};
const transformer = function (str, fn) {
  console.log(str);
  console.log(fn(str));
  console.log(fn.name);
};

transformer('erica kakashka', upperAll);

//!Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(greeting, name);
  };
};
const greetingHey = greet('Hey');
greetingHey('Erica');

greet('Hi')('Alisa 🚩');

const greetAll = greeting => name => console.log(name); //Не делать так

//!The call and apply Methods
const airplane = {
  name: 'A302',
  fly(airpline) {
    console.log(airpline, this.name);
  },
};

const airplane2 = {
  name: 'B405',
};

const fly = airplane.fly;
// fly('Pobeda'); //!ERROR

fly.call(airplane2, 'Pobeda');
fly.apply(airplane2, ['Utair']); //Но лучше использовать .call

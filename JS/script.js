"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    name: 'John',
    age: 25,
    isMarried: true
};

console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 5, 'apple.bmp', {}, []];
console.log(arr[4]);

// alert ('Suck!');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Are 18 years old?', 'Yes');
// console.log(answer + 5);

const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));

const category = 'toys';
console.log(`https://raul.com/${category}/5`);

const user = 'Ivan';
alert(`Привет, ${user}`);

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(2*4 === 8);

console.log(2 + 2 * 2 != 8);

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);
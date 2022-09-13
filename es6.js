1; // spread operator

const numbers = [5, 6, 7, 8];

const newNumbers = [1, 2, 3, ...numbers];

console.log(newNumbers);

2; // dynamic values in back quote

const ages = [89, 65, 98, 12];

const names = {
  name: "manas",

  age: 32,

  movies: ["king khan ", "dhakar mastan"],
};

const about = ` my name is ${names.movies[0]} ami hoilam ${names.movies[1]} amar dadar age ${ages[0]}`;

console.log(about);

// 3. create a new array from an older array and add an element

const oldArray = [10, 20, 30, 40];

const newArray = [...oldArray];

newArray.push(50);

console.log("spread array operation", newArray);

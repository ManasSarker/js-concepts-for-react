//1. array destructuring

const numbers = [14, 15, 20, 25, 62, 35, 56];

const [firstNum, secondNum] = numbers;

console.log(firstNum, secondNum);

// It could be an object

const student = {
  name: "sazzad",
  age: 32,
  movies: ["no one person", "ami ekta dui number"],
};

const [firstMovie, secondMovie] = student.movies;

console.log(firstMovie, secondMovie);

/*  Object destructuring */

const employee = {
  ide: "vs code",

  designation: "full stack developer",

  machine: "window",

  languages: ["html", "css", "java", "react"],

  specification: {
    height: 56,
    weight: 70,
    address: "Bashundhora",
  },
};

const { ide, machine } = employee;

console.log(ide);

const { weight, address } = employee.specification;

console.log(address);

const [firstLanguage, secondLanguage] = employee.languages;

console.log(secondLanguage);

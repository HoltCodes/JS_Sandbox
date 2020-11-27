// // // Log to Console

// // /*
// // multi
// // line
// // comments
// // */

// // console.log ('Hello World');
// // console.log(123);
// // console.log(true);
// // var greeting = 'Hello';
// // console.log(greeting);
// // console.log([1,2,3,4]);
// // console.log({a:1, b:2});
// // console.table({a:1, b:2});

// // console.error('This is some error');
// // console.clear();
// // console.warn('This is a warning');
// // console.time('Hello');
// //     console.timeEnd('Hello World');
// //     console.timeEnd('Hello World');
// //     console.timeEnd('Hello World');
// //     console.timeEnd('Hello World');
// //     console.timeEnd('Hello World');
// //     console.timeEnd('Hello World');
// //  console.timeEnd('Hello');
    
// // //  var, let, const

// // var name = 'John Doe';
// // console.log(name);
// // name = 'Steve Smith';
// // console.log(name);

// // // Init var
// // var greeting;
// // console.log(greeting);
// // greeting = 'Hello';
// // console.log(greeting);

// // // letters, numbers, _, $
// // // Can not start with number
// // var $name = 'John'
// // var _name = 'John'

// // // Multi word vars
// // var firstName = 'John'; // Camel case
// // var first_name = 'Sara'; // Underscore
// // var Firstname = 'Tom'; // Pascal case
// // var firstname;


// //  Let
// // let name;
// //  name = 'John Doe';
// // console.log(name);
// // name = 'Steve Smith';
// // console.log(name);

// // CONST
// // const name = 'John';
// // console.log(name);
// // // Can not reassing
// // name = 'Sara';
// // Have to assign a value
// // const greeting;

// const person = {
//     name: 'John',
//     age: 30
// }

// person.name = 'Sara';
// person.age = 32;

// console.log(person);

// // console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);

// console.log(numbers);

// PRIMITIVE

// // String
// const name = 'John Doe';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// // Reference Types - Objects
// // Array
// const hobbies =['movies', 'music'];
// // Oject literal
// const address = {
//     city: 'Tampa',
//     state: 'FL'
// }

// const today = new Date();

// console.log(today);
// console.log(typeof today);


// let val;

// // Number to string
// val = String(555);
// val = String(4+4);
// // Bool to string
// val = String(true)
// // Date to string
// val = String(new Date())
// // Array to a string
// val = String([1,2,3,4,5,6]);

// // tostring()
// val = (5).toString();
// val = (true).toString();

// // String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parseInt('100.30');
// val = parseFloat('100.31');

// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

const num1 = 100;
const num2 = 60;

let val;
// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4)
val = Math.floor(2.8)
val = Math.sqrt(64)
val = Math.abs(-3)
val = Math.pow(8, 2)
val = Math.min(2,33,4,1,55,6,3)
val = Math.max(2,55,6,122,-4,8)
val = Math.random()
val = Math.floor(Math.random() * 20 + 1);

console.log(val);



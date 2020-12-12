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

// const num1 = 100;
// const num2 = 60;

// let val;
// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4)
// val = Math.floor(2.8)
// val = Math.sqrt(64)
// val = Math.abs(-3)
// val = Math.pow(8, 2)
// val = Math.min(2,33,4,1,55,6,3)
// val = Math.max(2,55,6,122,-4,8)
// val = Math.random()
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);


// const firstname = 'Rogan';
// const lastname = 'Holt';
// const age = '28';
// const str = 'Hello my name is Rogan';
// const tags = 'web design, web developer, programming';

// let val;

// val = firstname + lastname;

// // Concatenation
// val = firstname + ' ' + lastname;

// // Append
// val = 'Rogan ';
// val += 'Holt';

// val = 'Hello, my name ' + firstname + ' and I am ' + age;

// // Escaping \ before '
// val = 'That\'s awesome, I can\'t wait';

// // Length
// val = firstname.length;

// // concat
// val = firstname.concat(' ', lastname);

// //change case
// val = firstname.toUpperCase();
// val = lastname.toLowerCase();

// val = firstname[2];

// //indexof()
// val = firstname.indexOf('g');
// val = firstname.lastIndexOf('h');

// // charAt()
// val = firstname.charAt('2');
// // Get last char
// val = firstname.charAt(firstname.length-1);

// // substring()
// val = firstname.substring(0, 4);

// // slice()
// val = firstname.slice(0,4);

// //split()
// val = str.split(' ');
// val = tags. split(',');

// // replace()
// val = str.replace('Rogan' , 'Jack');

// // includes()
// val = str.includes('Hello');


// console.log(val);

// const name = 'Rogan'
// const age = '28'
// const job = 'web dev'
// const city = 'Tampa'
// let html;

// // without template strings (es5 way)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: '+ job + '</li><li>City: '+ city +' </li></ul>';

// html = '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>'
//         '</ul>';

// function hello(){
//     return 'Hello';
// }
// // with template strings (es6)
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li> ${hello()}</li>
//     <li> ${age > 30 ? '0ver 30' : 'Under 30'}</li> 
 
//   </ul>
// `;

// document.body.innerHTML = html;

// Create some arrays
// const numbers = [43, 23, 34, 4, 1 ,64];
// const numbers2 = new Array(3, 434, 23, 235, 55);
// const fruit = ['Apple', 'Banna', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray('hello')
// // falase
// val = Array.isArray(numbers)
// // true

// // get single value
// val = numbers[3];
// val = numbers [0];
// // insert into array
// numbers[2] = 100;

// // find index of value
// val = numbers.indexOf(64);

// // mutating arrays
// // add on to end
// numbers.push(250);
// // add on to front
// numbers.unshift(250);

// // take off from the end
// numbers.pop();
// // take off from the front
// numbers.shift();

// // splice value
// numbers.splice(1,1);

// // reverse
// numbers.reverse();

// // concatenate arrya
// val = numbers.concat(numbers2);

// // sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // use the "compare function"
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// // reverse sort 
// val = numbers.sort(function(x, y){
//     return y - x;
// });


// find
// function over50(num){
//     return num > 50;
// }

// val = numbers.find(over50);



// console.log(numbers);
// console.log(val);


// const person =  {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 28,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Tampa',
//         state: 'Florida'
//     },
//     getBirthYear: function(){
//         return 2020 - this.age;
//     }
// }

// let val;

// val = person;
// // Get specific value 
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address;['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'Rogan', age: 28},
//     {name: 'Kaitlyn', age: 24},
//     {name: 'Ramp', age: 9}

// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

// let val;

// const today = new Date();
// let birthday = new Date('6/6/92'); 
// birthday = new Date('6-6-1992');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();

// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1995);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);

// if(something){
//     do something
// } else {
//     do something else
// }

//   const id = 100;

// // EQUAL TO
// if (id == 100){
//     console.log('CORRECT')
// }else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if (id != 101){
//     console.log('CORRECT')
// }else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if (id === 100){
//     console.log('CORRECT')
// }else {
//     console.log('INCORRECT');
// }
// // EQUAL TO VALUE AND TYPE
// if (id !== 100){
//     console.log('CORRECT')
// }else {
//     console.log('INCORRECT');
// }

// Test if undefined
// if (typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// }else {
//     console.log('NO ID');
// }

// Greater or less than
//  if (id <= 100){
//      console.log('CORRECT');
//  }else {
//      console.log('INCORRECT');
//  }

// IF ELSE
// const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
//  } else {
//      console.log('Color is not red or blue');
//  }


// // Logical operators 
// const name = 'Rogan';
// const age = 25;

// if (age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if (age >=13 && age <= 19){
//     console.log (`${name} is a teenager`);
// } else {
//     console.log (`${name} is an adult`);
// }

// // or ||
// if(age < 16 || age > 65) {
//     console.log(`${name} can't run in the race`);
// } else {
//     console.log(`${name} is registered for the race`);
// }

// // Ternary operator
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES (Dont recommened!)
// if (id ===100)
// console.log('CORRECT');
// else
// console.log(INCORRECT);


// const color = 'yellow';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//         case 'blue':
//             console.log('Color is blue');
//             break;
//             default:
//                 console.log('Color is not red or blue');
//                 break;
// }
// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);

// FUNCTION DECLARATIONS

// function greet(firstName = ' John', lastName = 'Doe'){
//     // if ( typeof firstName === 'undefined'){firstName = ' John'}
//     // if ( typeof lastName === 'undefined'){lastName = 'Doe'} 
//     // console.log('Hello');
//     return 'Hello' + firstName + ' ' +lastName;
// }

// // console.log(greet()); 

// const square = function(x = 3){
//     return x*x;
// };

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS -IFEs

// (function(){
//     console.log('IFEs Ran..');
// })();

// (function(name){
//     console.log('Hello' + name);
// })(' Rogan');

// Property Methods


// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }

// todo.delete = function(){

//     console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();


// FOR LOOP

// for (let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 in my favorite number');
//         continue;
//     }
    
//     if (i === 5){
//         console.log('Stop the loop');
//         break;
//     }

//     console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log('number ' + i );
//     i++;
// }

// DO WHILE

// let i = 100

// do {
//     console.log('number ' + i);
//     i++;
// }

// while(i < 10);


// LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// cars.forEach(function(car){
//     console.log(car);
// });

// MAP
// const user = [
//     {id: 1, name:'John'},
//     {id: 2, name:'Sara'},
//     {id: 3, name:'Karen'}
// ];

// const id = user.map(function(user){
//     return user.id;
// });

// console.log(id);




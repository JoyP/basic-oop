/* global prompt:true */

var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

var dog2 = {name: 'sam', age:4};

console.log(dog2);
console.log('Your dog 3 is',dog2);

console.log('\n\n');



// Exercise 1: Prompt user for name, age and breed. Create object and print out.

var name = prompt('Enter dog\'s name: ');
var age = prompt('How old is your dog? ');
var breed = prompt('Enter dog\'s breed: ');

age = parseInt(age);

var dog3 = {name:name, age:age, breed:breed};
console.log(dog3);

console.log('\n\n');



// Exercise 2: Prompt user for list of dog names, create array and print out

var dogs = [];
var response = prompt('Enter(d)og or (q)uit: ');

while(response !== 'q'){
  name = prompt('Enter dog\'s name: ');
  age = prompt('How old is your dog? ');
  breed = prompt('Enter dog\'s breed: ');

  var dog = {name:name, age:age, breed:breed};
  dogs.push(dog);
  response = prompt('Enter(d)og or (q)uit: ');
}

console.log(dogs);

// End of class exercise file
console.log('\n\n\n');




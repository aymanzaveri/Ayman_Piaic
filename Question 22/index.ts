// // Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car1: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car1 === 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car1=== 'honda');

let age: number = 25;

console.log("Is age > 18? I predict True.");
console.log(age > 18);

console.log("Is age < 18? I predict False.");
console.log(age < 18);

let name1: string = 'Alice';

console.log("Is name == 'Alice'? I predict True.");
console.log(name1 === 'Alice');

console.log("Is name == 'Bob'? I predict False.");
console.log(name1 === 'Bob');

let temperature: number = 32;

console.log("Is temperature <= 32? I predict True.");
console.log(temperature <= 32);

console.log("Is temperature > 32? I predict False.");
console.log(temperature > 32);

let carModels: string[] = ['subaru', 'honda', 'toyota'];

console.log("Does carModels include 'honda'? I predict True.");
console.log(carModels.includes('honda'));

console.log("Does carModels include 'bmw'? I predict False.");
console.log(carModels.includes('bmw'));

let isElectric: boolean = false;

console.log("Is the car electric? I predict False.");
console.log(isElectric);

console.log("Is the car not electric? I predict True.");
console.log(!isElectric);

let mileage: number = 50000;

console.log("Is the mileage less than 100,000? I predict True.");
console.log(mileage < 100000);

console.log("Is the mileage more than 150,000? I predict False.");
console.log(mileage > 150000);


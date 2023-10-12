// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const myArray = [1, 2, 3, 4, 5];

// Intentionally access an out-of-range index (e.g., index 10)
const outOfRangeIndex = myArray[10]; // This will cause an error

// To correct the error, make sure you access a valid index
const validIndex = myArray[2]; 
console.log(validIndex); 
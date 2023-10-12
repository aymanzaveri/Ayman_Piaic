// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Tests for equality and inequality with strings
const string1: string = 'hello';
const string2: string = 'world';
const isEqual: boolean = string1 === string2; // False
const isNotEqual: boolean = string1 !== string2; // True

// Tests using the lower case function
const text: string = 'OpenAI';
const isLowercase: boolean = text.toLowerCase() === text; // False
const lowerText: string = text.toLowerCase();
const isLowercaseAfterConversion: boolean = lowerText === text; // True

// Numerical tests
const num1: number = 5;
const num2: number = 10;
const isEqualNum: boolean = num1 === num2; // False
const isNotEqualNum: boolean = num1 !== num2; // True
const isGreaterThan: boolean = num1 > num2; // False
const isLessThan: boolean = num1 < num2; // True
const isGreaterOrEqual: boolean = num1 >= num2; // False
const isLessOrEqual: boolean = num1 <= num2; // True

// Tests using "and" and "or" operators
const x: boolean = true;
const y: boolean = false;
const andResult: boolean = x && y; // False
const orResult: boolean = x || y; // True

// Test whether an item is in an array
const numbers: number[] = [1, 2, 3, 4, 5];
const searchNumber: number = 3;
const isInArray: boolean = numbers.includes(searchNumber); // True

// Test whether an item is not in an array
const fruits: string[] = ['apple', 'banana', 'cherry'];
const searchFruit: string = 'orange';
const isNotInArray: boolean = !fruits.includes(searchFruit); // True

// Printing the results
console.log('Equality:', isEqual, 'Inequality:', isNotEqual);
console.log('Is Lowercase:', isLowercase, 'Is Lowercase After Conversion:', isLowercaseAfterConversion);
console.log('Equality:', isEqualNum, 'Inequality:', isNotEqualNum);
console.log('Greater Than:', isGreaterThan, 'Less Than:', isLessThan);
console.log('Greater or Equal:', isGreaterOrEqual, 'Less or Equal:', isLessOrEqual);
console.log('AND Result:', andResult, 'OR Result:', orResult);
console.log('Is in Array:', isInArray);
console.log('Is Not in Array:', isNotInArray);

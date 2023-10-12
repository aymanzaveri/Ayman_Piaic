// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
const string1 = 'hello';
const string2 = 'world';
const isEqual = string1 === string2; // False
const isNotEqual = string1 !== string2; // True
// Tests using the lower case function
const text = 'OpenAI';
const isLowercase = text.toLowerCase() === text; // False
const lowerText = text.toLowerCase();
const isLowercaseAfterConversion = lowerText === text; // True
// Numerical tests
const num1 = 5;
const num2 = 10;
const isEqualNum = num1 === num2; // False
const isNotEqualNum = num1 !== num2; // True
const isGreaterThan = num1 > num2; // False
const isLessThan = num1 < num2; // True
const isGreaterOrEqual = num1 >= num2; // False
const isLessOrEqual = num1 <= num2; // True
// Tests using "and" and "or" operators
const x = true;
const y = false;
const andResult = x && y; // False
const orResult = x || y; // True
// Test whether an item is in an array
const numbers = [1, 2, 3, 4, 5];
const searchNumber = 3;
const isInArray = numbers.includes(searchNumber); // True
// Test whether an item is not in an array
const fruits = ['apple', 'banana', 'cherry'];
const searchFruit = 'orange';
const isNotInArray = !fruits.includes(searchFruit); // True
// Printing the results
console.log('Equality:', isEqual, 'Inequality:', isNotEqual);
console.log('Is Lowercase:', isLowercase, 'Is Lowercase After Conversion:', isLowercaseAfterConversion);
console.log('Equality:', isEqualNum, 'Inequality:', isNotEqualNum);
console.log('Greater Than:', isGreaterThan, 'Less Than:', isLessThan);
console.log('Greater or Equal:', isGreaterOrEqual, 'Less or Equal:', isLessOrEqual);
console.log('AND Result:', andResult, 'OR Result:', orResult);
console.log('Is in Array:', isInArray);
console.log('Is Not in Array:', isNotInArray);
export {};

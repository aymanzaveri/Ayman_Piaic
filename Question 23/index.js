// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
const isEqual = "apple" === "apple";
// const isNotEqual = "apple" = "banana";
// • Tests using the lower case function
const isEqualLower = "HELLO".toLowerCase() === "hello";
const isNotEqualLower = "WORLD".toLowerCase() === "hello";
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Equality
const isEqualNum = 5 === 5;
// Inequality
// const isNotEqualNum = 7 !== 3;
// Greater than
const isGreaterThan = 10 > 5;
// Less than
const isLessThan = 3 < 8;
// Greater than or equal to
const isGreaterOrEqual = 6 >= 6;
// Less than or equal to
const isLessOrEqual = 9 <= 7;
// • Tests using "and" and "or" operators
// True
const andTrue = true && true;
// False
const andFalse = true && false;
// True
const orTrue = true || false;
// False
const orFalse = false || false;
// • Test whether an item is in a array//
const fruits = ["apple", "banana", "cherry"];
const item2 = "banana";
const isInArray = fruits.includes(item2);
if (isInArray) {
    console.log(`${item2} is in the list.`);
}
else {
    console.log(`${item2} is not in the list.`);
}
// • Test whether an item is not in a array//
const colors = ["red", "blue", "green"];
const item3 = "yellow";
const isNotInArray = !colors.includes(item2);
if (isNotInArray) {
    console.log(`${item2} is not in the list.`);
}
else {
    console.log(`${item2} is in the list.`);
}
export {};

// 1. Create an array called ages.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract first element from the last element
let ageDifference = ages[ages.length - 1] - ages[0]; // ages[ages.length - 1] accesses the last element
console.log("Difference between last and first age: ", ageDifference);

// Add a new age to your array and repeat the step above to ensure it is dynamic.
ages.push(50); // Add a new age to the array
ageDifference = ages[ages.length - 1] - ages[0];
console.log("Updated difference after adding new age: ", ageDifference);

// 2. Create an array called names that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log("Average age: ", averageAge);

// 3. Create an array called names and calculate average number of letters per name.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Loop to calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average number of letters per name: ", averageLetters);

// 4. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + " ";
}
console.log("Concatenated names: ", concatenatedNames.trim()); // trim() removes the trailing space

// 5. How to access the last element of any array?
let lastElement = names[names.length - 1];
console.log("Last element of names array: ", lastElement);

// 6. How to access the first element of any array?
let firstElement = names[0];
console.log("First element of names array: ", firstElement);

// 7. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log("nameLengths array: ", nameLengths);

// 8. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalNameLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
  totalNameLength += nameLengths[i];
}
console.log("Total sum of name lengths: ", totalNameLength);

// 9. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
function repeatWord(word, n) {
  return word.repeat(n); // Using String's built-in repeat() method
}
console.log("Repeated word: ", repeatWord("Hello", 3)); // Should print 'HelloHelloHello'

// 10. Write a function that takes two parameters, firstName and lastName, and returns a full name.
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log("Full name: ", getFullName("John", "Doe")); // Should print 'John Doe'

// 11. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum > 100;
}
console.log(
  "Is sum of numbers greater than 100? ",
  isSumGreaterThan100([50, 30, 25])
); // Should print true

// 12. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log("Average of numbers: ", calculateAverage([10, 20, 30])); // Should print 20

// 13. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function isFirstAverageGreaterThanSecond(arr1, arr2) {
  let avg1 = calculateAverage(arr1);
  let avg2 = calculateAverage(arr2);
  return avg1 > avg2;
}
console.log(
  "Is average of first array greater than second? ",
  isFirstAverageGreaterThanSecond([10, 20], [5, 15])
); // Should print true

// 14. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.5;
}
console.log("Will buy drink? ", willBuyDrink(true, 15)); // Should print true
console.log("Will buy drink? ", willBuyDrink(false, 5)); // Should print false

// 15. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function calculateProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
console.log("Product of numbers: ", calculateProduct([1, 2, 3, 4])); // Should print 24
0;

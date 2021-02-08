// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// const findOutlier = (arr) => {
//   let odds = [];
//   let evens = [];

//   arr.forEach((num) => {
//     if (num % 2 === 0) {
//       evens.push(num);
//     } else {
//       odds.push(num);
//     }
//   });

//   if (odds.length === 1) {
//     return odds[0];
//   } else {
//     return evens[0];
//   }
// };

// console.log(findOutlier([0, 1, 2])); //, 1
// console.log(findOutlier([1, 2, 3])); //, 2
// console.log(findOutlier([2, 6, 8, 10, 3])); //, 3
// console.log(findOutlier([0, 0, 3, 0, 0])); //, 3
// console.log(findOutlier([1, 1, 0, 1, 1])); //, 0

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string. For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string. As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'. If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(string) { //*here is a function that takes a string!
  const stringToArr = string.split(""); //*take that string and turn it into an array, one character per element. [[  ]]

  let indexCounter = 0;
  while (stringToArr.length !== indexCounter) {
    const filteredArr = stringToArr.filter(
      (letter) => letter.toLowerCase() == stringToArr[indexCounter].toLowerCase()
    );
    if(filteredArr.length === 1){
      return stringToArr[indexCounter]
    } 
    indexCounter++;
  }
  return ""; //*This is returned out of the function
}

console.log(firstNonRepeatingLetter("a")); //'a'
console.log(firstNonRepeatingLetter("streSs")); //, 't'
console.log(firstNonRepeatingLetter("moonmen")); //, 'e'

//*do I need to look at the whole thing?
//*

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// function narcissistic(num) {
// const length = num.toString().length
// const number = num.toString()
// let total = 0;
// for(let i = 0; i < length; i++){
//   total += number[i]**length
// }
//  if(total === num){
//    return true;
//  } else {
//    return false;
//  }
// }
// console.log(narcissistic( 7 ), true, "7 is narcissistic")
// console.log(narcissistic( 371 ), true, "371 is narcissistic")

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// var moveZeros = function (arr) {
//   const length = arr.length;
//   const zeroArr = [];
//   const newArr = [];

//   for (let i = 0; i < length; i++) {
//     if (arr[i] === 0) {
//       zeroArr.push(arr[i]);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr.concat(zeroArr);
// };
// console.log(moveZeros([0, 1, 2, 3]));

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:
// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  const flatArr = board.flat();

  //unfinished game return -1
  if (flatArr.includes(0)) {
    return -1;
  }

  //return 1 if 'X' won. X == 1
  const isEqualToOne = (curVal) => curVal === 1;
  board.forEach((board) => {
    if (board.every(isEqualToOne)) return 1;
  });
  for (let i = 0; i < 3; i++) {
    if (flatArr[0 + i] === 1 && flatArr[3 + i] === 1 && flatArr[6 + i] === 1) {
      return 1;
    }
  }
  if (flatArr[0] === 1 && flatArr[4] === 1 && flatArr[8] === 1) {
    return 1;
  }

  //return 2 if 'O' won. X == 0
  const isEqualToTwo = (curVal) => curVal === 2;
  board.forEach((board) => {
    if (board.every(isEqualToTwo)) return 2;
  });
  for (let i = 0; i < 3; i++) {
    if (flatArr[0 + i] === 2 && flatArr[3 + i] === 2 && flatArr[6 + i] === 2) {
      return 2;
    }
  }
  if (flatArr[0] === 2 && flatArr[4] === 2 && flatArr[8] === 2) {
    return 2;
  }

  //else return 0, for draw
  return 0;
}

// You can use Test.expect(boolean, [optional] string) to test your code
console.log(
  isSolved([
    [1, 1, 2],
    [2, 2, 2],
    [1, 2, 1],
  ])
);

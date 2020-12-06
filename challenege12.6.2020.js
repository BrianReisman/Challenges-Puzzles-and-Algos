//The challenge here was to create a function that could take any array of numbers, and return a new array where the numbers have been reordered so the highest number is returned first followed by the lowest number [indexes 0 and 1], then the second highest followed by the second lowest number [in indexes 2, and 3]. etc.
// https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript - 7 kyu

function solve(arr){ //This function will take an array of numbers
  const highLowArr = arr.sort(function(a, b){return b-a}); //the array it takes will sorted high to low and stored in a new constant
  const originalArrLen = arr.length; //the original length of the argument array will be sorted in a seprate constant
  const newArr = []; //Here is the array that will be returned at the end, initialized as empty and will be .push()ed into.

  for(let i = 0; i < originalArrLen; i++){ //looping through as many times as the argument array is long...
    if (i % 2 === 0) { //...if this count through the loop is even (0 is included)...
      newArr.push(highLowArr[0]); //onto the empty array we are returning .push() the highLowArr value at this loop number's index...
      highLowArr.shift(); //...and delete that element from the array
    } else { // Otherwise, (aka the count through the loop is an odd number)...
      newArr.push(highLowArr[highLowArr.length-1]); //take the last number in the sorted array and .push() it onto the array being returned.
      highLowArr.pop(); //...after that pop() off, delete, the value at that index.
    }
  }

  console.log(newArr)
  return newArr; //After the loop is complete, return the newArr.  
}

const testArr = [1,2,3,44,5,6,9,8,-7];
solve(testArr);
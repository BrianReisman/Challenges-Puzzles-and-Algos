//The challenege here is to create a function that:
// 1. Create a function that takes a string as input
// 2. reverses the string word for word and returns the reversed string.
// 3. NOTE you can NOT use return str.split(' ').reverse().join(' ')
// 4. And you must use some kind of a loop!

const reverseString = ( str => { //a function that takes a string
  const strArray = str.split(' '); //the string argument is split into an array by spaces
  const newArray = []; //this new array is at standby for the reordered elements
  let returnStr; //this will be the joined together string once the newArray is filled

  for (let i = 0; i < strArray.length; i++) { //looping through as many times as there are words in strArray
    newArray.unshift(strArray[i]); //Take each element of strArray and tack it onto the *front* of the new array pushing all others back
  }

  returnStr = newArray.join(' ') //Now that the loop is complete with the newArray filled up, join each element into one string with a space between each element 
  return returnStr //return this new string.
})
console.log(reverseString('Brian Reisman')) //=> 'Reisman Brian'
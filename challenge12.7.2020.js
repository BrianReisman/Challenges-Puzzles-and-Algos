// Here is a function that takes two arrays as its arguments. The first array contains the submitted answers.
// The second array is the answer key of correct answers. Grade as follows: correct answers +4,
// inncorrect answers -1, and if there is a blank (no question) in the test key, regardless of
// whether or not the student answered, 0. If a student scores lower and 0, return zero. 
// Return the score.

function checkExam(array1, array2) { //Here is a function that takes two arguments, both arrays.
  let score = 0; //Here will be the variable tracking the score as each answer is checked.

  for(let i = 0; i < array1.length; i++){ //looping through once time for every question on the test
    if (array2[i] === '') { //if there was no question,
      score += 0; //have no change on the score
    } else if (array1[i] === array2[i]){ //if the submitted answer matched the test key...
      score += 4; //...+4 points
    } else { //Otherwise, the answer must be wrong and...
      score -=1; //...-1 point.
    }
  }

//Now that all answers have been checked we return the score
  if(score < 0){ //if the score is below 0...
    return 0; //... return 0
  } else { //otherwise...
    return score; //return the value of the variable score.
  }
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //=>6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) //=>7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) //=>16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])) //=>0


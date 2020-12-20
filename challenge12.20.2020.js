//*This challenge asked that I come up with code that count the smiley faces. A valid smiley face is considered one whose eyes are either ; or :, whose nose is optional but if it is included either - or ~, and whose smile could be marked with either ) or D.
//The original challenge can be found here. https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;

  arr.forEach((face) => {
    // console.log(face.split(""));
    const splitFace = face.split("");
    if (
      (splitFace[0] === ":" || splitFace[0] === ";") &&
      (splitFace[1] === "-" ||
        splitFace[1] === "~" ||
        splitFace[1] === ")" ||
        splitFace[1] === "D") &&
      (splitFace[2] === ")" ||
        splitFace[2] === "D" ||
        splitFace[2] === undefined)
    ) {
      count++;
    }
  });
  return count;
}

console.log(countSmileys([])); //=> expected, 0
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); //=> expected, 4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); //=> expected, 2
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); //=> expected, 1

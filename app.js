

function solve(arr){
  const highLowArr = arr.sort(function(a, b){return b-a});
  // console.log(highLowArr)
  const originalArrLen = arr.length;
  const newArr = [];
  // console.log(originalArrLen);

  for(let i = 0; i < originalArrLen; i++){
    if (i % 2 === 1) {
      newArr.push(highLowArr[highLowArr.length-1]);
      highLowArr.pop();
    } else {
      newArr.push(highLowArr[0]);
      highLowArr.shift();
    }
  }

    console.log(newArr);
    return newArr;
}

const passedArr = [1,2,3,4,5,6,9,8,7]; //len: 9
solve(passedArr);



// https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript
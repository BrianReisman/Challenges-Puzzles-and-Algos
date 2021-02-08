function wave(str) {
  let splitStr = str.split(""); //*turn this into string into an array [].
  const returnArr = []; //*an empty Arr to push onto.



  for (let i = 0; i < str.length; i++) {
    //*take the array of letters and for each letter
    const asdf = splitStr.map(letter => {
      if(splitStr[i]){
        return letter.toUpperCase();
      } else {
        return letter;
      }
    })
    returnArr.push(asdf)
  }

  console.log(returnArr);
  return returnArr;
}

wave("hello");

// result = [];
// wave(""), result, "Should return: '"+result+"'";

// result = [" Gap ", " gAp ", " gaP "];
// wave(" gap "), result, "Should return: '"+result+"'";

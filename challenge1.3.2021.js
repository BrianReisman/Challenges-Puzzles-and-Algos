//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// For Example:
// usdcny(15) // => '101.25 Chinese Yuan'
// usdcny(465) // => '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

// console.log(usdcny(15));
// console.log(usdcny(465));


// Take a look at this pirate game.
// Give Amaro an array to confirm his logic for the next time, when the number of pirates changes.
// Keep in mind that each time the pirates find a treasure, the amount of gold equals to the number of pirates * 20.
// Example:
// If number of pirates is 2, including Amaro, then array = [40, 0], So he can keep all of the gold to himself.
// If number of pirates is 3, including Amaro, then array = [59, 0, 1], and 59 gold is his for the taking.
// If number of pirates is 4, including Amaro, then array = [79, 0, 1, 0], and 79 gold is his to take.
// If number of pirates is 5, including Amaro, then array = [98, 0, 1, 0, 1], and 98 gold is his for the taking.

function amaroPlan(pirateNum) {
  const totalGold = pirateNum * 20;
  const arr = [];
  for (let i = 0; i < pirateNum; i++) {
    if (i % 2 === 1) { //if i is odd set to 0
      arr.push(0);
    }
    if (i % 2 === 0) { //else set to 1
      arr.push(1)
    }
  }

  const spoils = arr.reduce((acc, cur) => acc + cur, -1)
  arr[0] = (totalGold - spoils);

  return arr;
}

// console.log(amaroPlan(2),);[40, 0]
// console.log(amaroPlan(3),);[59, 0, 1]
// console.log(amaroPlan(4),);[79, 0, 1, 0]
// console.log(amaroPlan(5),);[98, 0, 1, 0, 1]

//The following is not my solution but a beautiful answer. I particularly like the use of incrementing by 2 in the for loop
// function amaroPlan(pirateNum) {
//   const result = Array(pirateNum).fill(0);
//   result[0] = pirateNum * 20;
//   for (let i = 2; i < pirateNum; i += 2) {
//     result[0]--;
//     result[i]++;
//   }
//   return result;
// }

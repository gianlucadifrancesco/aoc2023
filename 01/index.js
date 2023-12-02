const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

let sum = 0;

input.forEach((el) => {
  let toSum = 0;

  for (let i = 0; i < el.length; i += 1) {
    const currChar = +el[i];
    if (!Number.isNaN(currChar)) {
      toSum += currChar * 10;
      break;
    }
  }

  for (i = el.length - 1; i >= 0; i -= 1) {
    const currChar = +el[i];
    if (!Number.isNaN(currChar)) {
      toSum += currChar;
      break;
    }
  }

  sum += toSum;
});

console.log('total: ', sum);

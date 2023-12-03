const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const wordToNum = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
const getDigit = (str) => +str || +wordToNum[str];
const regexp = new RegExp(`(\\d|${Object.keys(wordToNum).join('|')})`, 'gi');

let total = 0;

input.forEach((line) => {
  const digits = [];
  let matches = [];

  while ((matches = regexp.exec(line))) {
    const [match] = matches;
    regexp.lastIndex -= match.length - 1;
    digits.push(match);
  }
  regexp.lastIndex = 0;

  const firstDigit = getDigit(digits[0]);
  const lastDigit = getDigit(digits[digits.length - 1]);

  total += firstDigit * 10 + lastDigit;
});

console.log('total: ', total);

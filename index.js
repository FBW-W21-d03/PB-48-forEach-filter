const number = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];
const negativenZahlen = [];

number.forEach((zahlen) => {
  if (zahlen < 0) {
    negativenZahlen.push(zahlen);
  }
});
console.log(negativenZahlen);

/////Use A filter////////////

const myNumber = [
  -144, 18, 19, -12, 70.5, -100, -7, -909, -18, 145, 33, 1921, 1989,
];
myNumber.sort();

const myNegativnumber = myNumber.filter((numElem) => numElem < 0);
console.log(myNegativnumber);

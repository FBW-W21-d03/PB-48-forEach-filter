"use strict";
/*
const zahlen = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];
const ungeradeZahlen = [];
let summe = 0;
for (let index = 0; index < zahlen.length; index++) {
  summe = summe + zahlen[index];
}
console.log(summe);

for (ungerade = 0; ungerade < 20; ungerade++) {
  if (ungerade % 2 !== 0) {
    console.log(ungerade + "ungerade");
    console.log(ungerade + 1 + "gerade");
  }
}
*/

const zahlen = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];

console.log("Aufgabe", zahlen);

const negativenZahlen = [];
console.log("Aufgabe2", zahlen);

zahlen.forEach((negative) => {
  if (negative < 0) {
    console.log("Aufgabe3", negative);
    negativenZahlen.push(negative);
  }
});

negativenZahlen.sort();
console.log("Aufgabe4", zahlen);

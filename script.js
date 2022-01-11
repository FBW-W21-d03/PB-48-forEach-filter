const zahlen = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];
const negativeZahlen = [];

zahlen.forEach((zahl) => {
  if (zahl < 0) {
    negativeZahlen.push(zahl);
  }
});

console.log("Original-Array:", zahlen);
console.log("Alle negative Zahlen:", negativeZahlen);

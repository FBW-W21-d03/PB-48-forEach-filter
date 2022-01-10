const zahlen = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];

const minusZahlen = [];

zahlen.forEach (
    (zahlen) => {
    if (zahlen < 0) {
        minusZahlen.push(zahlen);
    }
}
);
console.log(minusZahlen);

zahlen.sort();

const negativeZahlen = zahlen.filter((numElem) => numElem < 0);
console.log(negativeZahlen);
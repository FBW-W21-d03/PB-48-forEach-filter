const number = [
    -44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921 , 1989
];
const negativenZahlen = [];

number.forEach (
    (zahlen) => {
    if (zahlen < 0) {
        negativenZahlen.push(zahlen);
    }

}
);
console.log(negativenZahlen);
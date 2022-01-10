const arrayZahlen = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];

console.log("Aufgabe 1 \n",arrayZahlen);


const negativenZahlen = [];
console.log("Aufgabe 2 \n", arrayZahlen);

arrayZahlen.forEach((negative) => {
    if (negative < 0) {
        console.log("Aufgabe 3 \n", negative);
        negativenZahlen.push(negative);
    }

});

negativenZahlen.sort();
console.log("Aufgabe 4 \n", negativenZahlen);
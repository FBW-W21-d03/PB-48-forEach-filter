const arrayZahl = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];

console.log("Aufgabe 1 ",arrayZahl);


const negativenZahl = [];
console.log("Aufgabe Teil 1 ", arrayZahl);

arrayZahlen.forEach((negative) => {
    if (negative < 0) {
        console.log("Aufgabe Teil 2 ", negative);
        negativenZahl.push(negative);
    }

});

negativenZahl.sort();
console.log("Aufgabe Teil 3", negativenZahl);
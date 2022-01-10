/*
javascript-forEach-filter
Uns steht eine Liste mit positiven und negativen Zahlen zur Verfügung.
*/

console.log("----- Teil 1 -----");
const zahlen = [-44 , 8 , 9 , -12 , 70.5 , -1 , -7 , -909 , -18 , 45 , 33 , 1921 , 1989];
console.log(zahlen);

console.log("----- Teil 2 -----");
const minusZahlen = [];
console.log("Array für Minuszahlen:" , minusZahlen);

console.log("----- Teil 3 -----");
zahlen.forEach((minusZahlenElem)=>
     {
        if(minusZahlenElem < 0){
minusZahlen.push(minusZahlenElem);
        }
});
console.log(minusZahlen);
    
console.log("----- Teil 4 -----");
console.log("Alle Zahlen:" , zahlen);
console.log("Alle Minuszahlen:" , minusZahlen);
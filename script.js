/*# javascript-forEach-filter
Uns steht eine Liste mit positiven und negativen Zahlen zur Verfügung.

Nun wollen wir daraus eine neue Liste mit nur den negativen Zahlen bilden.

## Aufgabenstellung - Teil 1
Schreibe ein Array mit folgenden Zahlen: -44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921 und 1989.

## Aufgabenstellung - Teil 2
Schreibe nun ein leeres Array für die negativen Zahlen.*/
const zahlen = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];
const negativeZahlen = [];
/*## Aufgabenstellung - Teil 3
Durchlaufe dein Array mit den Zahlen in einer forEach-Schleife und prüfe jedes Mal, ob es sich um eine negative Zahl handelt.*/
zahlen.forEach(
    (zahlen)=>{
if(zahlen <= 0){
negativeZahlen.push(zahlen)
}
});

console.log(negativeZahlen);
/*Falls ja, füge sie dem leeren Array hinzu.

## Aufgabenstellung - Teil 4
Schreibe beide Array in der Konsole aus.

Kontest du die negativen Zahlen erfolgreich finden?*/

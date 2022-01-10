// AUFGABE TEIL-1
const numbers = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921 ,1989];


// AUFGABE TEIL - 2
let negNumbers = [];


// AUFGABE TEIL - 3
numbers.forEach((number) => {
        if(number < 0){
            negNumbers.push(number);

        }
    }
);


// AUFGABE TEIL - 4
console.log(`${negNumbers}`);

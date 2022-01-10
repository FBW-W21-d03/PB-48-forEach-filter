const originalArray = [-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921, 1989];

const negativeArray = [];
const positiveArray = [];

originalArray.forEach (
    (paramForEach) => {
      if (paramForEach < 0) {
          negativeArray.push(paramForEach);
        
    
        }
        else{
          (paramForEach > 0)
          positiveArray.push(paramForEach);
        }
      
    }
)

 console.log("All numbers:",originalArray);
console.log("Negative numbers:", negativeArray);
console.log("Possitive numbers:" ,positiveArray);
const zahlen =[-44, 8, 9, -12, 70.5, -1, -7, -909, -18, 45, 33, 1921 ,1989]
let neg_zahlen=[]

zahlen.forEach(
    (negativ)=>{
        if (negativ<0){
       neg_zahlen.push(negativ)
        }
    }
)
console.log(neg_zahlen)
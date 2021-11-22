//Function Expresseion
const increment1 = function(n){
    return n+1
}

//Arrow Function is always  anonymous
const increment2 = (n)=>{
    return n+1
}


const increment3 = n=>{
    return n+1
}

const increment4 = n=>n+1

console.log(increment1(1))
console.log(increment2(2))
console.log(increment3(2))
console.log(increment4(2))

const sum = (a , b) => a+b
console.log(sum(2,3))

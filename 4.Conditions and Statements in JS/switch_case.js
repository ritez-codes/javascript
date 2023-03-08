
function sum(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function mul(a,b) {
    return a*b
}

//  switch case statement 
let operator ="+"
let a = 12
let b = 2
switch(operator) {
    case "+" :
        console.log(sum(a,b))
        break;
    
    case "-" :
        console.log(subtract(a,b))
        break;

    case "*" :
        console.log(mul(a,b))
        break;

    default :
        console.log("enter right operator !")
}



//  ternary operator 
let op = "+"

let result = !op ? a+b : a-b

console.log(result)


// Types of Functions...

// arrow function

let sum = (a,b) => a+b

let res = sum(10,20)
console.log(res)

const greet = (name) =>{
    console.log("Hello How are you," , name)
}
greet("Almabetter")



const square = n => n**2

function compute(a) {
    let res = square(a)
    console.log("square of ",a,"is",res)
}

compute(2)
// ?* High order function 

let numarr = [1,2,3,4,5]

function doubleNum(num) {
    return num * 2
}

const doublenumarr = numarr.map(doubleNum)
console.log(doublenumarr)



//* Asynchronous Function
function speak(param) {
    console.log(param)
}

function delayedFunction(fn) {
    return function(val,delay) {
        setTimeout(()=>{
            fn(val)
        },delay)
    }
}

let delayspeak = delayedFunction(speak)
delayspeak("I am late 2s" ,2000)




//*  Function Composition

function double(num) {
    return 2*num
}

function square(num) {
    return Math.pow(num , 2)
}

let output1 = double(3)
let output2 = square(output1)
console.log(output2)



//* Immutability in JS

const text = "hello" //*Immutable 

const person = { //* Mutable
    id : 2,
    name : "Jaggery"
}

person.id = 10
person.age = 23

console.log(person)

//* immutable
const person2 = {
    id : "2",
    name : "AlmaBetter"
}

Object.defineProperty(person2 ,"id",{
    value : 2 ,
    writable: false
})

console.log(person2.id)
person2.id = 1000
console.log(person2.id)
console.log(person2)


Object.freeze(person)
person.id =10000
console.log(person)
console.log(person.id)
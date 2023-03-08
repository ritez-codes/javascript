// pure function vs impure function...

// impure
let greeting = "Hello"
function notApureFunction(name) {
    return `${greeting} ${name}`
}
let n = notApureFunction("Riteswar")
console.log(n)
// ?pure 
function pureFunction(name) {
    return `Hello ${name}`
}
let p = pureFunction("Nikita")
console.log(p)


// * First Class Object .....
// *special about js is that js function is first class object

function name() {}
name.firstname = "Ritez"
console.log(name.firstname)

function speak(name) {
    console.log("Hi",name)
}
let fn = speak
fn("Riteswar")

let arr = [12,34,fn]
console.log(arr)
arr[2]("Nishita")



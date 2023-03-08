
//  function declaration with parameters 
function sum(param1 ,param2) {
    let sum = param1 + param2
    return sum
}
// function call with arguments
let arg1 = 20
let arg2 = 22
let s = sum(arg1 ,arg2)
console.log(s)


// function declaration with default parameters
function division(num1 = 10 , num2 = 100) {
    let res = 0;
    if(num1 > num2) {
        res = num1 / num2
    } else {
        res = num2 / num1
    }
    return res
}

let d1 = division()
let d2 = division(4,10)
console.log(d1);
console.log(d2);


// helper function

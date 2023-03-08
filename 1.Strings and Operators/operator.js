//  Assignment Operartors
let num = 21;
let str = "I love JS"

let x = 3
x += 2 // x = x+2 => x = 3+2 => x = 5
console.log(x) // 5

x -= 4 //
console.log(x) // 1

x *= 3
console.log(x) // 3

x **= 2
console.log(x) // 9


// ===========
//  Arithmetic Operator
let num1 = 5 , num2 = 2

console.log(num1 + num2)    // addition
console.log(num1 - num2)    // subtraction
console.log(num1 * num2)    // multiplication
console.log(num1 / num2)    // division
console.log(num1 % num2)    // remainder
console.log(num1 ** num2)   // exponentiation or power

let i = 1
console.log(++i) // pre-incement
console.log(i++) //post increment : print 2 but increased to 3
console.log(i)

console.log(--i) //pre-decrement
console.log(i--) //post-decrement   : print 2 but decreased to 1
console.log(i)


//==============
// Comparison Operator..
let n1 = 22 , n2 = 21 , n3 = '22'

console.log(n1 == n3)   // equal to
console.log(n1 === n2)  // strictly equal to ,it means check data types as well

console.log(n1 > n2)    // greate than
console.log(n1 < n2)    // less than

console.log(n1 != n3)   // not equal to
console.log(n1 !== n3)  // strictly not equal to

console.log(n1 >= n2)   //greater than or equal to
console.log(n1 <= n3)   //less than or equal to


// ===============
console.log('')
// Logical Operator
let result;
let y1 = 2 , y2 = 3

// AND - &&  
console.log(true && true && true) // true : In And All condition must true
result = (y1 < y2) && (y1 === 2)
console.log(result)

console.log(true && false)
console.log(false && false)


// OR - ||
console.log(true || false || false) // true : any one condition must true or vice versa
result = (y1 == 12) || (y1 === 2)
console.log(result)

console.log(true || true)
console.log(false || false) // all condition has to be false
//  strings in js

let str = "JavaScript"
let str1 = 'Programming'
let str2 = `I love ${str} and I know ${str1}`

console.log(str)
console.log(str1)
console.log(str2)

console.log("I love 'AI'") //
console.log('I love "IoT"') //


// js is case-sensitive
console.log("a" === "a")
console.log("a" === "A")

// ===========
// using the + operator
const message1 = 'This is a long message ' +
'that spans across multiple lines' +
'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

//  ==========

// Accesing JS string Characters
let a = "Hello"
console.log(a)
console.log(a[0]) // first character
console.log(a[a.length-1]) // last character
console.log(a[1]) //second char

// charAt
console.log(a.charAt(0))
console.log(a.charAt(a.length-1))


// javascript string objects..
let word = "Hello"
let wordObj = new String("Hello")

console.log(word ,"-", typeof word)
console.log(wordObj ,"-", typeof wordObj)

console.log(word.length)
console.log(word.constructor)


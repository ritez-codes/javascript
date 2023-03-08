
//  javascript strings are immutable ...it means we cannot change

// Javascript string methods
let text1 = 'javascript'
let text2 = 'world'
let text3 =  "         Python    munna        "

// concatenating two strings
console.log(text1.concat(' ',text2)) // javascriptworld


//convert the text to uppercase
text1 = text1.toUpperCase()
console.log(text1)

//remove whitespace from string 
text3 = text3.trim();
console.log(text3)


// convert string into array
let newText = text2.split()
console.log(newText)

let newText1 = text2.split("")
console.log(newText1)

// slice the string
text1 = text1.slice(1,4)
console.log(text1)




// String() function is used to covert various data into strings

let data = true
let data2  = 2223

data = String(data)
console.log(data , typeof data)

data2 = String(data2)
console.log(data2 , typeof data2)


// js string operator
let word1 = "hello"
let word2 = "brother"
let word3 = "How are you ?"

word1 += word2 += word3
console.log(word1)




//  Interview Question .....
// 1. Given a string, reverse each word in the sentence

var string = "Welcome to this Javascript Guide!";

string = string.split("").reverse().join("")
console.log(string)

string = string.split(" ").reverse().join(" ")
console.log(string) 

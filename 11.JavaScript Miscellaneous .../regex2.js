/*
let text = "I love javascript, javacsript is very powerfull"
let regex = /java/

let result = regex.exec(text)
console.log(result)

console.log(regex.test(text)) 

if(regex.test(text)) {
     console.log("matched")
} else {
     console.log("Not matched")
}
*/

const mainText = "Ri*ez is lol"
let regex = /^Ritez/      //* starts with
regex = /script$/        //* ends with
regex = /R..ez/         //* . mathes any one charac.
regex = /R*tez/         //* mathes any 0 or more charac.
regex = /Ri?te?z/      //* after charc. is optional.
regex = /r*ez/i
regex = /ri\*ez/i

let res = regex.exec(mainText)
console.log(regex.test(mainText))
console.log(res)


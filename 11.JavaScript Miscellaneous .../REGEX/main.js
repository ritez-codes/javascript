
//  RegEx in javacsript

let re = /Ritez/
let str = "My name is Ritez"

const res1 = re.test(str)          // return true or false,according to condition.
console.log(res1)
const res2 = re.exec(str)          // return an array with results if matched, otherwise null
console.log(res2)

const res3 = str.match(re)         // return an array with results if matched, otherwise null
console.log(res3)
const res4 = str.search(re)        // return an index value of matching
console.log(res4)

//***************************************** */

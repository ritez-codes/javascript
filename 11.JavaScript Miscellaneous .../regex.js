
//  Regular Expression ...

const text = "This is JavaSript"
let reg1 = /test/g
// flags : g is for global, i is for case insensitive

console.log(reg1)
console.log(reg1.source)

let s = `This code is for test the regex , test is good then run`
// exec
console.log(reg1.exec(s))
console.log(reg1.exec(s))

let reg2 = /test/i
let s2 = "This is not for TeSt "
console.log(reg2.exec(s2))
console.log(reg2.exec(s2))

// test
let re = /riteswar/i
let mainText = "My name is Riteswar"

console.log(re.test(mainText))

//  match
let res = mainText.match(re)
console.log(res)

// search
console.log(mainText.search(re))

// replace
console.log(mainText.replace(re , "Java-Script"))

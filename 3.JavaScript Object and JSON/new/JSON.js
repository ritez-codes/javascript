// JSON in js

let jsArr = [
    "raghu","ramesh","devanand","kumar"
]

console.log(jsArr)
console.log(typeof jsArr)

// converting to json
let jsonArr = JSON.stringify(jsArr)
console.log(jsonArr)
console.log(typeof jsonArr)


//  reconverting to array
let arr = JSON.parse(jsonArr)
console.log(arr)
console.log(typeof arr)


let jsObj = {
    name : "Ritez",
    role : "Web3 Developer"
}
console.log(jsObj)
console.log(typeof jsObj)

// converting to json
let jsonObj = JSON.stringify(jsObj)
console.log(jsonObj)
console.log(typeof jsonObj)

// rconverting to js obj
let obj = JSON.parse(jsonObj)
console.log(typeof obj)

// ==========================

let ages = {
    number : "223",
    arjun : 23,
    radhika : 34
}

let data = JSON.stringify(ages , ["arjun" , "radhika"])
console.log(data)

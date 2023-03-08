
let data = {
name : "ritez",
role : "SDE"
}

// convert JS object format to JSON
data = JSON.stringify(data)
console.log(data)
console.log(typeof data)

// convert JSON to JS object
data = JSON.parse(data)
console.log(typeof data)

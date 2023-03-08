let age = [12,15,18,21,25,28,35]
// let 

// returns the first value of an array that passes the test
let value = age.find( val => val > 18)
console.log(value)


// returns the first index of an array that passes the test
let index = age.findIndex(val => {
    return val > 18
})
console.log(index)


//  filter
let adultAge = age.filter(adult)

function adult(val,ind,arr) {
    return val >= 18
}
console.log(adultAge)


// map
let ageAfter5 = age.map(afterFive)
function afterFive(val,ind,arr) {
    return val + 5
} 
console.log(ageAfter5)

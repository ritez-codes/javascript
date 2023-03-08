
// * Immutable part, 

const data = {
     name : "Raja"
}

function modifyState(data , property) {
     data.age = property
     return data;
}

modifyState(data , 12)
console.log(data)

function giveMeNewState (param , property) {
     return Object.assign({},param , {
          location : property
     })
}

let res = giveMeNewState(data , "Bangalore")
console.log(res)
console.log(data)


const array =  [1,2,3]
//*  making a copy of array
let copy = array
console.log(copy)

//* Making changes to the copy
copy.push(12)

console.log(copy)

//* Making changes the original array as well
console.log(array)



// 
let needle = [1,2,3]
let haystack = [1,2,3,4,5]

//  javascript array methods....
    let ages = [12,16,18,21,25,28,35]
    let myRoutine = ["sleep" , "eat" , "code" , "repeat"]
    let newRoutine = ["exercise"]

myRoutine.sort() // sort an array in a dictionary format
console.log(myRoutine)

myRoutine.reverse() // reverse the array elements
console.log(myRoutine)

//  concatination of array
let Routine = myRoutine.concat(newRoutine)
console.log(Routine)

// slicing of array
let sliced = Routine.slice(2)
console.log(sliced)

// find the index position of spcified element
console.log(Routine.indexOf("code")) // 3

// find the index position of spcified element from the last position
console.log(Routine.lastIndexOf("code")) // 3




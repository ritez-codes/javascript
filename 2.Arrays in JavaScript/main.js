// Arrays in JS

// create an array
// using array literal

let arr = ["eat" , "sleep" , "code"]
console.log(arr , typeof arr)

let arr2 = new Array("eat" , "sleep" , "code")
console.log(arr2 , typeof arr2)

// empty array
let emptyArray = []
console.log(emptyArray)

let numberArray = [1,2,3,4,5,6]  // array with numbers
console.log(numberArray)

let mixedArray = [true , 21 , "exercise" , "34"]
console.log(mixedArray) // array with mixed datatypes


// we can also store array , object and function inside an array
let data = [
    sum = ()=>{ console.log('The sum is',12+10) },
    [12,23,'zebra'] ,
    {
        name : "Taliban"
    }
]

console.log(data) 
data[0]()  // invoking function that is inside an array


// =========================
// accessing an element of an array
let dinner = ["Rice" , "dal" , "salad"]
console.log(dinner[0])
console.log(dinner[dinner.length - 1])
console.log(dinner[1])


// adding an element in an array
dinner.push("Chapati" , "ginger chutni") // add element at the end of an array.
console.log(dinner)

dinner.unshift("fried paneer") // add element at the biginning of the array.
console.log(dinner)



// change the elements of an array
dinner[0] = 'paneer bhaji'
dinner[1] = "aloo parata"



//  remove an element from an array.
let popElement = dinner.pop() // remove the last element from an array also returns the removed element
console.log(dinner)
console.log(popElement , "is removed")

let shiftElement = dinner.shift() // remove the first element of an array also returns the removed elements
console.log(dinner)
console.log(shiftElement , "is removed")


// array length
console.log(dinner.length)


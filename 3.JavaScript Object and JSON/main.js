
// object declaration
const person= {
    name : "Riteswar",
    age : "21",
    name :"lol"
}

console.log(
    typeof person
)

console.log(
    person
)

console.log(person.name , person.age)

let arr = [1,2,3,4]


// nested objects
const student = {
    name : "Suvam",
    age : 20 , 
    marks : {
        science : 50,
        maths : 63
    }
}

console.log(student)
console.log(student.marks["science"])
console.log(student.marks.maths)

// accessing key and val in object at a time using for of
for ( [key , val] of Object.entries(student)) {
    console.log(key)
    console.log(val)
}

let person1 = {
    name : "Selmon" ,
    age : 23 ,
    greet() {
        console.log(`Hello ${person1.name} , and your age is ${person1.age}`)
    }
}

person1.greet()

// built in function
// parseint : convert into number
let num = "12.444"
console.log(typeof num)
num = parseInt(num)
console.log(typeof num)
console.log(num)


// adding properties and methods in empty object
let emptyObj = {}
emptyObj.name = "Man"
emptyObj.greet = function() {
    console.log("Hello" , this.name)
}
// accesing methods and properties ....
console.log(emptyObj)
emptyObj.greet()

console.log(emptyObj)


// 
let arrn = [1,2,3,4]
console.log(arr.entries())
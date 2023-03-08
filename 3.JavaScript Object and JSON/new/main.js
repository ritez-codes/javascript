
//  create an object

let capital = {
    Assam : "Guwahati" , 
    Meghalaya : "Shillong",
    TamilNadu : "Chennai",
    Karnataka : "Bangalore" 
}
console.log(capital)

// accessing object properties 
console.log(capital.Assam)  // using dot notation
console.log(capital["Meghalaya"])   // using bracket notation

console.log(typeof capital)
// in js object key and value are called properties...

//=====================

// javascript nested objects

const student = {
    name : "Pallavi",
    age : 21,
    marks : {
        science : 80,
        maths : 66
    }
}

console.log(student)
console.log(student.name)
console.log(student.marks)
console.log(student.marks.science)
console.log(student.marks.maths)

// A JavaScript object method is a property containing a function declaration.
const person = {
    name : "Riteswar",
    role : "Web3 Engineer",
    about() {
        console.log(`${this.name} is a ${person.role}`)
    }
}
//  this keyword signifies the object 


person.about() // accessing object method..

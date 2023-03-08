
//***********call bind apply************/ 

let person = {
    firstName : "John",
    lastName : "Snow",
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let personX = {
    firstName:"Modi",
    lastName :"Jee"
}

// bind method can borrow method for an object from the another object
const borrowed = person.getFullName.bind(personX)
borrowed()

person.getFullName()


function greetings(greet) {
    let fullgreetings = `${greet} ${this.firstName} ${this.lastName}`
    console.log(fullgreetings)
}

greetings.call(person ,"hello")
greetings.bind(person ,"hello")()
greetings.apply(person , ["namaste"])

//***********call bind apply************/ 


//*************Prototype**************** */ 

function Minister(capital,name){
    this.capital = capital
    this.name = name
}

Minister.prototype.show = function() {
    return `Minister of ${this.capital} is ${this.name}`
}

let m1 = new Minister("Assam" ,"Mama")
let m2 = new Minister("UP" ,"Yogi")

console.log(m1.show())
console.log(m2.show())
//*************Prototype**************** */


//*********prototype chaining */

//*********prototype chaining */ 



// ******* Extends in Class => ES-6 **********/

class Car{
    constructor(brand) {
        this.name = brand;
    }

    present() {
        return this.name
    }

}

class Model extends Car {
    constructor(brand , model ) {
        super(brand);
        this.model = model;
    }

    show() {
        console.log(`${this.brand} its model is ${this.model}`)
    }

}


let m0 = new Model("Marcedes","Benz")

m0.show()


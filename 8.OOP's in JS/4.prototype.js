// ***** Prototype in JS

Array.prototype.addFive = function() {
    for(let i = 0 ; i < this.length ; i++) {
        this[i] = this[i] + 5;
    }
}


let arr = [10,20,0,40,50]
console.log(arr)

arr.addFive()
console.log(arr)

arr.addFive()
console.log(arr)


class Name {
    constructor(fname , lname) {
        this.fname = fname
        this.lname = lname
    }

}

Name.prototype.getFullName = function(m) {
    console.log(` ${m} => ${this.fname} ${this.lname}`)
}

let n1 = new Name("Riteswar" , "Swargiary")
n1.getFullName("get full name")


// ** Prototype chaining **/

function SuperType() {
    this.name = "John"
}

function SubType() {
    this.age ="34yrs"
}

SuperType.prototype.getName = function() {
    console.log(this.name)
}

let sup1 = new SuperType()
sup1.getName()

SubType.prototype = new SuperType()

let sub1 = new SubType()
sub1.getName()


// ** Prototype chaining **/


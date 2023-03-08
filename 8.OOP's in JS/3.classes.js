
class Account {
    constructor(name ,acnum) {
        this.name = name
        this.acnum = acnum
    }

    showName() {
        console.log(this.name)
    }
}

let acnum = new Date().getTime()

let a1 = new Account("Riteswar" ,acnum)
let a2 = new Account("Trinity" , acnum)
let a3 = new Account("Felicia" , acnum)

a1.showName()
a2.showName()
a3.showName()

// * call method
function getDetail() {
    console.log(this.name, " => " , this.acnum)
}

getDetail.call(a1)
getDetail.call(a2)
getDetail.call(a3)

// **********************

class Detail {
    getAc() {
        console.log(this.acnum)
    }
}

let d = new Detail()
d.getAc.call(a2)





//  ** Inheritance 
// extends
class School {
    constructor(name ) {
        this.course = "Web3 Blockchain"
        this.name = name
    }

    show() {
        console.log(this.name +"=>"+this.course)
    }
}


class Student extends School{
    constructor(name,stdName) {
        super(name)
        this.stdName = stdName
    }
    
}

School.prototype.getName = function() {
    console.log(this.stdName)
}

let std1 = new Student("Almabetter" , "Riteswar")
std1.show()
std1.getName()


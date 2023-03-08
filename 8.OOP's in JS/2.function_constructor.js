
function Company(name , valuation) {
    this.name = name
    this.valuation = valuation

    this.showD = function() {
        console.log(this.name+ " ===> " +this.valuation )
    }
}

const c1 = new Company("Apple" , "2223 Billion")
const c2 = new Company("Google" , "1210 Billion")

c1.showD()
c2.showD()

function getValue(m) {
    console.log(m , this.valuation)
}

// * call method
getValue.call(c2 ,"Show valuation")
getValue.call(c1 , "show valuation")

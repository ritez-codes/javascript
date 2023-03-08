
const institute1 = {
    name : "AlmaBetter",
    branch : "Web3",
    fee : 15000,
    getName : function(method) {
        console.log(method,this.name)
    }
}

institute1.getName("getname")

const institute2 = {
    name : "Masai",
    branch : "Web2",
    fee : 0
}

// * call bind apply - borrows a function ******

function getBranch(method) {
    console.log(method , this.branch)
}
//* We can use the function that present outside the object that is not present in the Object to do perticular thing as method of that object

getBranch.call(institute1 , "getbranch with call")

//  we borrowed a getname() method from institute1 and used in institute2
//*call method instantly call the function
institute1.getName.call(institute2 , "getname with call")

// * apply is same as call, but the different is it take its args in array
institute1.getName.apply(institute2 , ["getname with apply"])

// * bind doesnot call instantly, we make a copy of function to use anywhere
const fn = institute1.getName.bind(institute2 , "getname with bind")
fn()

getBranch.call(institute2 , "getbranch with call")


// * call bind apply - borrows a function ******
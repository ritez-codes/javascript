//  if and else statement in JS

function test() {
    return false
}

if (test()) {
    console.log("Evaluated true")
}else {
    console.log("Evaluated false")
}


//  nested loops

let money = 40 ;
let movieTicket = 100;
let popcornprice = 30
let foodprice = 20
let omelete = 10

if (movieTicket <= money) {
    console.log("watch a movie")
    money -= movieTicket;
    console.log("money left",money)

    if (popcornprice <= money) {
        console.log("get a popcorn with",popcornprice)
        money -= popcornprice
        console.log("money left",money)
    }
    else {
        console.log("watch without popcorn")
        console.log("money left",money)

    }

}
else {
    if (foodprice <= money) {
        console.log("server a food")
        console.log("money left",money)

        money -= foodprice;
        if(omelete <= money) {
            console.log("get an omelete")
            money -= omelete
        console.log("money left",money)

        } else {
            console.log("go to home")
        console.log("money left",money)

        }
    } else {
        console.log("go home")
        console.log("money left",money)

    }
}
/*
Last date for fee submission is over and now late fine will be incurred, so you are assigned the job to build a late fine calculator for a coaching institution:
• fine 5% if the fee value is between 50 and 300
• fine 10% if the fee value is higher

*/

let overdue = true;
let feePrice = 1000
let fine = 0
let totalfee = 0

if (overdue) {

    if (feePrice >= 50 && feePrice <=300 ) {
        fine = 5/100 * feePrice
        totalfee = feePrice + fine
    }
    else if(feePrice > 300) {
        fine = 10/100 * feePrice
        totalfee = feePrice + fine   
    }
} else {
    totalfee = totalfee + fine
}

console.log("Yoy fine is ",fine)
console.log("Your total fee is ",totalfee)
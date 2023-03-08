
// sets doesn't take duplicate values
//  or it is an array with unique elements , no 
// sets has no keys (index)

let letter = new Set(["a","b","c"])
console.log(letter)

letter.add(12) // addind a value in set
console.log(letter) 
console.log(typeof letter)   // object
console.log(letter instanceof Set) // true

// entries
console.log(letter.entries())
// 
let text =''
letter.forEach((val)=>{
    text += val
})

console.log(text)


//
let text1 = ''
for (entry of letter.entries()) {
    
    console.log(entry)
}
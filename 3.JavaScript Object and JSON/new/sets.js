
// JavaScript Sets...
/*
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.

*/
const countries = new Set(["India","Africa","Brazil","China"])
console.log(countries)

countries.add("Russia","UAE")   // adding values in a set
console.log(countries)


// set methods ...

countries.delete("China") // remove an element from the set
console.log(countries)

console.log(countries.has("India")) // returns true if value exist.
console.log(countries.has("UK"))    // otherwise false

console.log(countries.values()) // returns an iterator with all the values in a Set
console.log(countries.keys())   // same as values()
console.log(countries.entries())


// remove all elements from a set
// countries.clear() 
console.log(countries)

countries.forEach(iLike)
function iLike(value) {
    console.log("I like " + value)
}

// returns the number of elements in a set
console.log(countries.size)


console.log(typeof countries) // object
console.log(countries instanceof Set) // true
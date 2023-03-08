/*
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.

*/

// create a Map 

let language = new Map( [
    ["Assam" , "assamese"],
    ["Meghalaya" , "khasi"],
    ["Karnataka" , "kanada"],
    ["Tamilnadu" , "tamil"]
] )

console.log(language)
language.set("Manipur" , 'manipuri')
console.log(language)


//  accesing 
console.log(language.get("Karnataka"))

console.log(language.has("tamm"))

console.log(language.entries())

console.log(language.keys())
console.log(language.values())

language.delete("Karnataka")
console.log(language)

language.forEach(officialLang)
function officialLang(val , key) {
    console.log(`The official language of ${key} is ${val}`)
}


console.log(language.size)

language.clear()

console.log(language , 'cleared')
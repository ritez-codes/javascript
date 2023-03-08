
const str = "hulllo how are you ,ritezritez Ritez@123"

// Character Sets.we use -[]
let regex = /h[a-z]llo/  // can be any charac from a to z
regex = /h[ety]llo/      // can be an a,t or y
regex = /h[^ety]llo/     // cannot be a,t or y

regex = /r[itu]te[^ls]/  //can be i,t,u and cannot be z and s 
regex = /[A-Z]ite[a-z][@][0-9]23/

// Quantifiers...
regex = /hul{2}o/i       // r can occur exactly 2 times.
regex = /hul{0,3}o/i       // r can occur 0 to 3 (0 or 1 or 2) times.

// Groupings...
regex = /(ritez){0,3}/i

if (regex.test(str)) {
     console.info("Matched...")
     let res = regex.exec(str)
     console.log(res)
} else {
     console.info("Not Matched")
}

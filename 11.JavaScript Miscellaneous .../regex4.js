
// Shorthand Character Classes

function regexTest(regex,str) {
     console.log(regex.test(str))
}

function regexExec(regex,str) {
     console.log(regex.exec(str))
}

let regex = /\witez/ // any one alpha or numeric value...
let str = "0itez love Coding"
regexTest(regex,str)
regexExec(regex,str)

let regex1 = /\w+war/ // any one or more word chars.
let str1 = "Riteswar"
regexTest(regex1,str1)
regexExec(regex1,str1)

let regex2 = /\W+lol/  // one or more non word
let str2 = "@&**lol"
regexExec(regex2,str2)
regexTest(regex2,str2)

let regex3 = /\d9999/ // a digit number 
let str3 = "My number is 2999999999"
regexExec(regex3 , str3)

let regex4 = /\d+/       // one or more digit nums
regexExec(regex4 , str3)

let regex5 = /\D56l/          // non digits characs.
let str4 = "900Hello56l900"
regexExec(regex5 , str4)
regexExec( /\D+56l/ , str4) // non digit characters

// ******************

regexExec(/\s+Riteswar/ , "Hi   Riteswar") // whitespace

regexExec(/\S+Riteswar/ , "Hi      Riteswar")     // non-whitespace



// Word Boundary
regexExec(/hello234\b/ , "hello234 lol") // word boundary

// Assertions
regexExec(/r(?=i)/i , "Hi Riteswar")
regexExec(/r(?!y)/i , "Hi Rytez" )

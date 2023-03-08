
import Name from "./modules/users.js";

let n = new Name("Riteswar" , "Swargiary")
console.log(n)

import { getFullName } from "./modules/methods.js";

setTimeout(()=>{
     getFullName.call(n)
},3000)
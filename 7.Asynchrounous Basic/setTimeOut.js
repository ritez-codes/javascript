
function counter(name,num) {
     num++
     console.log(`Hi, ${name} your Increamented number is ${num}`)
}
let id = setTimeout(counter , 3000 , "riteswar" , 78)
setTimeout(()=>{console.log(id)},4000)
clearTimeout(id)


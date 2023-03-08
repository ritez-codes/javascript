
function task(time) {
    time = time*1000
    setTimeout(()=>{
        console.log("running task...")
    },time)
}
console.log("Initial :")
task(1)
console.log("end !")

const run = setTimeout(()=>{
    for(let i = 0 ; i < 100 ; i++) {
    }
},2000)
console.log(run)

// ************************************** //
// clearTimeOut
function counter(num) {
    num++
    console.log(num)
}
const id = setTimeout(counter , 2000 , 56)
clearTimeout(id)

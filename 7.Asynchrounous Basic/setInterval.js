
function printMyName(name) {
     console.log(name)
}
// let id = setInterval(printMyName , 1000 , "Riteswar")
let count = 0
let interval = setInterval(function(){
     count+=1
     console.log(count);
     if(count == 5) {
          console.log(interval)
          clearInterval(interval)
     }
     let t = new Date().toLocaleTimeString()
     console.log(t)
},2000)


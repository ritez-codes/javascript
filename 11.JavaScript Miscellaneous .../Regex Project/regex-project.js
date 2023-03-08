
//* Form Validation using RegEx...

// DOM
const $name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")

$name.addEventListener( "blur" , (e)=>{

     e.preventDefault()

     let re = /^[A-Z]([a-zA-Z0-9]){5,10}/;
     let str = $name.value

     const alert = document.querySelector(".alert")

     if (re.test(str)) {
          alert.innerHTML=""
     } else {
          alert.innerHTML = "first letter must be capital"
     }
})

email.addEventListener("blur" , (event)=>{
     event.preventDefault()

     let re = /^([a-z0-9@]){5,30}/
     
})

// for loop...
for (let i = 1 ; i<=5 ; i++) {
    console.log("hello")
}

// 
for (let i =1 ; i<=10;i++) {
    console.log("hello")
    console.log(i)
}


// odd number print
for (let i=1 ; i<=100 ; i+=2)
console.log(i)


/*
infinite loop

for(; ;){
    console.log("hello")
}
*/

// for in loop
// object
let person ={
    name : "John Doe",
    place : "USA",
    car : "Mclaran"
}

for(let [key,val] of Object.entries(person)){
    console.log(key , val)
}


//  array
let arr = ["javascript" , "python" ,"golang" ,"java"]

for(let i in arr){
    console.log(i,arr[i])
}

for(let v of arr) {
    console.log(v)
}

for(let i of arr.keys()){
    console.log(i)
}

for(let [index,val] of arr.entries()) {
    console.log(index,val)
}



// while loop
let i= 1
while (i<=10) {
    console.log(i)
    i++;
}

// do while loop
i = 0
do {
    console.log("hello" , i)
    i++
}while(i<3)



//  break and continue in loops of JS.
// printing even number
// break get out from the loops
// continue skips the particular task according to our need of condition

for (let i = 1 ; i<10 ; i++) {
    if(i%2 === 0){
        console.log(i,"is even")
        
    }else{
        continue;
        console.log(i,"is odd")
        
        
    }
}



// nested loop
loop1:
for(let i = 0; i<=3 ;i++) {
    loop2:
    for(let j=0; j<=2;j++){
        if(j == 1 && j==2){
            break;
        }
        console.log(i,j)
    }
}


let num1 = 5 ,num2 = 10

if(num1 == num2){
    console.log(`${num1} is equal to ${num2}`)
} else if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
}else {
    console.log(`${num1} is less than ${num2}`)

}



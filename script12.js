let x = 10
let y = 5

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)


let h = 900
let k = 450

console.log(h+k)
console.log(h-k)
console.log(h*k)
console.log(h/k)
console.log(h%k)


function Cal(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

Cal(10,5)
Cal(12,6)

//------------------------------------------------>

// function without parameter and without return type 

function addA(){
    console.log(8+8)
}
addA()
addA()
addA()
addA()

// function with parameter and without return type 
function addB(x,y){
    console.log(x+y)
}
addB(2,4)
addB(21,4)
addB(21,7)

// 100 showing
// 100 giving

// function with parameter and with return type 
function addC(x,y){
    return x + y
}
let q1 = addC(6,3)
console.log(q1)
console.log(q1 + q1)
console.log(q1 * 0.10)

// function declaration 
function Sub(x,y){
    return x-y
}
let qq = Sub(12,6)
console.log(qq)
console.log(qq * qq * qq)
console.log(qq * 0.10)

// function expression
let SubB = function(x,y){
    return x - y
}
let qq2 = SubB(12,4)
console.log(qq2)
console.log(qq2 + qq2)

//console.log(2 ** 3)
// arrow function
// let SubC = (x,y)=>{
//     return x - y
// }
// let qq3 = SubC(12,4)
// console.log(qq3)
// console.log(qq3 + qq3)

let SubC = (x,y) =>x - y
let qq3 = SubC(12,4)
console.log(qq3)
console.log(qq3 + qq3)



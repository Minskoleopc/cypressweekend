//  function declaration 
function add(x,y){
    return x + y
}
let q1 = add(23,4)
console.log(q1)

// function expression 

let addB = function(x,y){
    console.log(x+y)
}
let q2 = addB(12,13)
console.log(q2)

// arrow  function 

// let addC = (x,y)=>{
//     return (x+y)
// }
// let q3 = addC(12,13)
// console.log(q3)

// let addC = (x,y)=> x+y 
// let q3 = addC(12,13)
// console.log(q3)
// -------------------------------------------------

// String 

let firstName = "chinmay"
let lastName = 'deshpande'
let middleName = `shirish`


console.log(firstName)
console.log(lastName)
console.log(middleName)

let firstN = "chinmay"
let lastN = "deshpande"

// My firstName name is chinmay and lastName is deshpande

console.log("My firstName is "+firstN+" and my lastName is "+lastN)
console.log(`My firstName is ${firstN} and my lastName  is ${lastN}`)


// string 
// String - object 

let city = "pune"
// 0    1   2   3
// p    u   n   e

// string stores the value by index
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// Javascript 
// Object ---- Type 
// Type 

// Human 
// Propety  - height , weight , age , gender
// Methods  - walk() , talk()

// Vehicle - 
// Propety - color , model , regNo , type
// Method - start() ., stop()

// Bank -- 
// Property - accNo , accName , type , bal , branchCode
// Method = withdrawl() , deposit()

// Type -- object 
// String -- object ----- properties and methods
let city2 = "mumbai"
// city2 is the object of string 
console.log(typeof city2)

let a = city2.length
console.log(a)

// Method 
// Gym - 
// action -- excercise
// return -- health


let city3 = "nagpur"
let q3 = city3.toUpperCase()
console.log(q3)
console.log(typeof q3)

let city4 = "Wardha";
let q4 = city4.toLowerCase()
console.log(q4)
console.log(typeof q4)

let city5 = "nagpur"
let q5 = city5.includes('n')
let q6 = city5.includes('Pur')
console.log(q5)
console.log(typeof q5)
console.log(q6)


let city6 = "akola"
let q7 = city6.startsWith('a')
let q8 = city6.startsWith('aK')

console.log(q7)
console.log(q8)


let city7 = "jaipur"
let q9 = city7.endsWith("r")
console.log(typeof q9)
console.log(q9)

//   0   1   2   3   4   5   6    7
//   b   a   n   g   l   o   r   e

let city8 = "banglore"
let q10 = city.indexOf("n")
console.log(q10)
console.log(typeof q10)

let q11 = city8.charAt(3)
console.log(q11)























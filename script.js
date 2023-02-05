// let and const 

let a = 10
console.log(a)
a = 800
console.log(a)


// Arithmetic 

let a1 = 100
let a2 = 50

console.log(a1+a2)
console.log(a1-a2)
console.log(a1*a2)
console.log(a1/a2)
console.log(a1%a2)

let s = 10
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// functions

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,6)
Calculator(120,60)

// functions 

// function without parameter and with return type 

function Addition(){
    console.log(9+9)
}
Addition()
Addition()
Addition()
Addition()
Addition()

// function with parameter and without return type
function AdditionB(x,y){
    console.log(x+y)
}
AdditionB(1,3)
AdditionB(44,55)
AdditionB(66,77)
AdditionB(88,9)
AdditionB(55,66)

// function with parameter and with return type 

function AdditionC(x,y){
    return  x + y
}
let r1 = AdditionC(12,4)
console.log(r1)
console.log(r1+r1)
console.log(r1 * 0.10)

// Types 

// Human  ------- amol 
// Property ----- age height ,weight ,color
// Methods -- talk() , walk()


// Vehicle  -- Audi
// Property - color , model , type 
// Methods  - start() , stop()

// Bank -- ICICI
// Property  - accNo , accBal , Type
// Methods - withdrawl() , deposit()


let x = 10
console.log(x)
console.log(typeof x) // 56,0,-89,-78.8,56.7

let x2 = true
console.log(x2)
console.log(typeof x2) // true or false

let x3  = "chinmay"
console.log(typeof x3) // " " , "A, " ", "123", "-123","###","A a12 &"
console.log(x3)

console.log(typeof 10) // number
console.log(typeof '10') // string

// comparision operator
// < , > , <= ,>= , != ,== , === , !==
// == , != ---- values
// === , !==  -- values and types

console.log(4 == 1) // False
console.log(4 > 1) // True
console.log(4 < 11) // True
console.log(4 >= 11) //False
console.log(4 >= 4) // True
console.log(5 <= 4)  //False
console.log(5 <= 5) // True

console.log(5 === 5) // True
console.log(5 !== 5) //False
console.log(5 !== '5') // True
console.log(5 === '5') // False
console.log(5 != '5') // False
console.log(5 == '5') // True










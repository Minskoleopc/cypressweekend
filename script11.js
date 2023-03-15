
// 3 ways to define the variable in javascript 

// let

// const

// var

// assignment 
//let and var


let a = 10
a = 100
console.log(a)

var b = 20
b = 900
console.log(b)

const c = 9000
//c = 90000


/*
    Difference in terms of scope
*/

// const and let are blocked scope 
// var is function scope 

// program 1
{
    let x1 = 900
    console.log(x1)
}
//console.log(x1)


// program 2

let i = 10
{
    let i = 90
    console.log(i) //90
}
console.log(i) // 10

// program 3

let i2 = 10
{
    console.log(i2) ///10
    i2 = 100
    console.log(i2) // 100
}
console.log(i2) //100

 // program 4

 let i3 = 10
{
    let i3 = 10
    console.log(i3)  // 10
    i3 = 99
    console.log(i3)  // 99
}
console.log(i3)  // 10

// const is also blocked scope

const ii = 0
console.log(ii)

{
    const yyy = 999
    console.log(yyy)
}
//console.log(yyy)


const j = 10

{
    console.log(j) //10
    j = 900
    console.log(j) //
}
console.log(j)


var kk = 100
function add(){
    console.log(k)
    console.log('added')

}

// class Student {

//     firstName = "chinmay"
//     lastName = "deshpande"

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher  extends Student{  
//     salary = 1000

// }

// let chinmay = new Teacher()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.salary)
// chinmay.displayName()


// program 2

// class Student {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 1000
// }
// let chinmay = new Teacher("chinmay","deshpande")
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.salary)
// chinmay.displayName()


// program 3
// class Student {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     constructor(fn,ln,sl){
//         super(fn,ln)
//         this.salary = sl
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let ChinmayR = new Teacher("chinmayT","DeshpandeD",34000)

// console.log(ChinmayR.firstName)
// console.log(ChinmayR.lastName)
// console.log(ChinmayR.salary)

// ChinmayR.displayName()
// ChinmayR.displaySalary()



// program 4


class GrandFather {
    constructor(fn, ln){
        this.firstName = fn 
        this.lastName = ln 
    }
    displaGN(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displaFN(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displaSN(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sname)
console.log(chinmay.fname)


chinmay.displaGN()
chinmay.displaSN()
chinmay.displaFN()























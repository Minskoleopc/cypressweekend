// // object literal 

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     skils:["python","javascript"]
// }
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12,
//     skills:["python3","django","c#"]
// }

// // retrive (dot notation and bracket notation)
// console.log(chinmay.firstName)
// console.log(chinmay['firstName'])

// // add (dot notation and bracket notation)
// chinmay.city = "pune"
// chinmay['language'] = "hindi"
// // update (dot notation and bracket notation)

// chinmay.firstName = "chinmay"
// chinmay['lastName'] = "dani"

// // delete(dot notation and bracket notation)

// delete chinmay.firstName
// delete chinmay.lastName

// // templates

// // 100 - 400 lines not feasible DRY


// class PersonA {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     rollNo = 34
//     skills = ["python", "html", "css"]
// }

// let amolA = new PersonA()
// let chinmayA = new PersonA()

// console.log(amolA)
// console.log(chinmayA)

// amolA.firstName = "amol"
// amolA.lastName  = "amolb"
// amolA.age = 34
// amolA.skills = ["html","css","javascript"]



class PersonB {
    constructor(fn,ln,rollNo ,age){
        this.firstName = fn
        this.lastName  = ln 
        this.rollNo = rollNo
        this.age = age
    }
}

let amolB  = new PersonB("amolB","raoB",23,34)
let amitB  = new PersonB("amitB","raoB",27,31)

console.log(amolB)
console.log(amitB)

class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    setRollNumber(rn){
        this.rollNumber = rn
    }

    setAge(ag){
        this.age = ag
    }
}

let amolC = new PersonC()
console.log(amolC)
amolC.setFirstName("amol")
amolC.setLastName("rao")
amolC.setRollNumber(23)
amolC.setAge(12)

console.log(amolC)

let firstName = "chinmay"

let firstNme = new String("deshpande")
console.log(firstNme)

let a = new Array([33,44,55])
console.log(a)





// program 1
class Person {
    firstName = "chinmay"
    lastName = "deshpande"
    age = 30

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

let chinmay = new Person()
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.age)
chinmay.displayName()

let amol = new Person()
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
amol.displayName()

amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 34
console.log(amol)


// program 2 
// constructor to set the class  property values at the time objection

// class PersonB {
//     constructor(fn,ln,age){
//         this.firstName = fn
//         this.lastName = ln 
//         this.age = age
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let samay = new PersonB("samay","dani",23)
// let sham = new PersonB("sham","deshmukh",39)

// samay.displayName()
// sham.displayName()


// program 3


class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
}

let amolC = new PersonC()
console.log(amolC)

amolC.setFirstName("amol")
amolC.setLastName("rao")
amolC.setAge(23)
console.log(amolC)


// program4 

// let info = {
//     firstName:"chinmay"
// }

// console.log(info.firstName)
// info.firstName = "sarika"
// info.city = "pune"


class PersonD {


    set setF(fn){
        this.firstName = fn
    }
    set setL(ln){
        this.lastName = ln
    }
    set setA(ag){
        this.age = ag
    }

    
    get setF(){
        return this.firstName 
    }
    get setL(){
        return this.lastName 
    }
    get setA(){
        return this.age
    }



}

let amolE = new PersonD()
console.log(amolE)

amolE.setA  = 23
amolE.setF = "amol"
amolE.setL = "rao"
console.log(amolE)

console.log(amolE.setA)
console.log(amolE.setF)
console.log(amolE.setL)


























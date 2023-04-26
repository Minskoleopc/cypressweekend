
// object 

// object literal 

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     display:function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// amol.display()

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }
// chinmay.display()


// program1 

// function Person(fn,ln){
//     this.firstName = fn
//     this.lastName = ln
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amolA = new Person("amolA","raoA")
// let chinmayA = new Person("chinmayA","deshpandeA")

// // amolA.display()
// // chinmayA.display()

// console.log(amolA)
// console.log(chinmayA)


// // Every object  has one __proto__ === Parent.protype
// console.log(amolA.__proto__ === Person.prototype)
// console.log(chinmayA.__proto__ === Person.prototype)

// console.log(amolA instanceof Person)
// console.log(chinmayA instanceof Person)

// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// Person.prototype.country = "India"

// amolA.display()
// chinmayA.display()

// console.log(amolA.country)
// console.log(chinmayA.country)

// console.log(amolA.hasOwnProperty('country'))
// console.log(amolA.hasOwnProperty('firstName'))


// Es6 class 


class PersonB {
    //country = "india"
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
        // this.display  = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amar = new PersonB("amar","singh")
let chika = new PersonB("chika","dani")

console.log(amar)
console.log(chika)

amar.display()
chika.display()

console.log(amar.country)
console.log(chika.country)

// Program 4
let rr = Object.create({})
console.log(rr)


let obj = {
    init:function(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName
    },
    display:function(){
        console.log(this.firstName+ this.lastName)
    }
}

let sarika = Object.create(obj)
console.log(sarika)

sarika.init("sarika","pansare")
console.log(sarika)
sarika.display()













// // Protype inheritance

// // object literal 

// // let amol = {
// //     firstName:"amol",
// //     lastName:"rao",
// //     display:function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }
// // let chinmay = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     display:function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }
// // amol.display()
// // chinmay.display()



// function Person(fn,ln){
//     this.firstName = fn
//     this.lastName = ln 
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amolB = new Person("amol","rao")
// let chinmayB = new Person("chinmay","deshpande")
// console.log(amolB)
// console.log(chinmayB)

// // amolB.display()
// // chinmayB.display()

// // Prototype inheritance 

// // Every object has one __proto__ === Parent.protoype

// console.log(amolB.__proto__ === Person.prototype)
// console.log(chinmayB.__proto__ === Person.prototype)

// console.log(chinmayB instanceof Person)
// console.log(amolB instanceof Person)

// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// Person.prototype.country = "India"
// amolB.display()
// chinmayB.display()

// console.log(amolB.firstName)
// console.log(amolB.lastName)
// console.log(amolB.country)

// console.log(amolB.hasOwnProperty('firstName'))
// console.log(amolB.hasOwnProperty('country'))

// // array 
// let names = ["chinmay","shirish","ram"]
// console.log(names)
// console.log(names.__proto__ === Array.prototype)
// names.push("ninad")
// Array.prototype.greet = function(){
//     console.log('hello')
// }

// names.greet()



// program 2 Es6 class


class PersonD {
    // how to get common properties using Es6
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amolBB = new PersonD("amolB","raoB")
let sarikaBB = new PersonD("sarikaB","pansareB")

console.log(amolBB)
console.log(sarikaBB)

amolBB.display()
sarikaBB.display()




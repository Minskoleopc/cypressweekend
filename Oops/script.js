let  amol = {
    firstName:"amol",
    lastName:"rao",
    age:22,
    skills:["python","javascript"]
}

// retrive  (dot notation and bracket notation)
console.log(amol.firstName)
console.log(amol['firstName'])
// update (dot notation and bracket notation)
amol.firstName = "tanmay"
amol['firstName'] = "deshpande"
// add (dot notation and bracket notation)
amol.city = "pune"
amol['language'] = "marathi"
// delete (dot notation and bracket notation)
delete amol.firstName
delete amol['firstName']


// Object literal
let chinmay =  {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    skills:["python","javascript","cpp","Es6"]
}

amol = {
    firstName:"amol",
    lastName:"rao",
    age:22,
    skills:["python","javascript"]
}

// 500 * 4 == 2000
// function constuctor


function Person(fn,ln,ag,sks){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag
    this.sks = sks
}

let amol2 = new Person("amol2","rao2",34,['c#',"html"])
let chinmay2 = new Person("chinmay2","deshpande2",32,['python',"html"])
console.log(amol2)

chinmay2.city = "mumbai"
console.log(chinmay2)

let Vehicle = function(color,type){
    this.color = color
    this.type = type
}

let audi = new Vehicle("red","sedane")
let bmw  = new Vehicle('black',"SUV")


// Es6 class 
class PersonB{
    constructor(fn,ln,age,skills){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.skills = skills

    }
}
let amol3 = new PersonB("amol3","rao3",12,["html","css"])
console.log(amol3)

let VehicleB = class {
    constructor(type,color){
        this.type = type    
        this.color = color
    }
}
let audi2 = new VehicleB("sedane","red")

// Object.Create()

let amol5 = Object.create({})
console.log(amol5)

amol5.firstName = "amol5"
amol5.lastName = "rao5"
amol5.age = "15"
amol5.skills = ["python3","css3"]












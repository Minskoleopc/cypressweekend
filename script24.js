
// variables 

// arithmetic 

// comparison 

// logical 

// consitional 

// switch 

// loops

// string 

// array 

// object s

// userdefined 

// Map() and Set()


let setA = new Set()
console.log(setA)


// Object  - properties and methods 

setA.add("amol")
setA.add("amit")
setA.add("abhijeet")
setA.add("amit")
console.log(setA)


let r1 = setA.size
console.log(r1)

let r2 = setA.has('amol')
console.log(r2)

let r3 = setA.delete("amol")
console.log(r3)

// setA.clear()
// console.log(setA)

setA.forEach(function(el){
    console.log(el)
})

// values() , keys() , entries()
let setB = new Set(["ninad","vijeet","ps","sakthi","ps"])
console.log(setB)

// Map()

// Map and Object 
// Map it can have different data types as keys
// Object --- it can hold only string


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     1:"admin"
// }

// console.log(info)


let mapA = new Map()
console.log(mapA)

mapA.set(1,'admin')
mapA.set(2,'manager')
mapA.set(3,'support')
mapA.set(4,'hr')
mapA.set(true,"new")

console.log(mapA)


let s1 = mapA.get(2)
console.log(s1)

// mapA.delete(3)
// console.log(mapA)

// mapA.clear()
// console.log(mapA)

let s2 = mapA.size
console.log(s2)


mapA.forEach(function(v,k){
    console.log(v,k)
})

for(let key of mapA.keys()){
    console.log(key)
}

for(let val of mapA.values()){
    console.log(val)
}

for(let [k,v] of mapA.entries()){
    console.log(k,v)
}

//console.log(mapA.entries())


let mapB = new Map(
    [
        [1,'chinmay'],
        [4,'poorva'],
        [2,'ram'],
        [3,'ravi'],
    ]
)


console.log(mapB)


















// let firstName = "chinmay"
// let isMarried = false
// let names = ["apple","banana","grapes"]
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// class Person {

//     firstName = "chinmay"
//     lastName  = "deshpande"

// }

// let a = new Person()

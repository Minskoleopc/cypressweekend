// set() and map()

let setA = new Set()
console.log(setA)

// Object 
// Object properties and method

setA.add("amit")
setA.add("amol")
setA.add("sumit")
setA.add("amol")
console.log(setA)

// property
console.log(setA.size)


// has()
let a = setA.has('amit')
console.log(a)

// setA.clear()
// console.log(setA)

setA.delete('amit')
console.log(setA)

setA.forEach(function(el){
    console.log(el)
})

console.log(setA.entries())
console.log(setA.keys())
console.log(setA.values())

let setB = new Set(["amol","ram","rakesh","satish","ram"])
console.log(setB)

// Map --

// property - value 

// map vs object 

// map -- keys can different datatypes
// object -- string

// let info2 = {
//     firstName:"chinmay",
//     1:"admin"
// }

let mapA = new Map()

// set()
mapA.set(1,'admin')
mapA.set(2,'manager')
mapA.set(3,'support')
mapA.set(true,'office')
mapA.set("city",'pune')
console.log(mapA)

// get()
//console.log(mapA.get(1))

// has()
// let q1  = mapA.has(7)
// console.log(q1)

// mapA.delete(2)
// console.log(mapA)

// mapA.clear()
// console.log(mapA)


for(let key of mapA.keys()){
    console.log(key)
}
for(let v of mapA.values()){
    console.log(v)
}

for(let a of mapA.entries()){
    console.log(a)
}










//let info = ["chinmay","deshpande",32,27]
// //             0         1         2       3
// let names = ["chinmay","poorva","sarika","ram"]
// // retrive 
// console.log(names[2])
// // udapte
// names[2] = "ps"
// // add
// names.push("sham")
// names.unshift("ravi")
// // delete
// names.pop()
// names.shift()
// names.splice(2,1)


let info = {
    // property:value
    // key :value
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    rollNo:27
}

// object does not stores the value by index
//console.log(info[0])

// retrive  (dot notation and bracket notation)
console.log(info.firstName)
console.log(info['firstName'])
// update (dot notation and bracket notation)
info.firstName = "tanmay"
info['firstName'] = "mayur"
// add (dot notation and bracket notation)
info.city = "pune"
info['language'] = "marathi"
console.log(info)

// delete(dot notation and bracket notation)
delete info.city
delete info['language']
console.log(info)


// ------------------

let vehicle = {
    color:"red",
    type:"sedane"
}

// console.log(vehicle.color)
// vehicle.type = "SUV";
// vehicle.number = 123
// delete vehicle.type

// console.log(vehicle['color'])
// vehicle['type'] = "SUV"
// vehicle['capacity'] = "123"
// delete vehicle['type']


let cities = ["pune","mumbai","gao","banglore"]
for(let i = 0 ; i < cities.length ; i++){
    console.log(cities[i])
}


let animal = {
    namee:"tiger",
    type:"C",
    legs:4
}

// dot notation will not work inside loop 
for(let key in animal){
    console.log(key,animal[key])
}










let numbers = [11,22,33,44,55,66,77]
// [13,24,35,46,57,68,79]

// let listA = numbers.map(function(el,index,arr){
//     console.log(el,index,arr)
//     return el + 2
// })
// console.log(listA)

// filter
//[55,66,77]
// let numberB = numbers.filter(function(el,index,arr){
//     return el > 40
// })
// console.log(numberB)

// reduce()
// let marks = [11,22,33]
// let q1 = marks.reduce(function(acc,el,index,arr){
//     return acc + el // 66
// },0)
// console.log(q1)

// forEach()

// let names = ["chinmay","sarika","poorva","ram","satish"]
// names.forEach(function(el,index,arr){
//     console.log("welcome "+ el)
// })


// map() , filter() , reduce() , forEach()


let numbersB = [55,66,12,2,33,44,55,666,667]
//[66,666,667]
let r22 = numbersB.filter(function(el,index,arr){
    return el > 60
})
console.log(r22)

let r23 = numbersB.find(function(el,index,arr){
    return el > 60
})
console.log(r23)


let r24 = numbersB.findIndex(function(el,index,arr){
    return el > 60
})
console.log(r24)

numbersB = [55,66,12,2,33,-44,55,666,667]
let q2 = numbersB.every(function(el,index,arr){
    return el > 1
})
console.log(q2)

let q23 = numbersB.some(function(el,index,arr){
    return el > 800
})
console.log(q23)
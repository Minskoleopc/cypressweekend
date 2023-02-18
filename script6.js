
///             0          1       2        3
let names = ["chinmay", "ram", "satish", "ramesh"]

// Object 
// Property and method
// Method - action and return 


// property 
let q1 = names.length
console.log(q1)

// methods
names = ["chinmay", "ram", "satish", "ramesh"]
let q2 = names.push("sarika")
console.log(q2)
console.log(names)

//shift()
let q3 = names.unshift("amol")
console.log(q3)
console.log(names)

// pop()
let q4 = names.pop()
console.log(q4)
console.log(names)

// shift()

let q5 = names.shift()
console.log(q5)
console.log(names)

// map() , filter() , forEach() , reduce()
// some() , every() , find() , findIndex()



let birthYear = [1989,1990,1991,1992]
let ages = [] // [34]
// [34,33,31,30]
for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(2023 - birthYear[i])
    let g = 2023 - birthYear[i]
    ages.push(g)
}
console.log(ages)


// map()
//[1989,1990,1991,1992]
let q6 = birthYear.map(function(el, index ,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q6)

let numbers = [22,33,44,55,66]
let q7 = numbers.map(function(el,index,arr){
    return el * 10
})
console.log(q7)

// filter()


let numbersB  = [44,55,66,7,33,44,55,66,77]
// [55,66,55,66,77]
let above50 = [] // 55
for(let i = 0 ; i < numbersB .length ; i++){
    // console.log(i)
    // console.log(numbersB[i])
    if(numbersB[i] > 50){
        above50.push(numbersB[i])
    }
}
console.log(above50)
let q8 = numbersB.filter(function(el,index,arr){
    return el > 50
})
console.log(q8)

let evenOdd = [22,33,44,55,33,44,55,66,77,88]
let q9 = evenOdd.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(q9)

// reduce()
let marks = [11,22,33] //66
let total = 0

for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)
    // console.log(marks[i])
    total = marks[i]+ total

    //        11    +  0     ====> 11
    //        22    +  11    ====> 33
    //        33    +  33    ====> 66

}
console.log(total)
let q10 = marks.reduce(function(acc,el,index,arr){
    return acc + el // acc ==> 66
},5)
console.log(q10)
































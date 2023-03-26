// push() , pop() , unshift() , shit(), includes() ,indexOf() 
// concat() , at()

// map() , filter(), reduce() , shift() , unshift() ,find(), findIndex()
// some() , every()


let numbers = [1,2,3,4,5,6,7,8,9,10]

// [2,4,6,8,10,12,14,16,18,19,20]
let q1 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q1)

// numbers = [1,2,3,4,5,6,7,8,9,10]
let q2 = numbers.filter(function(el,index,arr){
    return el > 5
})
console.log(q2)

numbers = [1,2,3,4,5,6,7,8,9,10]

let q3 = numbers.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q3)

let names = ["chinmay","ram","shashank","sameer","satish"]
names.forEach(function(el,index,arr){
    console.log('welcome' +" "+ el)
})


let marks = [55,66,77,44,55]

// [66,77]
let q6 = marks.filter(function(el){
    return el > 60
})
console.log(q6)

let q7 = marks.find(function(el){
    return el > 60
})
console.log(q7)

let q8 = marks.findIndex(function(el){
    return el > 60
})
console.log(q8)

marks = [55,66,77,44,55]


let q9 = marks.every(function(el){
    return el > 50
})
console.log(q9)



let q10 = marks.some(function(el){
    return el > 500
})
console.log(q10)












// slice()
//               0         1          2            3         4
let country = ["India","Pakistan","Bangladesh","Srilanka","Japan"]
//               -5       -4       -3             -2          -1

// console.log(country.splice(1,4))
console.log(country.slice(1))
console.log(country.slice(-3))
console.log(country.slice(-3,-1))
console.log(country.slice(-3,4))
console.log(country.slice(1,-1))
console.log(country.slice(-1,-3))




// splice()

//               0          1         2           3         4
 country = ["India","Pakistan","Bangladesh","Srilanka","Japan"]

// country.pop()
// country.shift()
//country.splice(startIndex,numberOFelementToDeleted)

// let a = country.splice(1,1)
// console.log(a)
// console.log(country)

// let b = country.splice(1,3) // ["Pakistan","Bangladesh","Srilanka"]
// console.log(b)
// console.log(country)


// let b = country.splice(1,3,"aa","bb","cc") 
// console.log(b)
// console.log(country)


// fill()
//              0   1  2  3  4  5 6  7
// let numbersA = [55,66,77,88,99,33,55,66]
// let q14 = numbersA.fill('100',2,6) // lastIndex not included
// console.log(q14)


// reverse()

// let vegetables = ["onion","potato","tomato"]
// let q13 = vegetables.reverse()
// console.log(q13)

// join()

// let info = ["chinmay","deshpande",7709192441]
// let q11 = info.join("-")
// console.log(q11)

// sort()

// let city = ["pune","banglore","chennia","mumbai"]
// let q11 = city.sort()
// console.log(q11)
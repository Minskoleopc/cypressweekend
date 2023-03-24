
let x = 10
console.log(x)

let names = ["chinmay",12,true,]

//             0         1        2       3        4
let fruits = ["apple","mango","banana","papaya","chikoo"]
console.log(fruits[0])
console.log(fruits[2])

for(let i = 0 ; i < 5; i++){ //1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 , 1 , 2 , 3  4
    console.log(fruits[i])
    // i -- 0
    // i ---1
    // i ---2
    // i --- 3
    // i --- 4
}

for(let i = fruits.length -1 ; i >= 0 ; i-- ){
   // console.log(i)
    console.log(fruits[i])
}


// Javascript ---- js object 

// object -- property and methods

//methods 
// action 
// return type

//            0        1          2         3
let city = ["pune","banglore","kolkata","chennai"]
let q = city.push("nagpur")
console.log(q)
console.log(city)

let q2 = city.unshift("wardha")
console.log(q2)
console.log(city)

let q3 = city.pop()
console.log(q3)
console.log(city)

let q4  = city.shift()
console.log(q4)
console.log(city)


// push() pop() shift() unshift()
// includes() , indexOf() , reverse() , join(), concat(), at()

              
let country = ["India","bangladesh","srilanka","china"]
let q5 = country.includes('India')
console.log(q5)

let q6 = country.indexOf('India')
let q7 = country.indexOf('Indiai')
console.log(q6)
console.log(q7)

let q8 = country.reverse()
console.log(country)
console.log(q8)


let q9 = country.join("")
console.log(q9)

let numA = [12,13,14]
let numB = [44,55,66]

let numC = numA.concat(numB)
let numD = numB.concat(numA)
console.log(numC)
console.log(numD)

country = ["India","bangladesh","srilanka","china"]
let q66 = country.at(2)
console.log(q66)


// filter() , reduce(), map() , forEach() , find() , findIndex() , every() , some()

let birthYear = [1989,1990,1991,1992]
// [34,33,32,31]
let ages = [] // [34,33,32,31]
for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let a = 2023 - birthYear[i]
    ages.push(a)
}
console.log(ages)

let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})

console.log(q1)


let tables = [1,2,3,4,5,6,7,8,9,10]
// [2,,4,6,8,9,10,12,14,16,18,20]
let q22 = tables.map(function(el){
    return el * 2
})
console.log(q22)


// program 2
let marks  = [44,55,66,77,33,88,99,44]
//[66,77,88,99]
let above60 = [] // [66]
for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)
    // console.log(marks[i])
    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)

// filter
let q333 = marks.filter(function(el){
    return el > 60
})
console.log(q333)


// program 3

let numbers = [11,22,33]
let total = 0

for(let i = 0 ; i < numbers.length ; i++){
    // console.log(i)
    // console.log(numbers[i])

    total = total + numbers[i]
    //        0    +  11   ======> 11
    //        11   +  22   ======> 33
    //        33  +  33    ======>  66
}
console.log(total)




















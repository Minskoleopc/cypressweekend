
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




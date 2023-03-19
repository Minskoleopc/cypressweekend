let firstName = 'chinmay'
let lastName  ="deshpande"
let middleName = "shirish"


let firstN = "chinmay"
let lastN = "deshpande"

console.log(firstN + lastN)
console.log(`${firstN}${lastN}`)


// Object 
// properties and methods
// methods have action and return 

// String  (Methods)

let fruits = "apple"
let q1 = fruits.length
console.log(q1)


// toUpperCase()

let fruit = "banana"
let q2 = fruit.toUpperCase()
console.log(q2)

// toLowerCase()

let city = "Pune"
let q3 = city.toLowerCase()
console.log(q3)

// Method chaining 
let city2 = "nagpur" 
let q4 = city2.toUpperCase().toLowerCase().length
console.log(q4)


// indexOf()
let city3 = "wardha"
let q5 = city3.indexOf('r')
let q6 = city3.indexOf('D')
console.log(q6)
console.log(q5)

// startsWith()

let q7 = city3.startsWith("wa")
console.log(q7)
let q8 = city3.startsWith("w")
console.log(q8)

// EndsWith()

let q9 = city3.endsWith("ha")
console.log(q9)
let q10 = city3.endsWith("a")
console.log(q9)
console.log(q10)

// charAt()
let city4 = "Jaipur"
let q11 = city4.charAt(2)
console.log(q11)

// trim()

let city5 =  " mumbai "
// console.log(city5.length)
// let q12 = city5.trim()
// console.log(q12)
// console.log(q12.length)

// trimStart()

let q13 = city5.trimStart()
console.log(q13)
console.log(q13.length)


// trimEnd()
let q14 = city5.trimStart()
console.log(q14)
console.log(q14.length)

// split()

let fullName = "chinmay shirish deshpande"
let q15 = fullName.split(" ")
let q16 = fullName.split("a")
//["chinmay","shirish","deshpande"]
//"chinm","y shirish deshp","nde"
console.log(q15)
console.log(q16)

// includes()

let city7 = "banglore"
let q17 = city7.includes('g')
let q18 = city7.includes('O')
console.log(q17)
console.log(q18)

// replace()

let i = "I am learning javascript"
let q19 = i.replace("javascript","python")
console.log(q19)

// slice()

//  0    1    2    3      4     5   6    7   8   9
//  c    h    a    n      d     r   a    p   u   r
// -10  -9   -8   -7     -6   -5   -4   -3   -2  -1

let city9 = "chandrapur"
//city9.slice(startIndex,endIndex(not included))

console.log(city9.slice(2))
console.log(city9.slice(2,8))
console.log(city9.slice(3,7))
console.log(city9.slice(-9,-3))
console.log(city9.slice(-9,9))
console.log(city9.slice(1,-3))
console.log(city9.slice(-1,6))
// concat()
let c = "abc"
let d = "cde"

console.log(c.concat(d))
console.log(d.concat(c))

// for loop for string 







































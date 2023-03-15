let a1 = [11,22,33,44,55,66]
let q3 = a1.at(3)
console.log(q3)

let q22 = a1.reverse()
console.log(a1)
console.log(q22)


//              0        1       2        3         4    
let fruits = ["apple","mango","banana","grapes","cherry"]
//              -5       -4     -3        -2        -1
//fruits.slice(startIndex,EndIndex(not included))
let q23= fruits.slice(1)
console.log(fruits.slice(1,fruits.length-1))
console.log(fruits.slice(1,4))
console.log(fruits.slice(-3))
console.log(fruits.slice(0,-3))
console.log(fruits.slice(-5,-1))
console.log(fruits.slice(-1,-4))

//                    0         1          2           3
let vegetables = ["cabbage","carrot","cauliflower","ladyfinger"]
// vegetables.pop()
// vegetables.shift()
//vegetables.splice(startIndex,numberOfelementTobeDeleted)
vegetables.splice(2,2)
console.log(vegetables)

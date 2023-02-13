// 23 methods 
// length 

// Js object 
// Object 
// Property 
// Methods

//             0          1       2       3     4
let names = ["chinmay","sarika","satish","ram","raj"]
//            0          1           2
let info = ["chinmay","deshpande",7709192441]
console.log(info[0])

// property (length)
let q1 = names.length
console.log(q1)

for(let i = 0 ; i < q1 ; i++){
    console.log(i) // index
    console.log(names[i]) // element of array
    // i  ===> 0
    // i  ===> 1
    // i  ===> 2
    // i  ===> 3
    // i  ==== 4
}

// print all element of array
//            0        1        2          3       4
let city = ["pune","nagpur","banglore","kolkata","wardha"]
for(let i = 0 ; i < city.length ; i++){
    //console.log(i)
    console.log(city[i])
}

// print all element in reverse
for(let i = city.length -1 ;i >= 0 ; i--){
    //console.log(i)
    console.log(city[i])
}


// Array object 

// Object - property and methods
// property - length 

// method
// Gym -- 
// action -- excercise
// return -- health 


// push()
// action - to add the element last
// return  - new lenght of array


let  fruits = ["apple","mango","banana","grapes"]
let q22 = fruits.push("papaya")
console.log(fruits)
console.log(q22)

// unshift()
// action - to add the element at first 
// return  new length of array
let q44 = fruits.unshift('berry')
console.log(q44)
console.log(fruits)

// pop()
//action - removes the element from last 
// return - same element 
//[ 'berry', 'apple', 'mango', 'banana', 'grapes', 'papaya' ]

let q55 = fruits.pop()
console.log(q55)
console.log(fruits)

// shift()
// action removes the first element 
// return  - same

let q66 = fruits.shift()
console.log(q66)
console.log(fruits)



















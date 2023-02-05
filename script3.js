// Logical operator

// AND && 

// True     &&      True  =======>  True
// False    &&      True  =======>  False
// True     &&      False ========> False 
// False    &&      False ========> False

console.log(8 !== '8' && 7 == 7)
console.log(8 === '8' && 7 == 7)
console.log(8 !== '8' && 7 != 7)
console.log(8 === '8' && 7 === '7')


// OR  ||

// True     ||      True  =======> True
// False    ||      True  =======> True
// True     ||      False =======> True
// False    ||      False =======> False

console.log(8 !== '8' || 7 == 7)
console.log(8 === '8' || 7 == 7)
console.log(8 !== '8' || 7 != 7)
console.log(8 === '8' || 7 === '7')


// NOT 
// True  - False
// False - True

console.log(!(7 !== '7'))
console.log(!(7 === '7'))


// Truthy value and Falsy 

// Falsy  => 0 , undefined , null , NaN , "", 9 == 8 , false
// Truthy => "1", 11,-34,"chinmay"," ", 9 ==9 , true , [] , {}

if ({}) {
    console.log('hello')
}
else {
    console.log('bye')
}

// conditional statements

// input ----- multiple outcomes 

//numT > 0 && numT <= 5   ====> 5 % discount
//numT > 5 && numT <= 10  ====> 10 % discount
//numT > 10               ====> 20 % discount

let numT = -17

// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }
// if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }
// if(numT > 10){
//     console.log("20 % discount")
// }

// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }
// else if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }
// else if(numT > 10){
//     console.log("20 % discount")
// }
// else {
//     console.log('Incorrect input')
// }

//let marks = 99
// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }

// let marks = 99
// if(marks > 90){
//     console.log('Grade A')
// }
// else if(marks > 75){
//     console.log('Grade B')
// }
// else if(marks > 65){
//     console.log('Grade C')
// }


let a = 10
let b = 500

// if(a > b ){
//     console.log('a is greater')
// }
// else {
//     console.log('b is greater')
// }


// Tenary operator
a > b ? console.log('a is greater') : console.log('b is greater')
let age = 17
let q1 = age >= 18 ? "can drive" : "cannot drive"
console.log(q1)


// Switch case with break statement

let city = "bhopal"
// switch(city){
//     case 'pune':
//         console.log('MH')
//     case 'jaipur':
//         console.log('RJ')
//     case 'indore':
//         console.log('MP')
//     case 'kanpur':
//         console.log('UP')
//     default:
//         console.log('incorrect cityname')
// }

// switch (city) {
//     case 'pune':
//         console.log('MH')
//         break
//     case 'jaipur':
//         console.log('RJ')
//         break
//     case 'indore':
//         console.log('MP')
//         break
//     case 'kanpur':
//         console.log('UP')
//         break
//     default:
//         console.log('incorrect cityname')
// }




switch (city) {
    case 'pune':
    case 'nagpur':
        console.log('MH')
        break
    case 'jaipur':
    case 'udaipur':
        console.log('RJ')
        break
    case 'indore':
    case 'bhopal':
        console.log('MP')
        break
    case 'kanpur':
    case 'varanasi':
        console.log('UP')
        break
    default:
        console.log('incorrect cityname')
}
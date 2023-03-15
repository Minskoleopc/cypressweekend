
// True && True =====> True
// True && False =====> False
// False && True =====> False
// False && False =====> False

console.log(5 == 5 && 6 == 6)
console.log(5 != 5 && 6 == 6)
console.log(5 == 5 && 6 != 6)
console.log(5 != 5 && 6 != 6)


// True || True     =====> True
// True || False    =====> True
// False || True    =====> True
// False || False   =====> False

console.log(5 == 5 || 6 == 6)
console.log(5 != 5 || 6 == 6)
console.log(5 == 5 || 6 != 6)
console.log(5 != 5 || 6 != 6)


//----------------------------------
console.log(null || "hello")
console.log(0 || undefined)
console.log(2 || undefined)

let age = 11
let sg = age >= 18 || 0
if(sg){
    console.log("can drive")
}
else {
    console.log("cannot drive")
}

// AND operator short circuit

let a = 0 && "Fail"
console.log(a)
console.log('GoodBye' && 100 && undefined && "Ram")


function add(){
    console.log('b');
    return false
}

if(add()){
    console.log("Hello")
}
let qq2 = add() && "Hello"


// nullish coalesing operator ??
// undefined 
let aa = false ?? "hello"
console.log(aa)
let bb = null ?? "hello"
console.log(bb)
let cc = null ?? "bye"
console.log(cc)
let dd= undefined ?? null
console.log(dd)

// optional operator

let info  = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34,
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}
let j = info?.parent?.mother

if(j){
    console.log("hello")
}
else {
    console.log("bye")
}

























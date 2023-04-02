// Object 

let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 13,
    rollNo: 23
}

//console.log(info[0])

for (let key in info) {
    console.log(key, info[key])
}


for (let k of Object.keys(info)) {
    console.log(k)
}

for (let v of Object.values(info)) {
    console.log(v)
}

for (let [k, v] of Object.entries(info)) {
    console.log(k, v)
}


//--------------------------------------------------------


let names = ["chinmay", "sarika", "poorva"]

// let a = names[0]
// let b = names[1]
// let c = names[2]

// console.log(a)
// console.log(b)
// console.log(c)
let [x, y, z] = names
console.log(x)
console.log(y)
console.log(z)


let fruits = ["apple", "banana", "grapes"]
let [a, , b] = fruits
console.log(a)
console.log(b)


// program 2
let numbers = [[11, 22, 33], [44, 55, 66]]
let [[x1, x2, x3], [x4, x5, x6]] = numbers
console.log(x1)
console.log(x5)


// program 3

let info2 = {
    firstName: "chinmay",
    lastName: "deshpande"
}

// let r1 = info.firstName
// let r2 = info.lastName
// console.log(r1)
// console.log(r2)

let { firstName: fn, lastName: ln } = info2
// console.log(firstName)
// console.log(lastName)
console.log(fn)
console.log(ln)


let family = {
    fullName: "chinmay deshpande",
    parent: {
        mother: "kanchan deshpande",
        father: "shirsh deshpande"
    }

}
let { fullName: cc, parent: aa } = family
let { father: ff, mother: mm } = aa
console.log(cc)
console.log(ff)
console.log(mm)



// program 5

let infoE = {
    fullName: "chinmay deshpande",
    parent: {
        mother: "kanchan deshpande",
        father: "shirsh deshpande"
    },
    skills: ['python', "css", "html"]
}

let { fullName, parent: { mother, father }, skills: [a1, b1, c1] } = infoE
console.log(c1)


let infoF = [
    {

        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"poorva",
        lastName:"vyas"
    }

]

let [ {firstName:fn1,lastName:ln1} ,{firstName:fn2,lastName:ln2}] = infoF

console.log(fn1)
console.log(ln1)
console.log(fn2)
console.log(ln2)


let a1111 = new Array([22,33,44]);
console.log(a1111)
























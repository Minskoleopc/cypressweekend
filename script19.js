let students = [
    {
        fullName: "chinmay deshpande",
        age: 33,
        skills: ["python", "html", "css", "javascript", "html5"],
        city: "pune"

    },
    {
        fullName: "poorva vyas",
        age: 27,
        skills: ["python", "django", "css3", "html5", "c#"],
        city: "ujjain"

    },
    {
        fullName: "amol rao",
        age: 32,
        skills: ["html5", "css3", "sql"],
        city: "nagpur"

    },
    {
        fullName: "ram dani",
        age: 30,
        skills: ["python", "html"],
        city: "pune"

    }
]

// name of every person 


// students.forEach(function(el){
//     console.log(el.fullName)
//     console.log(el['fullName'])
// })

// fullName:5

// students.forEach(function(el){
//     console.log(el.fullName + el.skills.length)
// })

// name of person with city nagpur

students.forEach(function(el){
    //console.log(el.city)
    if(el.city == "nagpur"){
        console.log(el.fullName)
    }
})

// average age of all questions
let total = 0
students.forEach(function(el){
    total = total + el.age
})
console.log(total/students.length)

// reduce 
let q1  = students.reduce(function(acc,el){
    return el.age + acc
},0)

console.log(q1/students.length)

students.forEach(function(el){
    el.skills.push("salesforce")
})
console.log(students)

// name of all person with python 

students.forEach(function(el){
    if(el.skills.includes('python')){
        console.log(el.fullName)
    }
})


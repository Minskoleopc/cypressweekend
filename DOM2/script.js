{/* <h1>Head</h1>
<p id = "one" class = "two"  name = nm>para</p>  */}


// to create the element 
// to update the element 
// to add the element 
// delete the element 


// to retrive attribute
// to update attribute value
// to update attribute value
// to delete attribute

//<p id = "one" class = "two"  name = nm>para</p>

//css
// program 1

// let tagName = document.querySelector('p')
// let classNameT = document.querySelector('.two')
// let idName = document.querySelector('#one')
// let commonF = document.querySelector('p[name="nm"]')
// let headOne  = document.querySelector('h1')

// classNameT.addEventListener('click',function(){
//     classNameT.style.color = "green"
//     classNameT.style.backgroundColor = "yellow"
// })

// headOne.addEventListener('click',function(){
//     console.log(headOne.textContent)
//     console.log(headOne['textContent'])
//     headOne.textContent = "Tail"
// })


// Program 2
{/* <h1>Blue</h1>
<button>Change</button> */}

// let headOne = document.querySelector('h1')
// let buttonA = document.querySelector('button')

// buttonA.addEventListener('click',function(){
//     headOne.style.color = "red";
//     headOne.textContent = "Red";
// })


// program 3

let hA = document.querySelector('h1')
let bnA = document.querySelector('button')
let inA = document.querySelector('input')

console.log(hA)
console.log(bnA)
console.log(inA)

bnA.addEventListener('click',function(){
    let colorText = inA.value
    hA.style.color = colorText
    hA.textContent = colorText
    inA.value = ''
})


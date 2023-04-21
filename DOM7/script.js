///<p id="one" class="two"  name = "nm"></p>

// document.querySelector('#one')
// document.querySelector('.two')
// document.querySelector('p')
// document.querySelector('p[name= "nm"]')


{/* <h1>Heading </h1>
<p id="one" class="two" name = "nm"></p>
<ul>
    <li class="fruit">Apple</li>
    <li class="fruit">Mango</li>
    <li class="fruit">Banana</li>
    <li class="fruit">Orange</li>
    <li class="fruit">Grapes</li>
    <li class="fruit">Chiku</li>
</ul> */}
// Retrive the html element in multiple ways 

let fruitNl  = document.querySelectorAll('.fruit')
console.log(fruitNl)
let fruitHC =  document.getElementsByClassName('fruit')
console.log(fruitHC)
let r  = document.getElementById('one')
console.log(r)
let h  = document.getElementsByTagName('li')
let n = document.querySelectorAll('li')

console.log(h )
console.log(n)
let hll2 = document.querySelectorAll('[name="nm"]')
let nll = document.getElementsByName('nm')
console.log(hll2)
console.log(nll)

// class 
let headTwo = document.querySelector('h2')
let t = headTwo.className
console.log(t)

headTwo.classList.add('four')
headTwo.classList.remove('three')
headTwo.classList.toggle('three')
headTwo.classList.toggle('three')
console.log(headTwo)

let r11 = headTwo.getAttribute('id')
console.log(r11)

headTwo.setAttribute('data-cy',"name")
console.log(headTwo)

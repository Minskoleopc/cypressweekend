
let ulList  = document.querySelector('ul')
let input = document.querySelector('input')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    let text = input.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent  = text  // <li>papaya</li>
    ulList.appendChild(newLi)
    input.value = ""

})
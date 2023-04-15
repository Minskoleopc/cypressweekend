
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let button = document.querySelector('#one')


button.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text  // <li>Papaya</li>
    // function call to add buttons
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""


})

function createButtons(li){

    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(r)

    
    let u = document.createElement('button') // <button></button>
    u.textContent = "Up" // <button>Up</button>
    u.classList.add('up') // <button class = "up">Up</button>
    li.appendChild(u)

    
    let d = document.createElement('button') // <button></button>
    d.textContent = "Down" // <button>Down</button>
    d.classList.add('down') // <button class = "down">Down</button>
    li.appendChild(d)







}
let ulList = document.querySelector('ul')
let input = document.querySelector('input')
let buttonOne = document.querySelector('#one')

{/* <li>Manago
            <button class="remove">Remove</button>
            <button class="down">Down</button>
            <button class="up">Up</button>
        </li> */}


ulList.addEventListener('click', function (e) {
    //console.log(e.target)
    //console.log(e.target.tagName)
    //console.log(e.target.className)

    if (e.target.tagName === "BUTTON") {

        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(e.target.className === "up") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if (prev) {
                ul.insertBefore(li, prev)
            }
        }

        else if(e.target.className === "down") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ul.insertBefore(next, li)
            }

        }

    }

})











buttonOne.addEventListener('click', function () {
    let text = input.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    input.value = " "

})

function createButtons(li) {

    let r = document.createElement('button')// <button><button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove')// <button class = "remove">Remove<button>
    li.appendChild(r)


    let u = document.createElement('button')// <button><button>
    u.textContent = "Up" // <button>Up</button>
    u.classList.add('up')// <button class = "up">Up<button>
    li.appendChild(u)


    let d = document.createElement('button')// <button><button>
    d.textContent = "Down" // <button>Down</button>
    d.classList.add('down')// <button class = "down">Down<button>
    li.appendChild(d)


}
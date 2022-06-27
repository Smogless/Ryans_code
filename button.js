let button = document.createElement('button')
button.innerText = ('red')
button.style.height = '100px'
button.style.width = '100px'
button.addEventListener('click', () => {
    document.body.style.backgroundColor = "red"
})
document.body.appendChild(button)




// let button2 = document.createElement('button')
// button.innerText = ('revert color')
// button.style.height = '100px'
// button.style.width = '100px'
// button2.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'white'
// })
// document.body.appendChild(button2)
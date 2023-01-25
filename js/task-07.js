const inputEl = document.getElementById('font-size-control')
const spanEl = document.getElementById('text')
// console.log(spanEl)


inputEl.addEventListener('change', onChangeFontSizeInput)

spanEl.style.fontSize = `${inputEl.value}px`

function onChangeFontSizeInput (event) {    
    inputEl.range = event.currentTarget.value;
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
console.log(spanEl.style.fontSize )
}



// function onChangeFontSizeInput (event) {
//     inputEl.range = event.currentTarget.value;
//     console.log(event.currentTarget.value)
//     spanEl.style.fontSize = `${event.currentTarget.value}px`;
// console.log(spanEl.style.fontSize )
// }
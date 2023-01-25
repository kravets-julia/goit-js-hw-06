const input = document.getElementById('validation-input');
input.addEventListener ('blur', onInputBlur)

function onInputBlur(event) {
    if (event.currentTarget.value.trim().length === Number(input.dataset.length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
         }
    else
    {
    input.classList.add('invalid')
    input.classList.remove('valid')
    }
return
}
console.log(input)

// function onInputBlur(event) {
//     if (event.target.value.length !== 6) {
//         input.classList.add('invalid')
//          }
//     else
//     {
//     input.classList.remove('invalid')
//     input.classList.add('valid')
// }
// return
// }
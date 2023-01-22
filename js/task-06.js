const input = document.getElementById('validation-input');
input.addEventListener ('blur', onInputBlur)

function onInputBlur(event) {
    if (event.target.value.length !== 6) {
        input.classList.add('invalid')
         }
    else
    {
    input.classList.remove('invalid')
    input.classList.add('valid')
}
return
}
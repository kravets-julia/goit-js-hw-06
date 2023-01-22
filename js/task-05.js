const input = document.getElementById('name-input');
const span = document.getElementById('name-output');
 
input.addEventListener('input', onInputChange);

function onInputChange (event) {
    span.textContent = event.currentTarget.value === '' ?  "Anonymous" : event.currentTarget.value;
}


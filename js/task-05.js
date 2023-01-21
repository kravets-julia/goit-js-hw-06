const input = document.getElementById('name-input');
const span = document.getElementById('name-output');
 
input.addEventListener('input', onInputChange);

function onInputChange (event) {
    span.textContent=event.currentTarget.value=event.currentTarget  ? event.currentTarget.value : "Anonymous" ;
    // span.textContent="Anonymous"

    // span.textContent = event.currentTarget.value;
    // if (!event.checked){
    //     return 
    // }
   
}


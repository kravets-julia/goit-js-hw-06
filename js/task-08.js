const form = document.querySelector('.login-form');

const elemets = {
email: "",
password: ""
}


form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault();
  
    const {elements: { email, password } } = event.currentTarget;
    if 
    (email.value === '' || password.value === '') {
        return alert ('Please fill all the fields!')
    }

    // const formEl = `Login: ${email.value} Password: ${password.value}`

    event.currentTarget.reset();
   
}
console.log(elements)


// console.log(newEl.formEl())
const form = document.querySelector('.login-form');




form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault();
  
    const {elements: { email, password } } = event.currentTarget;
    if 
    (email.value === '' || password.value === '') {
        return alert ('Please fill all the fields!')
    }
    const formElemets = {
        login: `${email.value}`,
        password: `${password.value}`
        }

        console.log(formElemets)

    event.currentTarget.reset();
   }




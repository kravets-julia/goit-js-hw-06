const makeCounter = document.getElementById('counter')

let counterValue = 0

const refs = {
    btnDecrement: document.querySelector ('[data-action="decrement"]'),
    btnIncrement: document.querySelector ('[data-action="increment"]'),
    spanCounter: document.getElementById ('value')
}
console.log(refs)

refs.btnDecrement.addEventListener('click', onDecrement);
refs.btnIncrement.addEventListener('click', onIncrement);

refs.spanCounter.textContent = 0

function onDecrement (event) {
    refs.spanCounter.textContent  = counterValue -=1
}


function onIncrement (event) {
    refs.spanCounter.textContent  = counterValue +=1
}
console.log(counterValue)
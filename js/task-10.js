const divEl = document.getElementById('controls')
const divBoxesEl = document.getElementById('boxes')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const inputEl = document.querySelector('input')

btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes (amount) {
 amount = inputEl.value;
    for (let i = 0; i < amount; i+=1) {
    const element = document.createElement('div');
    element.style.width = 30 + (10*i)+'px';
    element.style.height = 30 + (10*i)+'px';
    element.style.backgroundColor =  getRandomHexColor();
   
    const elementsAll = document.createElement('div');
   elementsAll.appendChild(element)
   
      divBoxesEl.appendChild(elementsAll)
   console.log(divBoxesEl)
     }

      inputEl.value=''
}

function destroyBoxes () {
  divBoxesEl.innerHTML = '';
}


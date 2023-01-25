const refs= {
  spanEl:document.querySelector('.color'),
  btnEl:document.querySelector('.change-color'),
  bodyEl:document.querySelector('body')
}

refs.btnEl.addEventListener ('click', onchangeColor)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



function onchangeColor () {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.spanEl.textContent = color
}
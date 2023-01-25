const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.getElementById ('ingredients');

const listContent = ingredients. map((ingredients) => `<li class="item"> ${ingredients} </li>`). join ('');

ingredientsEl.insertAdjacentHTML("beforeend", listContent)

console.log(ingredientsEl.textContent)


// for (const ingredient of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//     liEl.classList.add ('item');
//     ingredientsEl.append(liEl)
// }




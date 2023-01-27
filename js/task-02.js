const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients)

const ingredientsEl = document.getElementById ('ingredients');

const array = [];

for (let i = 0; i < ingredients.length; i+=1) {
const liEl = document.createElement('li')
    liEl.textContent = ingredients[i];
    liEl.classList.add ('item');

array.push(liEl)
}

ingredientsEl.append(...array)

console.log(ingredientsEl)






// const listContent = ingredients. map((ingredients) => `<li class="item"> ${ingredients} </li>`). join ('');

// ingredientsEl.insertAdjacentHTML("beforeend", listContent)

// console.log(ingredientsEl.textContent)


// for (const ingredient of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//     liEl.classList.add ('item');
//     ingredientsEl.append(liEl)
// }




let submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', access)


function access(e) {
  e.preventDefault();//Pour empêcher le bouton submit du form, d'envoyer le formule et rafraichir la page, car c'est pas defaut

  let first = document.getElementById('name').value;

  addToList(first);

}

function addToList(first) {
  
  let inputList = document.querySelector('.input-list');
  let createList = document.createElement('div');

  let listContent = `
  <div>
    <Span class="first-name-list">First Name:</Span>
    <span>${first}</span>
  </div>
  
  `
  createList.innerHTML= listContent;

  inputList.append(createList);


}
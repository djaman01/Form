let submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', access)


function access(e) {
  e.preventDefault();//Pour empêcher le bouton submit du form, d'envoyer le formule et rafraichir la page, car c'est pas defaut

  document.getElementById("submitcheck").disabled = true;//!!! Pour desactiver le boutton une fois qu'il est cliqué 1 fois


  let first = document.getElementById('name').value;
  let last= document.getElementById('last-name').value;
  let birth= document.getElementById('birthday').value;
  let mail= document.getElementById('email').value;
  let gender= document.getElementById('gender').value;

  let linkedin= document.getElementById('linkedin').value;
  let github= document.getElementById('github').value;
  let exp= document.getElementById('exp').value;
  let bio= document.getElementById('bio').value;
  let pic= document.getElementById('pic').value;


  addToList(first, last, birth, mail, gender, linkedin, github, exp, bio, pic);  

}

function addToList(first, last, birth, mail, gender, linkedin,github, exp, bio, pic) {
  
  let inputList = document.querySelector('.input-list');
  let createList = document.createElement('div');
  let listContent = `
  <div class="column-list1">
      <div>
        <Span class="first-name-list">First Name:</Span>
        <span>${first}</span>
      </div>

      <div>
        <Span class="last-name-list">Last Name:</Span>
        <span>${last}</span>
      </div>


      <div>
        <Span class="birthday-list">Birthday:</Span>
        <span>${birth}</span>
      </div>

      <div>
        <Span class="email-list">E-mail:</Span>
        <span>${mail}</span>
      </div>

      <div>
        <Span class="gender-list">Gender:</Span>
        <span>${gender}</span>
      </div>

    </div>

    <div class="column-list2">
      <div>
        <Span class="first-name-list">Linkedin Profile:</Span>
        <span>${linkedin}</span>
      </div>

      <div>
        <Span class="last-name-list">Github Profile:</Span>
        <span>${github}</span>
      </div>


      <div>
        <Span class="birthday-list">Years of experience:</Span>
        <span>${exp}</span>
      </div>

      <div>
        <Span class="email-list">Your Bio:</Span>
        <span>${bio}</span>
      </div>

      <div>
        <Span class="gender-list">Your Photo:</Span>
        <span>${pic}</span>
      </div>

    </div>
  
  `
  createList.innerHTML= listContent;

  inputList.append(createList);

  createList.classList.add('input-list'); 

}
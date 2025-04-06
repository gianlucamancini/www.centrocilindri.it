// import 'flowbite';

const showMenuButton = document.getElementById('show-menu-button');
const closeMenuButton = document.getElementById('hide-menu-button');
const navMenu = document.getElementById('nav-menu');

let toggleNav = (event) => {
  navMenu.classList.toggle('hidden');
}

showMenuButton.addEventListener('click', toggleNav);
closeMenuButton.addEventListener('click', toggleNav);

let editables = document.querySelectorAll('[data-editable]');
editables.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    let el = event.target;
    let sign = prompt("Indirizzo dell'immagine", el.src);
    if (sign) {
      el.setAttribute('src', sign);
    }
  })
})

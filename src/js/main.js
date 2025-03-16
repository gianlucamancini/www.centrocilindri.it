// import 'flowbite';

const showMenuButton = document.getElementById('show-menu-button');
const closeMenuButton = document.getElementById('hide-menu-button');
const navMenu = document.getElementById('nav-menu');

let toggleNav = (event) => {
  navMenu.classList.toggle('hidden');
}

showMenuButton.addEventListener('click', toggleNav);
closeMenuButton.addEventListener('click', toggleNav);

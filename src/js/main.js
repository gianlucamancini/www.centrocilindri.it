import 'flowbite';
const showMenuButton = document.getElementById('show-menu-button');
const closeMenuButton = document.getElementById('hide-menu-button');
const navMenu = document.getElementById('nav-menu');
const carousels = document.querySelectorAll('.carousel');

let toggleNav = (event) => {
  navMenu.classList.toggle('hidden');
}

showMenuButton.addEventListener('click', toggleNav);
closeMenuButton.addEventListener('click', toggleNav);

carousels.forEach((carousel) => {
  let flkty = new Flickity(carousel, {
    // options
    draggable: true,
    percentPosition: true,
    pageDots: false,
  });
});

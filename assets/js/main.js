const openNavButton = document.getElementById('open-nav');
const closeNavButton = document.getElementById('close-nav');
const navElement = document.getElementById('nav');
const rootElement = document.documentElement;

let NAV_IS_OPEN = false;

const openNav = () => {
  if (NAV_IS_OPEN) {
    return;
  }

  console.log('OPENING')
  NAV_IS_OPEN = true;
  rootElement.style.overflowY = 'hidden';
  nav.classList.remove('hidden');
}

const closeNav = () => {
  if (!NAV_IS_OPEN) {
    return;
  }

  console.log('CLOSING')
  NAV_IS_OPEN = false;
  rootElement.style.overflowY = 'visible';
  nav.classList.add('hidden');
}

openNavButton.addEventListener('click', openNav);
closeNavButton.addEventListener('click', closeNav);

const editableItems = document.querySelectorAll('[data-editable]');
editableItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    let element = event.target;
    let sign = prompt("Indirizzo dell'immagine", element.src);

    sign && element.setAttribute('src', sign);
  })
})

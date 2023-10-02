// Mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.getElementById('mobile-menu-toggle');
mobileMenuButton.addEventListener('click', function(event) {
  mobileMenu.classList.toggle('hidden');
});

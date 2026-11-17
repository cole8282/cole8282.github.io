const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('hamburgerMenu');

function setMenu(open) {
    menu.classList.toggle('showMenu', open);
    hamburger.textContent = open ? 'close' : 'menu';
}

hamburger.addEventListener('click', () => setMenu(!menu.classList.contains('showMenu')));
document.querySelectorAll('.menuItem').forEach((link) => link.addEventListener('click', () => setMenu(false)));

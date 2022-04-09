const btnMenu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');

btnMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo');
});
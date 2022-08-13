'use strict';

export const showMenu = function (nav, btn) {
  
  function toggleMenu() {
    nav.classList.toggle('show');
  }
  
  btn.addEventListener('click', () => {
    toggleMenu();
  });
};
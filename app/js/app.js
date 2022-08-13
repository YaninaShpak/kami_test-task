'use strict';

let navigation = document.querySelector('.navigation');
let buttonMenu = document.querySelector('#hamburger');

import { isWebp } from './modules/function-webp.js';
isWebp();

new Swiper('.mySwiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

import { showMenu } from './modules/menu.js';
showMenu(navigation, buttonMenu);

import { showModal, closeModal } from './modules/modal.js';
showModal(navigation, buttonMenu);
closeModal();


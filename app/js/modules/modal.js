'use strict';

const btnCall = document.querySelector('.button-call'),
      btnClose = document.querySelector('.button-close'),
      modal = document.querySelector('.modal'),
      modalBody = document.querySelector('.modal__body');

function removeClassModal() {
  modal.classList.remove('active');
} 

export function showModal(nav, n) {
  btnCall.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    nav.classList.remove('show');
    n.checked = false;
  });
}

export function closeModal() {
  btnClose.addEventListener('click', () => {
    removeClassModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modalBody) {
      removeClassModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      removeClassModal();
    }
  });
}
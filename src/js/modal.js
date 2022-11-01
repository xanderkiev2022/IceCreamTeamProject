const modalButtons = document.querySelectorAll('[data-modal-button]');
const allModals = document.querySelectorAll('[data-modal]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

// привязка модального окна к кнопке его вызова
modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    // привязываем к кнопке вызова модального окна значение дата атрибута которое соответствует id модалки
    const modalId = document.querySelector('#' + this.dataset.modalButton);
    modalId.classList.remove('is-hidden');

    // отмена закрытия модального окна кликом по его контенту
    // modalId
    //   .querySelector('.modal-window')
    //   .addEventListener('click', function (event) {
    //     event.stopPropagation();
    //   });
  });
});

// закрытие модального окна кликом по кнопке внутри его "Закрыть окно"
modalCloseButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    const modal = this.closest('[data-modal]');
    modal.classList.add('is-hidden');
  });
});

// закрытие модального окна кликом по фейду
// allModals.forEach(function (item) {
//   item.addEventListener('click', function () {
//     this.classList.add('is-hidden');
//   });
// });

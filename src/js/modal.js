(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-slider]'),
    closeModalBtn: document.querySelector('[data-modal-close-slider]'),
    modal: document.querySelector('[data-modal-slider]'),

    openModalBtn: document.querySelector('[data-modal-open-slider]'),
    closeModalBtn: document.querySelector('[data-modal-close-slider]'),
    modal: document.querySelector('[data-modal-slider]'),

    openModalBtn: document.querySelector('[data-modal-open-slider]'),
    closeModalBtn: document.querySelector('[data-modal-close-slider]'),
    modal: document.querySelector('[data-modal-slider]'),

    openModalBtn: document.querySelector('[data-modal-open-slider]'),
    closeModalBtn: document.querySelector('[data-modal-close-slider]'),
    modal: document.querySelector('[data-modal-slider]'),

    openModalBtn: document.querySelector('[data-modal-open-slider]'),
    closeModalBtn: document.querySelector('[data-modal-close-slider]'),
    modal: document.querySelector('[data-modal-slider]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

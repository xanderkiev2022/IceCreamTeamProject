new Swiper('.mySwiper1', {
  autoplay: true,
  slidesPerView: 'auto',
  loop: true,
  loopedSlides: 3,
  spaceBetween: 500,
  centeredSlides: true,
});

new Swiper('.mySwiper2', {
  autoplay: true,
  slidesPerView: 'auto',
  loop: true,
  loopedSlides: 3,
  spaceBetween: 500,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// CARDS
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const carouselList = document.querySelector('.carousel__list');
const nextButton = document.querySelector('.carousel__button--next');
const prevButton = document.querySelector('.carousel__button--prev');

// Opcional: pausar/retomar a animação ao passar o mouse
carouselList.addEventListener('mouseenter', () => {
  carouselList.style.animationPlayState = 'paused';
});

carouselList.addEventListener('mouseleave', () => {
  carouselList.style.animationPlayState = 'running';
});

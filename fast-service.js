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

const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let index = 0;

function moveCarousel() {
    index++;
    
    // Se o índice atingir o número total de imagens, reinicie
    if (index >= images.length) {
        index = 0;
        carouselImages.style.transition = 'none'; // Remove transição ao reiniciar
        carouselImages.style.transform = `translateX(0)`;
        
        // Para garantir a transição ao voltar
        setTimeout(() => {
            carouselImages.style.transition = 'transform 0.5s ease-in-out'; // Reativa a transição
        }, 50);
    } else {
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }
}

// Mover a cada 3 segundos
setInterval(moveCarousel, 3000);

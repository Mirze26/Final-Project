

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  virtual: {
    slides: (function () {
      const slides = [];
      for (var i = 0; i < 2; i += 1) {
        slides.push('Slide ' + (i + 1));
      }
      return slides;
    })(),
  },
});

document
  .querySelector('.slide-1')
  .addEventListener('click', function (e) {
    e.preventDefault();
  
  });

 
 








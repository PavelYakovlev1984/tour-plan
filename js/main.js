var hotelSlider = new Swiper('.hotel-slider', { 
 
    keyboard: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  loop: true,
  enabled: true,
  
  pageUpDown: true,

});
var reviewsSlider = new Swiper('.reviews-slider', { 
 
    keyboard: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  loop: true,
  enabled: true,
  
  pageUpDown: true,

});

var menuButton = document.querySelector(".menu-button")

menuButton.addEventListener("click", function(){
  console.log("Клик по кнопке меню")
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
})


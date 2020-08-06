$(document).ready(function(){
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
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal)

function openModal(){
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}
function closeModal(event){
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}


});
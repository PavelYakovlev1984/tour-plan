$(document).ready(function(){
  var hotelSlider = new Swiper('.hotel-slider', { 
 
    keyboard: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  loop: true,
  enabled: true,
  
  pageUpDown: true,


  observer: true, 
  observeParents: true,

});
var reviewsSlider = new Swiper('.reviews-slider', { 
 
    keyboard: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  

  loop: true,
  enabled: true,
  
  pageUpDown: true,

});

var menuButton = document.querySelector(".menu-button")

menuButton.addEventListener("click", function(){
  console.log("Click on the menu button")
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

// Обработка форм
$(".form").each(function(){
    $(this).validate({
      /* errorClass: "invalid", */
    
      messages: {
        name: {
          required: "Specified name",
          minlenght: "The name must be at least two letters long"},
        email: {
          required: "Enter your email address",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
           required: "Phone number required",
        },
    
      },
    });
});
AOS.init();







const maskPhone = (
  selector,
  defaultBorderColor,
  masked = '+7 (___) ___-__-__',
  clearLength = 5
) => {
  const elem = document.querySelector(selector);

  const addStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
      .mask__error-input {
        border: 2px solid red !important;
      }   
      .mask__default-input {
        border: 1px solid ${defaultBorderColor} !important;
      }   
      .mask__success-input {
        border: 2px solid green !important;
      }   
    `;

    document.head.appendChild(style);
  };

  const error = () => {
    event.target.classList.add('mask__error-input');
    event.target.classList.remove('mask__default-input');
    event.target.classList.remove('mask__success-input');
    //event.target.style.border = '2px solid red'
  };

  const defaultStyle = () => {
    event.target.classList.remove('mask__error-input');
    event.target.classList.add('mask__default-input');
    //event.target.style.border = `1px solid ${defaultBorderColor}`;
  };

  const success = () => {
    event.target.classList.remove('mask__error-input');
    event.target.classList.add('mask__success-input');
    //event.target.style.border = '2px solid green'
  };

  const focus = () => {
    const indexOfUnderscores = masked.indexOf('_');
    if (elem.value < 1) {
      elem.value = masked.slice(0, indexOfUnderscores);
    }
  };

  const input = () => {
    const lastSimbol = event.target.value.slice(-1);

    const getActualValue = () => {
      let indexOfUnderscores = 0,
        template = masked,
        countryCode = template.replace(/\D/g, ""),
        numberValue = elem.value.replace(/\D/g, "");

      let actualValue = template.replace(/[_\d]/g, function (e) {
        return indexOfUnderscores < numberValue.length ? numberValue[indexOfUnderscores++] || countryCode[indexOfUnderscores] : e;
      });

      indexOfUnderscores = actualValue.indexOf("_");

      indexOfUnderscores !== -1 ? actualValue = actualValue.slice(0, indexOfUnderscores) : success();

      return actualValue;
    };

    elem.value = getActualValue();

    elem.value.length !== masked.length ?
      /\D/g.test(lastSimbol) ? error() : defaultStyle() :
      success();
  };

  const blur = () => {
    if (elem.value.length !== masked.length) {
      error();
      if (elem.value.length < clearLength) {
        elem.value = "";
      }
    }
  };

  const eventListeners = () => {
    elem.addEventListener('focus', focus);
    elem.addEventListener('input', input);
    elem.addEventListener('blur', blur);
  };

  addStyle();
  eventListeners();
};

maskPhone('.modal__input', '#000')






  
});



/* }); */
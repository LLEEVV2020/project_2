import './jquery.fancybox.js';

import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

/**Не знаю куда добавить скипт для модалки */
$(document).ready(function() {
  $('.fancybox').fancybox({
      padding : 0,
      openEffect  : 'elastic',
      closeBtn: false
  });
});

/** слайждер */
$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/** слайждер */
$('.certificates__slider').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$(document).ready(function() {

  var element = $(".fixed_block");
  var height_el = element.offset().top;

  $(".fixed_block_position").css({
    "width": element.outerWidth(),
    "height": element.outerHeight()
  });

  $(window).scroll(function() {

    if($(window).scrollTop() > height_el) {

      element.addClass("fixed");

    } else {

      element.removeClass("fixed");

    }

  });

});


$(document).ready(function() {
  $("a.gallery").fancybox();
});

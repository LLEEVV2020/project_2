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

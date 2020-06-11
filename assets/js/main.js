jQuery(function ($) {
  $(function () {   
    $('a').bind('click', function (event) {

      if ($(this).parents('.navbar').length) {
        $('.navbar .active').removeClass('active');
        $(this).closest('li').addClass('active');
      }

      var $anchor = $(this);
      var nav = $($anchor.attr('href'));
      if (nav.length) {
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
      }
    });
  });

  new WOW().init();

  $(".navbar-light .navbar-nav .nav-link").on('click', function () {
    $(".navbar-collapse").removeClass('show');
  });

  $(window).load(function () {
    'use strict';
  });
 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});

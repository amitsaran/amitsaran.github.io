jQuery(function ($) {
    $(function () {   
      $('a').bind('click', function (event) {
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
  
    $(".navbar-collapse a").on('click', function () {
      $(".navbar-collapse.collapse").removeClass('in');
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
  
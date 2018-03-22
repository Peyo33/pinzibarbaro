// $(document).ready(function () {
//     $('img.slide').css('position', 'absolute');
//     $('#slidelist img:gt(0)').hide();
// });
//
// setInterval(function () {
//     $('#slidelist :first-child').fadeOut(800, function () {
//
//     }).next('img').fadeIn(1600).end().appendTo('#slidelist');
// }, 5000);
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    nav:false,
    dots:false
});

$("#slidelist_m").owlCarousel({
  items:1,
  loop:true,
  autoplay:true,
  nav:false,
  dots:false
});
});

$('a').click(function(e){
  e.preventDefault();
  var nnn = $(this).attr('href').replace("#", "");
  var ttt = $('[name="'+nnn+'"]').offset().top - 80;
  $('html,body').animate({
    scrollTop: ttt
  }, 1000);
});

$(function() {
  var $elements = $('.animateBlock.notAnimated'); //contains all elements of nonAnimated class
  var $window = $(window);
  $window.on('scroll', function(e) {
    $elements.each(function(i, elem) { //loop through each element
      if ($(this).hasClass('animated')) // check if already animated
        return;
      animateMe($(this));
    });
  });
});

function animateMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
    // exchange classes if element visible
    $(elem).removeClass('notAnimated').addClass('animated');
  }
}

$(function() {
  var $elements = $('.animateFade.notAnimated'); //contains all elements of nonAnimated class
  var $window = $(window);
  $window.on('scroll', function(e) {
    $elements.each(function(i, elem) { //loop through each element
      if ($(this).hasClass('animated')) // check if already animated
        return;
      animateMe($(this));
    });
  });
});

function animateMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
    // exchange classes if element visible
    $(elem).removeClass('notAnimated').addClass('animated');
  }
}

$(function() {
  var $elements = $('.animateSlideup.notAnimated'); //contains all elements of nonAnimated class
  var $window = $(window);
  $window.on('scroll', function(e) {
    $elements.each(function(i, elem) { //loop through each element
      if ($(this).hasClass('animated')) // check if already animated
        return;
      animateMe($(this));
    });
  });
});

function animateMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
    // exchange classes if element visible
    $(elem).removeClass('notAnimated').addClass('animated');
  }
}

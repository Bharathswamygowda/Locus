
!(function($) {
"use strict";


// Stick the header at top on scroll
var navbar = document.querySelector('header')

window.onscroll = function() {

// pageYOffset or scrollY
if (window.pageYOffset > 0) {
navbar.classList.add('scrolled')
} else {
navbar.classList.remove('scrolled')
}
}

// Mobile Navigation
if ($('.nav-menu').length) {
var $mobile_nav = $('.nav-menu').clone().prop({
class: 'mobile-nav d-lg-none'
});
$('body').append($mobile_nav);
$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>' + '<li class="dropdown d-lg-none mobile-nav-toggle"> <a data-toggle="dropdown" class="dropdown-toggle"> <img src="Assets/images/US.png"/> </a><div class="dropdown-menu"><a class="dropdown-item" href="#">Link 1</a><a class="dropdown-item" href="#">Link 2</a><a class="dropdown-item" href="#">Link 3</a></div></li>');
$('body').append('<div class="mobile-nav-overly"></div>');

$(document).on('click', '.mobile-nav-toggle', function(e) {
$('body').toggleClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
$('.mobile-nav-overly').toggle();
});

$(document).on('click', '.mobile-nav .drop-down > a', function(e) {
e.preventDefault();
$(this).next().slideToggle(300);
$(this).parent().toggleClass('active');
});

$(document).click(function(e) {
var container = $(".mobile-nav, .mobile-nav-toggle");
if (!container.is(e.target) && container.has(e.target).length === 0) {
if ($('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
$('.mobile-nav-overly').fadeOut();
}
}
});
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
$(".mobile-nav, .mobile-nav-toggle").hide();
}








$('.people__stroies--carousel').owlCarousel({
loop:false,
rewind:true,
margin:30,
nav:true,
autoHeight:true,
autoplay:false,
dots:false,
responsive:{
0:{
items:1,
},

320:{
items:1,
},

321:{
items:1,
},

600:{
items:1,
},


1000:{
items:3
}
}
})








})(jQuery);






//=include libs/swiper.min.js
//=include libs/jquery.min.js
//=include libs/countdown.jquery.min.js

var swiper = new Swiper('.swiper-paty', {
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1300: {
            slidesPerView: 4,
        }
    }
});

var swiper = new Swiper('.slider-offer', {
    slidesPerView: 1,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
    }
});
var swiper = new Swiper('.swiper-artist', {
    slidesPerView: 1,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

var swiper = new Swiper('.hall-swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

$(function () {
    $('#countdown').countdown({
        year: 2020,
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
    });
});

$(".anchor-site").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$(".header-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$(".nav-list").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});




var collapseButton = $('.collapse-item .title-big');
collapseButton.on('click', function () {
    var textBlock = $(this).next();
    $(this).toggleClass('title-big--yellow');
    textBlock.slideToggle();
});

var collapseButton = $('.artist-container-item .title-big');
collapseButton.on('click', function () {
    var textBlock = $(this).next();
    $(this).toggleClass('title-big--yellow');
    textBlock.slideToggle();
});

 
    var $window = $(window),
    lastScrollTop = 0;

function onScroll (e) {
    var top = $window.scrollTop();
    if (lastScrollTop > top) {
        console.log('top');
        var x = $(this).scrollTop();
        
        $('body').css('background-position', '0% ' + parseInt(+x * (-1.5) ) + 'px');
    } else if (lastScrollTop < top) {
        // console.log('down');
        var x = $(this).scrollTop();
        $('body').css('background-position', '0% ' + parseInt(x *6.5 ) + 'px');
    }
    lastScrollTop = top;
}

$window.on('scroll', onScroll);

// });
    $('.header__burger').on('click', function() {
        $('.header-menu').toggleClass('header-menu--active');
    })
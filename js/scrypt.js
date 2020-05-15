$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.header__menu,.header__list').toggleClass('active');
        $('body').toggleClass('lock');

    });
});
$('.first-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    appendDots: $('.header-slider-line'),
    waitForAnimate: false,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                centerMode: true
            }
        }, {
            breakpoint: 790,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }
    ]
});
$('.slider-box').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    rows: 2,
    dots: true,
    appendDots: $('.slider-2__head-line'),
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 790,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
})
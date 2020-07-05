$(function () {

    $('.slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider__nav',
        prevArrow: '<button type="button" class="slider__btn btn__prev"><img src="images/btn-prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slider__btn btn__next"><img src="images/btn-next.png" alt=""></button>',
        responsive: [{
            breakpoint: 741,
            settings: {
                arrows: false,
                autoplay: true,
                fade: true,

            },
        }]
    });


    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,


    });
    $('.header__menu-btn').on('click', function () {
        $('.header__menu > ul').slideToggle();
    });


});
$(document).ready(function () {
    $('.team__slider').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        swipe: true,
        arrows: true,
        infinite: true,
    });
    $('.slick-prev').css("display", "none");
    $('.team__slider').on('afterChange', function (event, slick, currentSlide) {


        if (currentSlide === 0) {
            $('.slick-prev').css("display", "none");
        }
        else {
            $('.slick-prev').css("display", "");
        }
    })
    $('.feedback__slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        swipe: true,
        arrows: true,
        infinite: true,
    });
    $('.slick-prev').html("");
    $('.slick-next').html("");

    console.log()
    if (window.screen.width <= 1200)
        $('.team__slider').slick('slickSetOption', 'slidesToShow', 3);


    if (window.screen.width <= 767) {
        $('.team__slider').slick('slickSetOption', 'slidesToShow', 2);
    }

    if (window.screen.width <= 595) {
        $('.team__slider').slick('slickSetOption', 'slidesToShow', 1);
    }

});
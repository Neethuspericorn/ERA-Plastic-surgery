$(document).ready(function(){
    $('.banner-slider').slick({
        arrows: false,
    });
    $('#home-tt-slider').slick({
        dots: true,
        prevArrow: "#prev",
        nextArrow: "#next"
    });
});




$('.before-after-slide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $('.fade-sl').slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
  });
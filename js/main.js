$(document).ready(function(){
    $('.banner-slider').slick({
        arrows: false,
        fade: true
    });
    $('#home-tt-slider').slick({
        dots: true,
        prevArrow: "#prev",
        nextArrow: "#next",
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.testimonial-slider').slick({
        dots: true,
        prevArrow: "#prevArrow",
        nextArrow: "#nextArrow",
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.tranform-slide').slick({
        arrows: true,
        fade: true
    })
    $(".navbar-toggler").click(function(){
        $("body").toggleClass("menu-open");
    });
    
});




$('.before-after-slide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  });


//   $('.fade-sl').slick({
//     infinite: true,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     speed: 500,
//     fade: true,
//     arrows: false,
//     cssEase: 'linear'
//   });
$(function(){

    $(".slider").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        utoplaySpeed: 2000,
        infinite: true,
        speed: 500,
    });
    

    $('.img_Text').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    

});
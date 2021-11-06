$(document).ready(function(){
    $('.demo').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='left.jpg'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='right.jpg'>"
    });
});
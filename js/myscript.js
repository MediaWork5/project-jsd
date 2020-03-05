/*glopal $, alert, console*/

$(function(){
    'use strict';
    // menu bars at mobile screen
    $("nav .container > .row > div:nth-child(1) i").click(function(){
        $("nav .container > .row > div:nth-child(2)").toggleClass("show");
    });

    /****************** start product ***************/
    $(".link a").on("click", function () {
        $(".gallery").hide();
        $($(this).data('class')).show(200);
        $(this).addClass("active").siblings().removeClass("active");
    });

    // the bitton to top
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 750){
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){
        $("html, body").animate({ scrollTop: 0}, 2000);
    });

    //starting the carousel1111111111111
    $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true, 
        responsive: [    
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5    
                }
            },       
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 576,
                settings: {    
                    slidesToShow: 3
                }
            }    
        ]         
    });
    /*// On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
        console.log(direction);
        // left
    });
    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
        console.log('edge was hit')
    });
    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
    });
  
    /*$(document).ready(function(){
        $('.autoplay').slick({
        });
    });*/
    
    /** antimate the heart in header**/
    for(var i = 0; i < 10000; i++){
      $("nav .myheart").fadeToggle(500);
    }


});
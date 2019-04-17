$(document).ready(function() {
    // checkWindowWidth();

    // toggle language menu
    $('.flag').on('click', function() {
        $('.lang-menu').toggleClass('hidden');
    });

    // $(window).on("resize", function(){
    //     checkWindowWidth();
    // });

    // function rwdDomRebuild(mobile, desktop) {
    //     if (mobile) {
    //     let $nav = $('nav').detach()
    //     let $contact = $('.header-contact').detach()
    //     let $myAcc = $('.lang-settings').detach()
    //     let $langMenu = $('.my-account').detach()
    //     }
    //     if (desktop) {
    //         $('.wrapper--bg-white').append($nav)
    //     }
    // }

    // function checkWindowWidth(){
    //     $vWidth = $(window).width();
    //     if($vWidth < 768){
    //         rwdDomRebuild('mobile')
    //     } else {
    //         rwdDomRebuild('desktop')
    //     }
    // }


    $('.slider-photos').slick({
        infinite: true,
        vertical: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="arrow-down"><img src="./img/slick-down-arrow.png"></button>',
        prevArrow: '<button type="button" class="arrow-up"><img src="./img/slick-up-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
              breakpoint: 760,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                arrows: false
              }
            }
          ]
    });


    $( function() {
        $( "#accordion" ).accordion({
          collapsible: false
        });
      } );

});
$(document).ready(function() {

    $('.flag').on('click', function() {
        $('.lang-menu').toggleClass('hidden');
    });




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
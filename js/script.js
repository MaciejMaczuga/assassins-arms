$(document).ready(function() {
// get all elements needed for mobile menu


  function reorganize() {
    var menu = $('#menu');
    var search = $('.search-wrapper');
    var lang = $('.lang-menu');
    var contact = $('.header-contact');
    var account = $('.my-account')
    menu.prepend(search);
    menu.append([account, contact, lang]);
  }
  reorganize();


    $('.flag').on('click', function() {
        $('.lang-menu').toggleClass('hidden');
    });


    // $('.slick').on('beforeChange', function(event,slick,slide,nextSlide) {
    //   $('.slider-nav-thumbnails').find('.slick-slide').removeClass('slick-current').eq(nextSlide).addClass('slick-current');
    //   });


    $('.slider-photos').slick({
        infinite: true,
        vertical: true,
        focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="arrow-down"><img src="./img/slick-down-arrow.png"></button>',
        prevArrow: '<button type="button" class="arrow-up"><img src="./img/slick-up-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
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
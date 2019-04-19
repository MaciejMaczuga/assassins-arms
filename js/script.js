$(document).ready(function() {
// get all elements needed for mobile menu

  $(window).resize(checkSize)
  function checkSize(){
    var size = $(document).width();
    reorganize()
  }

  function reorganize() {
    var menu = $('#menu');
    var search = $('.search-wrapper');
    var lang = $('.lang-menu');
    var contact = $('.header-contact');
    var account = $('.my-account');
    var width = $(window).width();

    if ( width >= 768) {
      search.insertAfter('.logo-wrapper');
      account.insertAfter('.lang-settings');
      $('.wrapper-black').append(contact);
      lang.insertAfter('.flag');
      menu.css('display', 'flex');
    } else {
      menu.css('display', 'none')
    menu.prepend(search);
    menu.append([account, contact, lang]);
    }
  }
  reorganize();


  // toggling mobile nav on click
  var btnMenu = $('.mobileBtn')
  btnMenu.click(function() {
    $( ".navigation-lvl-1" ).slideToggle( "slow", function() {
    });
  });

    $('.flag').on('click', function() {
        $('.lang-menu').toggleClass('hidden');
    });


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


    $(function faqAccordion() {
        $( "#accordion" ).accordion({
          collapsible: false
        });
      });



});
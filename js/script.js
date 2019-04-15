$(document).ready(function() {
    $('.flag').on('click', function() {
        $('.lang-menu').toggleClass('hidden');
    })

    $('.navigation-lvl-1-cat > a').on('mouseenter', function(event) {
        $(event.target).next('ul').removeClass('nav-hidden')
    })
    $('.navigation-lvl-1-cat > a').on('mouseleave', function(event) {
        $(event.target).next('ul').addClass('nav-hidden')
    })
})